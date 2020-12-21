// Exemplo de árvore em NodeJS.

function Node(data) {
    this.data = data;
    this.children = [];
};
// Aqui vai ter um array vazio onde irá armazenar os Nodes da arvore 

// Aqui temos o connstructor da nossa árvore
class Tree {
    constructor() {
        this.root = null; 
    }
    /*toNodeData é onde vai encontrar o node a ser acrescentado */
    add(data, toNodeData) {
        const node = new Node(data);

        const parent = toNodeData ? this.findBFS(toNodeData) : null 
        /* Estamos pasando o parent para o nodeData, caso contrário, (utilizando um operador ternário retornar null), 
        findBFS vai encontrar o node the contem o dado que foi passado, esse método é chamado de Breadth first search */
        // Caso seja encontrado através do vai ser puxado para o children da árvore que é nosso array inicial
        if(parent){
            parent.children.push(node)
        }
        else{
            if(!this.root){
                this.root = node;
            }
            else{
                return "Tried to Store node at root when root already exists"
            }
        }
    }

    findBFS(data){
        const queue = [this.root];
        let _node = null;

        this.traverseBFS((node) => {
            if(node.data == data)
            _node = node
        });
        return _node; 
    }
    traverseBFS(cb) {
        const queue = [this.root]

        if (cb)
            while(queue.length){
                const node = queue.shift();
                cb(node) 

                for(const child of node.children){
                    queue.push(child)
                }
            }
    }
}   // Shift remove o primeiro node e gurda em uma variavel. 


// Function test serve para inserir os dados na árvore, podem ser inseridos mais nodes. 
(
    function test(params) {
        let tree = new Tree();

        tree.add("Node1");
        tree.add("Node2", "Node1");
        tree.add("Node3", "Node1");

        tree.traverseBFS((node) => {console.log("CurrentNode: ", node)})
    }
)()


//Author: Gabriel Savian 
// 21/dec/2020
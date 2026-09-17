import { useState }from 'react'

//Array de objetos contendo o estado inicial do cardápio 
const cardapio =[
    {id:1,nome:"Combo-01",preco:25.00,disponivel:true, quantidade:0},
    {id:2,nome:"Combo-02",preco:30.00,disponivel:true, quantidade:0},
    {id:3,nome:"Combo-03",preco:35.00,disponivel:false, quantidade:0},
    {id:4,nome:"Combo-04",preco:40.00,disponivel:true, quantidade:0}
]


const Pedido = () => {

    // HOOK- useState-Manipula o estado da variável
    //Exemplos vai gerenciar a lista de items do cardápio
    const [items, setItems]=useState(cardapio);
    const [status, setStatus]=useState("")
    const [enviar, setEnviar]=useState(false);

    //Valor fixo da taxa de entrega adicionado ao total quando tiver items ao carrinho
    const taxaEntrega=5.00;


    //Função que altera a quantidade do pedido 
    const AlterarQuandidade =(id,valor)=>{
        setItems(prev=>
            //Map: percorre a lista para criar um novo array sem modificar o original
            prev.map(item=>
                //Ternário: verifica se o item da interação atual é o que deve ser alterado
                //spreed(...item) : adiciona o item a lista atualou modifica
                //Math.max - objeto que garante que a quantidade nunca seja menor que 0
                //item: retorna o item intacto caso o id não corresponda
                item.id===id ? {...item,quantidade:Math.max(0,item.quantidade + valor)}:item
            )
        )
    }

    //FILTER: Seleciona apenas os produtos disponíveis e do carrinho
    const produtosDisponiveis = items.filter(item =>item.disponivel);
    const carrinho = items.filter(item.quantidade >0);

    //REDUCE: Calcula a soma dos items (preco * quantidade)
    //e adiciona a taxa de entrega
    const subTotal = carrinho.reduce((ac,item)=>ac.item.preco * item.quantidade,0)
    const total = subTotal > 0 ? subTotal + taxaEntrega: 0;

    return (
    <div>
      
    </div>
  )
}

export default Pedido

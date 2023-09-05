export const catalogo = [
 
  {
    id: "1",
    marca: "Zara",
    nome: "CAMISETA KEN BARBIE",
    preco: 199,
    imagem: "product-10.jpg",
    feminino: false,
  },
  {
    id: "2",
    marca: "Zara",
    nome: "BLAZER CRUZADO TRAJE KEN",
    preco: 699,
    imagem: "product-11.jpg",
    feminino: false,
  },
  {
    id: "3",
    marca: "Zara",
    nome: "CONJUNTO XADREX BARBIE",
    preco: 499,
    imagem: "product-12.jpg",
    feminino: true,
  },
  {
    id: "4",
    marca: "Zara",
    nome: "TOP HALTER BARBIE",
    preco: 279,
    imagem: "product-13.jpg",
    feminino: true,
  },

  {
    id: "5",
    marca: "Zara",
    nome: "CAMISETA LISTRADA KEN",
    preco: 259,
    imagem: "product-14.jpg",
    feminino: false,
  },

  {
    id: "6",
    marca: "Zara",
    nome: "SHORT COM JACQUARD",
    preco: 129,
    imagem: "product-15.jpg",
    feminino: true,
  },

  {
    id: "7",
    marca: "Zara",
    nome: "MOLETOM BARBIE",
    preco: 379,
    imagem: "product-16.jpg",
    feminino: true,
  },

  {
    id: "8",
    marca: "Zara",
    nome: "CALÇA ACETINADA BARBIE",
    preco: 279,
    imagem: "product-17.jpg",
    feminino: true,
  },

  {
    id: "9",
    marca: "Zara",
    nome: "MAIÔ 2 EM 1 BARBIE",
    preco: 339,
    imagem: "product-18.jpg",
    feminino: true,
  },

  {
    id: "10",
    marca: "Zara",
    nome: "CAMISETA KEN BARBIE",
    preco: 379,
    imagem: "product-19.jpg",
    feminino: false,
  },

  {
    id: "11",
    marca: "Zara",
    nome: "VESTIDO DRAPEADO BARBIE",
    preco: 799,
    imagem: "product-20.jpg",
    feminino: true,
  },

  {
    id: "12",
    marca: "Zara",
    nome: "MACACÃO HALTER DENIM BARBIE",
    preco: 379,
    imagem: "product-21.jpg",
    feminino: true,
  },

  {
    id: "13",
    marca: "Zara",
    nome: "CAMISETA XADREZ KEN",
    preco: 279,
    imagem: "product-22.jpg",
    feminino: false,
  },
];

export function salvarLocalStorage(chave, informacao) {
  localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
  localStorage.removeItem(chave);
}

export function desenharProdutoCarrinhoSimples(
  idProduto,
  idContainerHtml,
  quantidadeProduto
) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho = document.getElementById(idContainerHtml);

  const elementoArticle = document.createElement("article"); //<article></article>
  const articleClasses = [
    "flex",
    "bg-slate-100",
    "rounded-lg",
    "p-1",
    "relative",
    "mb-2",
    "w-96",
  ];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }
  //<article class="flex bg-slate-100 rounded-lg p-1 relative"></article>

  const cartaoProdutoCarrinho =` 
    <img
      src="./assets/img/${produto.imagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg"
    />
    <div class="p-2 flex flex-col justify-between">
      <p class="text-pink-400 text-sm">
        ${produto.nome}
      </p>
      <p class="text-slate-400 text-xs">Tamanho: M</p>
      <p class="text-green-700 text-lg">$${produto.preco}</p>
    </div>
    <div class='flex text-slate-950 items-end absolute bottom-0 right-2 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
    </div>`;
  //<article class="flex bg-slate-100 rounded-lg p-1 relative">codigo do cartao do produto</article>

  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);
}

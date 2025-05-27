// Simple JavaScript for demonstration
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart button functionality
    const addToCartButtons = document.querySelectorAll('.product-card button');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            const productPrice = this.closest('.product-card').querySelector('.fs-4').textContent;
            
            alert(`Adicionado ao carrinho:\n${productName}\n${productPrice}`);
        });
    });
    
    // Banner auto-slide (simplified)
    let currentBanner = 0;
    const banners = [
        { title: "Oferta Especial de Verão", subtitle: "Até 50% de desconto em itens selecionados" },
        { title: "Novos Produtos Chegaram", subtitle: "Confira nossa última coleção" },
        { title: "Frete Grátis", subtitle: "Para compras acima de R$ 299" }
    ];
    
    function changeBanner() {
        currentBanner = (currentBanner + 1) % banners.length;
        const banner = document.querySelector('.banner-animate h2');
        const subtitle = document.querySelector('.banner-animate p');
        
        banner.style.opacity = 0;
        subtitle.style.opacity = 0;
        
        setTimeout(() => {
            banner.textContent = banners[currentBanner].title;
            subtitle.textContent = banners[currentBanner].subtitle;
            banner.style.opacity = 1;
            subtitle.style.opacity = 1;
        }, 500);
    }
    
    // Change banner every 5 seconds
    setInterval(changeBanner, 5000);
});

//Carregamento de produto

let produtos = [
    {
        lista:"Tears for Fears - Roupas",
        produtos:[
            {
                nome:"Camiseta Tears for Fears",
                preco:"29,90",
                img:"./img/tff/camiseta1.jpg",
                href:"https://s.shopee.com.br/9UpDk2va8q?share_channel_code=1"
            },
            {
                nome:"Everybody Wants To Rule The World 100 % Algodão",
                preco:"29,90",
                img:"./img/tff/camiseta2.jpg",
                href:"https://s.shopee.com.br/30bk09JJzC?share_channel_code=1"
            },
            {
                nome:"Camiseta Feminina Tears For Fear T-shirt Dry Fit",
                preco:"29,90",
                img:"./img/tff/camiseta3.jpg",
                href:"https://s.shopee.com.br/2fytbaANAk?share_channel_code=1 "
            },
            {
                nome:"Regata Machão Tears For Fears Dry Fit Banda Rock",
                preco:"31,50",
                img:"./img/tff/regata.jpg",
                href:"https://s.shopee.com.br/4L77bQFR7U?share_channel_code=1 "
            },
            {
                nome:"Camisa Camiseta Dry Fit Rock Academia Treino Masculino",
                preco:"34,90",
                img:"./img/tff/camiseta4.jpg",
                href:"https://s.shopee.com.br/8fG6lPpXSr?share_channel_code=1  "
            },
            {
                nome:"Boné Trucker Banda De Rock Aba Curvada Telinha Premium",
                preco:"37,50",
                img:"./img/tff/bone1.jpg",
                href:"https://s.shopee.com.br/3LEaPscZpO?share_channel_code=1   "
            },
            {
                nome:"Roll Down Inglês Mais Boné De Beisebol",
                preco:"47,50",
                img:"./img/tff/bone2.jpg",
                href:"https://s.shopee.com.br/4fjy0O5HWd?share_channel_code=1 "
            },
            {
                nome:"Tobuy Tears For Fears Dream Birds Earth Music",
                preco:"51,82",
                img:"./img/tff/bone3.jpg",
                href:" https://s.shopee.com.br/6poSaON1jG?share_channel_code=1 "
            },
            {
                nome:"Moletom Feminino Tears For Fears",
                preco:"167,00",
                img:"./img/tff/moletom.jpg",
                href:"https://s.shopee.com.br/7fNZa1i2Ek?share_channel_code=1  "
            },
        ]
    },
    {
        lista:"Tears for Fears - Canecas",
        produtos:[
            {
                nome:"Taca Cerveja Tears For Fears 300ml",
                preco:"29,89",
                img:"./img/tff/taca.jpg",
                href:"https://s.shopee.com.br/AUhkwunvA1?share_channel_code=1 "
            },
            {
                nome:"Caneca Everybody Wants To Rule The World 1",
                preco:"55,00",
                img:"./img/tff/caneca1.jpg",
                href:"https://s.shopee.com.br/9f8dxMeVKn?share_channel_code=1 "
            },
            {
                nome:"Caneca Everybody Wants To Rule The World 2",
                preco:"55,00",
                img:"./img/tff/caneca2.jpg",
                href:"https://s.shopee.com.br/60FLahCdip?share_channel_code=1 "
            },
            {
                nome:"Caneca Everybody Wants To Rule The World 3",
                preco:"55,00",
                img:"./img/tff/caneca3.jpg",
                href:" https://s.shopee.com.br/3qAr0ghtuJ?share_channel_code=1 "
            },
            {
                nome:"Caneca Everybody Wants To Rule The World 4",
                preco:"55,00",
                img:"./img/tff/caneca4.jpg",
                href:"https://s.shopee.com.br/3AvADXQc7X?share_channel_code=1 "
            },
        ]
    },
];

let sectionListas = document.querySelector("#sectionListas");

function loadProdutos (){
    produtos.forEach((lista) => {
        loadLista(lista);
        let divListaProdutos = document.createElement("div");
        divListaProdutos.classList.add("position-relative")
        let divScroll = document.createElement("div");
        divScroll.classList.add("scroll-container");
        divScroll.classList.add("pb-3");
        divListaProdutos.appendChild(divScroll);
        let divProduto = document.createElement("div");
        divProduto.classList.add("d-flex");
        divProduto.classList.add("flex-nowrap");
        divProduto.classList.add("gap-4");
        divProduto.classList.add("p-2");
        divScroll.appendChild(divProduto);
        lista.produtos.forEach((produto) => {
            let aProduto = document.createElement("a");
            aProduto.href = produto.href;
            aProduto.classList.add("a");
            aProduto.classList.add("product-card");
            aProduto.classList.add("text-dark");
            aProduto.classList.add("bg-white");
            aProduto.classList.add("rounded-3");
            aProduto.classList.add("shadow");
            aProduto.classList.add("p-4");
            aProduto.classList.add("flex-shrink-0");
            aProduto.style.width="260px";
            divProduto.appendChild(aProduto);
            //img
            let divImg = document.createElement("div");
            divImg.classList.add("d-flex");
            divImg.classList.add("justify-content-center");
            aProduto.appendChild(divImg);
            let divMascara = document.createElement("div");
            divMascara.classList.add("position-relative");
            divMascara.classList.add("mb-3");
            divMascara.classList.add("produto");
            divImg.appendChild(divMascara);
            let imgProduto = document.createElement("img");
            imgProduto.src = produto.img;
            imgProduto.alt = produto.nome;
            imgProduto.classList.add("img-fluid");
            imgProduto.classList.add("rounded");
            divMascara.appendChild(imgProduto);
            //nome
            let h3Titulo = document.createElement("h3");
            h3Titulo.textContent = produto.nome;
            h3Titulo.classList.add("fs-5");
            h3Titulo.classList.add("fw-semibold");
            h3Titulo.classList.add("mb-1");
            aProduto.appendChild(h3Titulo);
            //preco
            let divPreco = document.createElement("div");
            divPreco.classList.add("d-flex");
            divPreco.classList.add("align-items-center");
            divPreco.classList.add("justify-content-between");
            aProduto.appendChild(divPreco);
            let spanPreco = document.createElement("span");
            spanPreco.textContent = "R$"+produto.preco;
            spanPreco.classList.add("fs-4");
            spanPreco.classList.add("fw-bold");
            divPreco.appendChild(spanPreco);
            //botao
            let botaoComprar = document.createElement("button");
            botaoComprar.textContent = "Ver Mais";
            botaoComprar.classList.add("btn");
            botaoComprar.classList.add("btn-primary");
            botaoComprar.classList.add("fw-bold");
            botaoComprar.classList.add("w-100");
            botaoComprar.classList.add("mt-3");
            aProduto.appendChild(botaoComprar);
        })
        sectionListas.appendChild(divListaProdutos);
    })
}

function loadLista (lista){
    let divLista = document.createElement("div");
    divLista.classList.add("d-flex");
    divLista.classList.add("justify-content-between");
    divLista.classList.add("align-items-center");
    divLista.classList.add("mt-4");
    divLista.classList.add("mb-3");
    let h2Titulo = document.createElement("h2");
    h2Titulo.classList.add("fs-3");
    h2Titulo.classList.add("fw-bold");
    h2Titulo.textContent = lista.lista;
    divLista.appendChild(h2Titulo);
    sectionListas.appendChild(divLista);
}
/*
                            <button class="btn btn-primary fw-bold w-100 mt-3">Ver mais</button>
                        </a>
*/

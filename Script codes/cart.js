
var qnt = 3;
var sumPrice = 45000;

const listTemp = document.createElement('template');
listTemp.innerHTML = `
    <style>

    .cart{
        opacity: 1;
        width: 64vw;
        margin-top: 5vh;
        margin-left: 5vw;
        float: left;
    }
    .list{
        height: 16VW;
        width: 59vw;
        webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;

    }


    .list-title{
        height: 5vh;
        width: 58vw;
        background-color: #E2E0E0;
    }

    .list-title p{
        float: left;
        margin-top: 1vh;
        margin-bottom:0px;
        margin-left: 0px;

        font-size: 1.5vw;
    }


    .list-cover{
        height: 16VW;
        width: 10vw;
        border-style: none none solid solid;
        border-width:1px;
        float: left;
        position: relative;
    }

    .list-book-cover{

        height: auto;
        width: 80%;
        margin-top: 2vh;
        margin-bottom: 2vh;
        margin-left: 1.1vw;
        border-radius: 20px;
    }
    .list-book-name{
        height: 16VW;
        width: 15vw;
        border-style: none none solid solid;
        border-width:1px;
        float: left;

    }
    .book-name-con{
        height: 5vh;
        width: 13vw;
        background-color: #E2E0E0;
        border-radius: 25px;
        margin-top: 2vh;
        margin-left: 1vw;
        display: flex;
        justify-content: center;
        font-size: 2vw;
    }

    .list-qnt{
        height: 16VW;
        width: 6vw;
        border-style: none none solid solid;
        border-width:1px;
        float: left;
    }

    .list-qnt-con{
        height: 5vh;
        width: 4vw;
        background-color: #E2E0E0;
        border-radius: 20px;
        font-size: 2vw;
        margin-top: 2vh;
        margin-left: 1vw;
        display: flex;
        justify-content: center;

    }

    .list-price{
        height: 16VW;
        width: 8vw;
        border-style: none none solid solid;
        border-width:1px;
        float: left;
    }

    .list-price-con{
        height: 5vh;
        width: 6vw;
        background-color: #E2E0E0;
        border-radius: 20px;
        font-size: 2vw;
        margin-top: 2vh;
        margin-left: 1vw;
        display: flex;
        justify-content: center;
    }
    .list-sum{
        height: 16VW;
        width: 12vw;
        border:1px;
        float: left;
        border-style: none none solid solid;
        border-width:1px;
    }

    .list-sum-con{
        height: 5vh;
        width: 10vw;
        background-color: #E2E0E0;
        border-radius: 20px;
        font-size: 2vw;
        margin-top: 2vh;
        margin-left: 1vw;
        display: flex;
        justify-content: center;
    }

    .list-trash{
        margin-top: 2vh;
        width: 3vw;
        height: 5vh;
    }

    </style>
    <div id='list' class="list">
        
    <div class="list-cover">
            <a aria-label="book cover" name = "More about book">
                <img class ="list-book-cover" alt = "Book photo" src = "WEBP/book-cover-4.webp">
            </a>
    </div>
    <div class="list-book-name">
        <div class="book-name-con">
            Book name
        </div>
    </div>
    <div class="list-qnt">
        <div class="list-qnt-con">
                1
        </div>
    </div>
    <div class="list-price">
        <div class="list-price-con">
                15000
        </div>
    </div>
    <div class="list-sum">
        <div class="list-sum-con">
                15000
        </div>
    </div>
    <button id="trash-icon" >
    <img src="SVG/trash.svg" alt = "deleting icon"class="list-trash" >
    </button>
    </div>
    
`;


// document.getElementById("test").addEventListener("click",function(){
//     var list = new CartList();
//     document.getElementById("cart").appendChild(list);

// })

listTemp.addEventListener('qntChanged', function (e) {
    var elem = document.getElementById('info');
    e.detail.qnt--;
    qnt--;
    sumPrice -= 15000;
    e.detail.price -= 15000;
    elem.shadowRoot.querySelector('#info-qnt').innerHTML =  "Тоо ширхэг: " + e.detail.qnt;
    elem.shadowRoot.querySelector('#info-price').innerHTML =  "Нийт үнэ: " + e.detail.price;
})

function changeQnt (qnt, price){
    const event = new CustomEvent('qntChanged',{
        detail: {
            qnt: qnt,
            price: price
        }
    });

    listTemp.dispatchEvent(event);
}

class CartList extends HTMLElement {
    constructor(){  
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.appendChild(listTemp.content.cloneNode(true));
        this.shadowRoot.querySelector('a').href = 'individualBook.html';
    }


    deleteList(){
        changeQnt(qnt, sumPrice);
        
        var id= null;
        var elem  = this.shadowRoot.querySelector('#list');
        var opacity = 1;

        clearInterval(id);
        id = setInterval(frame, 10);
        function frame(){

            if (opacity == 0) {
                clearInterval(id);
            } else {
                opacity -= 0.2
                elem.style.opacity = opacity;
                
            }
        }
        
      
        elem.addEventListener("transitionend",() => {
            this.remove();
   
        })
        
    }


    createList(){

    }

    connectedCallback() {
        this.shadowRoot.querySelector('#trash-icon').
        addEventListener("click", ()=> this.deleteList());
    }

}

class InfoList extends HTMLElement {


    constructor(){
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.innerHTML = `
            <style>
            @media screen and (max-width:480px) {
                .cart{
                    display: none;
                }
            
                .info{
            
                    width: 80vw;
                    height: 40vh;
            
                    margin-top: 5vh;
                    margin-left:10vw;
                    border-style: solid;
                    border-width:1px;
                }
                .info p{
                    margin-left: 8vw;
                    margin-top: 2vh;
                    margin-right: 4vw;
                    margin-bottom: 0vh;
                    font-size: 6vw;
                    float: left;
                }
            
                .info-title{
                    float: left;
                    width: 80vw;
                    height: 5vh;
                    background: #E2E0E0;
                    padding-left: auto;
                    display: flex;
                    justify-content: center;
                    font-size: 6vw;
                }
                .order{
                    width: 68vw;
                    height: 6vh;
                    background-color: #3BEF0E;
                    float: left;
                    border-width: 0em;
                    border-radius: 20px;
                    margin-top: 4vh;
                    margin-left: 6vw;
                }
            
                .cancel{
                    width: 68vw;
                    height: 6vh;
                    background-color: #F5734C;
                    float: left;
                    border-width: 0em;
                    border-radius: 20px;
                    margin-top: 2vh;
                    margin-left: 6vw;
                }
            }
            @media screen and (min-width: 480px) {
                .cart-mobile{
                    display: none;
                }
                .info{
            
                    width: 20vw;
                    height: 40vh;
                    float: left;
                    margin-top: 5vh;
                    margin-left:3vw;
                    border-style: solid;
                    border-width:1px;
                }
                
                .info p{
                    margin-left: 2vw;
                    margin-top: 2vh;
                    margin-right: 2vw;
                    margin-bottom: 0vh;
                    float: left;
                }
                
                .info-title{
                    float: left;
                    width: 20vw;
                    height: 5vh;
                    background: #E2E0E0;
                    padding-left: auto;
                    display: flex;
                    justify-content: center;
                }
                
                .order{
                    width: 18vw;
                    height: 6vh;
                    background-color: #3BEF0E;
                    float: left;
                    border-width: 0em;
                    border-radius: 20px;
                    margin-top: 8vh;
                    margin-left: 1vw;
                }
                
                .cancel{
                    width: 18vw;
                    height: 6vh;
                    background-color: #F5734C;
                    float: left;
                    border-width: 0em;
                    border-radius: 20px;
                    margin-top: 2vh;
                    margin-left: 1vw;
                }
                
                /* .header-1{
                    display: none;
                }
                .header-2{
                    display: none;
                } */
            }
            </style>
            <div class="info">

                <div class="info-title">
                    Төлбөрийн мэдээлэл
                </div>

                <p id="info-price"></p>
                <p id="info-qnt"></p>

                <button id="order" class="order">
                    Захиалах
                </button >

                <button class="cancel">
                    Өөр бараа сонгох
                </button>
            </div>
        `
        this.shadowRoot.querySelector('#info-qnt').innerHTML = "Тоо ширхэг: " + qnt;
        this.shadowRoot.querySelector('#info-price').innerHTML = "Нийт үнэ: " + sumPrice;
       
    }


    getPrice(){
        var price = this.shadowRoot.querySelector('#info-price').nodeValue;
    }

    set Qnt(qnt ){
        this.shadowRoot.querySelector('#info-qnt').innerHTML = ">Тоо ширхэг: " + qnt;
        return qnt;
    }

    getQnt(){
        qnt = document.getElementById("cart").childElementCount;
        return qnt;
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#order').
        addEventListener("click", ()=> this.getPrice());
    }
}



window.customElements.define('info-list', InfoList);
window.customElements.define('cart-list', CartList);
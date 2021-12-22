var qnt;
var sumPrice;

window.onload = function(){
    qnt = localStorage.getItem("itemQnt");
    if(qnt == null ){

        qnt = 0;
        localStorage.setItem("itemQnt", 0);
        sumPrice = 0;
        localStorage.setItem("sumPrice", 0);
  
    }
    console.log(qnt);

    for(var i = 0; i < qnt; i++){

        var elem = document.getElementById("cart");
        var tmp = new CartList();

        elem.appendChild(tmp);

    }
    changeVal();
}


if(qnt == null || sumPrice == null){
   
    qnt = 0;
   
    sumPrice = 0;
}

let books = 
{
    "books": [
    {
    "title": "HARRY POTTER AND THE ORDER OF THE PHOENIX",
    "photo": "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "author": "J. K. Rowling",
    "published": "Bloomsbury Publishing PLC",
    "category": "CHILDREN’S, TEENAGE & EDUCATIONAL",
    "isbn": "978-14088-55-69-0",
    "language": "Англи",
    "page": "816",
    "size": "198 x 135 x 129 мм",
    "shelf": "Байгаа",
    "price": 60000,
    "discount": 45000,
    "about": "Ид шидийг дамжуулах цаг боллоо. Олон улсын сонгодог, бестселлер номны шинэчилсэн хувилбар"
    },
    {
    "title": "12 Rules for Life",
    "photo": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80",
    "author": "Jordan Peterson",
    "published": "Bloomsbury Publishing PLC",
    "category": "CHILDREN’S, TEENAGE & EDUCATIONAL",
    "isbn": "978-14088-55-69-0",
    "language": "Англи",
    "page": "816",
    "size": "198 x 135 x 129 мм",
    "shelf": "Байгаа",
    "price": 60000,
    "discount": 45000,
    "about": "Ид шидийг дамжуулах цаг боллоо. Олон улсын сонгодог, бестселлер номны шинэчилсэн хувилбар"
    },
    {
    "title": "HARRY POTTER AND THE ORDER OF THE PHOENIX",
    "photo": "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "author": "J. K. Rowling",
    "published": "Bloomsbury Publishing PLC",
    "category": "CHILDREN’S, TEENAGE & EDUCATIONAL",
    "isbn": "978-14088-55-69-0",
    "language": "Англи",
    "page": "816",
    "size": "198 x 135 x 129 мм",
    "shelf": "Байгаа",
    "price": 60000,
    "discount": 45000,
    "about": "Ид шидийг дамжуулах цаг боллоо. Олон улсын сонгодог, бестселлер номны шинэчилсэн хувилбар"
    },
    {
    "title": "HARRY POTTER AND THE ORDER OF THE PHOENIX",
    "photo": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
    "author": "J. K. Rowling",
    "published": "Bloomsbury Publishing PLC",
    "category": "CHILDREN’S, TEENAGE & EDUCATIONAL",
    "isbn": "978-14088-55-69-0",
    "language": "Англи",
    "page": "816",
    "size": "198 x 135 x 129 мм",
    "shelf": "Байгаа",
    "price": 60000,
    "discount": 45000,
    "about": "Ид шидийг дамжуулах цаг боллоо. Олон улсын сонгодог, бестселлер номны шинэчилсэн хувилбар"
    },
    {
    "title": "HARRY POTTER AND THE ORDER OF THE PHOENIX",
    "photo": "https://images.unsplash.com/photo-1602399481667-07536109851e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "author": "J. K. Rowling",
    "published": "Bloomsbury Publishing PLC",
    "category": "CHILDREN’S, TEENAGE & EDUCATIONAL",
    "isbn": "978-14088-55-69-0",
    "language": "Англи",
    "page": "816",
    "size": "198 x 135 x 129 мм",
    "shelf": "Байгаа",
    "price": 60000,
    "discount": 45000,
    "about": "Ид шидийг дамжуулах цаг боллоо. Олон улсын сонгодог, бестселлер номны шинэчилсэн хувилбар"
    }
    ]
}

let obj = JSON.stringify(books);


localStorage.setItem("test", obj);
let tst = localStorage.getItem("test");

obj = JSON.parse(tst);





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
    border-style: none none solid none;
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
    height: 4vW;
    width: 4vw;
    background-color: #E2E0E0;
    border-radius: 20px;
    font-size: 2vw;
    margin-top: 10px;
    margin-bottom: 10px;
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
#trash-icon{
    border-radius: 20px;
}

#add-qnt{
    height: 4vw;
    width: 4vw;
    background-color: #E2E0E0;
    border-radius: 20px;
    font-size: 2vw;

    margin-left: 1vw;
    display: flex;
    justify-content: center;
}
#sub-qnt{
    height: 4vw;
    width: 4vw;
    background-color: #E2E0E0;
    border-radius: 20px;
    font-size: 2vw;
    margin-left: 1vw;
    display: flex;
    justify-content: center;
}
</style>
<div id='list' class="list">

    <div class="list-cover">
        <a aria-label="book cover" name = "More about book">
        <img class ="list-book-cover" alt = "Book photo" src = "WEBP/book-cover-4.webp">
        </a>
    </div>
    <div class="list-book-name">
        <div class="book-name-con" id="book-name">
        Book name
        </div>
    </div>
    <div class="list-qnt">
        <button id="add-qnt">+</button>
        <p class="list-qnt-con" id="book-qnt">
            1
        </p>
        <button id="sub-qnt">-</button>
    </div>
    <div class="list-price">
        <div class="list-price-con" id="book-price">
        15000
        </div>
    </div>
    <div class="list-sum">
        <div class="list-sum-con" id="book-price-sum">
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
    
    function changeVal(){
        var elem = document.getElementById('info');
        sumPrice = parseInt(localStorage.getItem("sumPrice"));

        qnt = parseInt(localStorage.getItem("itemQnt"));
        
        elem.shadowRoot.querySelector('#info-qnt').innerHTML = "Тоо ширхэг: " + qnt;
        elem.shadowRoot.querySelector('#info-price').innerHTML = "Нийт үнэ: " + sumPrice;
    }

    listTemp.addEventListener('qntChanged', function (e) {
        var elem = document.getElementById('info');
 
        
        sumPrice = parseInt(localStorage.getItem("sumPrice"));
        sumPrice  += e.detail.price;
        localStorage.setItem("sumPrice", sumPrice);


        qnt = parseInt(localStorage.getItem("itemQnt"));
        qnt += e.detail.qnt;
        localStorage.setItem("itemQnt", qnt);
        changeVal();
    })
    
    function changeInfo (q, p){
        const event = new CustomEvent('qntChanged',{
            detail: {
                qnt: q,
                price: p
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

            let bookQnt = this.shadowRoot.querySelector('#book-qnt').innerHTML;
            let bookPrice =  this.shadowRoot.querySelector('#book-price').innerHTML;
            let bookPriceSum =  this.shadowRoot.querySelector('#book-price-sum').innerHTML;
            let bookName = this.shadowRoot.querySelector('#book-name').innerHTML;
            // this.state = {
            //     bookName: bookName,
            //     bookQnt: bookQnt,
            //     bookPrice: bookPrice,
            //     bookPriceSum: bookPriceSum
            // };
    
        }
        
        
        deleteList(){
            let bookPriceSum =  this.shadowRoot.querySelector('#book-price-sum').innerHTML;

            changeInfo(-1, -bookPriceSum);
            
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

        
        
        connectedCallback() {
            this.shadowRoot.querySelector('#trash-icon').
            addEventListener("click", ()=> this.deleteList());

            let bookQnt = this.shadowRoot.querySelector('#book-qnt');
            let bookPrice =  this.shadowRoot.querySelector('#book-price');
            let bookPriceSum =  this.shadowRoot.querySelector('#book-price-sum');
           

            this.shadowRoot.querySelector('#add-qnt').addEventListener("click", function () {
                 
                bookQnt.innerHTML++;
                bookPriceSum.innerHTML = bookQnt.innerHTML * bookPrice.innerHTML;

    
                let tmp = parseInt(bookPrice.innerHTML);
   
                changeInfo(0, tmp);
                
            })

            this.shadowRoot.querySelector('#sub-qnt').addEventListener("click", function () {
                if(bookQnt.innerHTML == 1){
          
                    return;
                }
                bookQnt.innerHTML--;
                bookPriceSum.innerHTML = bookQnt.innerHTML * bookPrice.innerHTML;
                let tmp=  -parseInt(bookPrice.innerHTML);
                
                changeInfo(0, tmp);
            })
        }
        disconnectedCallback(){
    

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
                    border-radius: 20px;
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
                    border-radius: 20px;
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
                    border-radius: 20px;
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
                    border-radius: 20px;
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
                
                <p id="info-qnt"></p>
                <p id="info-price"></p>
                
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
        
        changeQnt(qnt){
            this.shadowRoot.querySelector('#info-qnt').innerHTML = "Тоо ширхэг: " + qnt;
         
        }

        changeSumPrice(sumPrice){
            this.shadowRoot.querySelector('#info-price').innerHTML = "Нийт үнэ: " + sumPrice;
        }
    }
    
    // var btn = document.getElementById("test").addEventListener('click', function()  {
    //     var elem = document.getElementById("cart");
    //     var tmp = new CartList();
    //     console.log(tmp);
    //     elem.appendChild(tmp);
    //     changeInfo(1, 15000);
  
        
    // })


    
    window.customElements.define('info-list', InfoList);
    window.customElements.define('cart-list', CartList);
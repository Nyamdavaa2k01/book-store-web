var qnt;
var sumPrice = 0;

window.onload = function(){

 
    tmp = localStorage.getItem("books");
    var sumPrice = 0;
    if(tmp != null){

        tmp = JSON.parse(tmp);
        localStorage.setItem("sumPrice", 0);
        let len = Object.keys(tmp.books).length;
        sumPrice = parseInt(localStorage.getItem("sumPrice"));
        console.log(sumPrice);

        for(var i = 0; i < len; i++){

            var elem = document.getElementById("cart");
            var cart = new CartList();
            cart.setName(tmp.books[i].title);
            cart.setPrice(tmp.books[i].price);
            cart.setSumPrice(tmp.books[i].price);
            cart.setPhotos(tmp.books[i].photo);
            cart.setIsbn(tmp.books[i].isbn);
            sumPrice +=parseInt(tmp.books[i].price);
            elem.appendChild(cart);
            
        }
        console.log(sumPrice);
        qnt = len;
        localStorage.setItem("itemQnt", qnt);
        localStorage.setItem("sumPrice", sumPrice);
    }else{
        qnt = 0;
        localStorage.setItem("itemQnt", 0);
        sumPrice = 0;
        localStorage.setItem("sumPrice", 0);
    }
    changeVal();
}


if(qnt == null || sumPrice == null){
   
    qnt = 0;
   
    sumPrice = 0;
}



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
        <img class ="list-book-cover" alt = "Book photo" id="bookCover">
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



    
    function changeVal(){
        var elem = document.getElementById('info');
        sumPrice = parseInt(localStorage.getItem("sumPrice"));

        qnt = parseInt(localStorage.getItem("itemQnt"));
        
        elem.shadowRoot.querySelector('#info-qnt').innerHTML = "Тоо ширхэг: " + qnt;
        elem.shadowRoot.querySelector('#info-price').innerHTML = "Нийт үнэ: " + sumPrice;
    }

    listTemp.addEventListener('qntChanged', function (e) {


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
                qnt : q,
                price : p
            }
        });
     
        listTemp.dispatchEvent(event);
    }

    function addBookToList(obj){
        obj = JSON.stringify(obj);
        obj = JSON.parse(obj);
        let bookA=  localStorage.getItem("books");
        if(bookA != null){
            bookA = JSON.parse(bookA);

        }else{
            bookA = {
                books : []
            };

        }

        
        bookA.books.push({
            "title": obj.title,
            "photo": obj.photo,
            "author": obj.author,
            "published": obj.published,
            "category": obj.category,
            "isbn": book1.isbn,
            "language": book1.language,
            "page": obj.page,
            "size": obj.size,
            "shelf": obj.shelf,
            "price": obj.price,
            "discount": obj.discount,
            "about": obj.about
        });
     

        bookA = JSON.stringify(bookA);
        localStorage.setItem("books", bookA);
        // changeInfo(1, obj.price);
    }
    
    class CartList extends HTMLElement {
        
        constructor(){  
            super();
            
            this.attachShadow({
                mode: 'open'
            });

            this.shadowRoot.appendChild(listTemp.content.cloneNode(true));
            this.shadowRoot.querySelector('a').href = 'individualBook.html';
            this.state = {
                isbn: ""
              };
            // let bookQnt = this.shadowRoot.querySelector('#book-qnt').innerHTML;
            // let bookPrice =  this.shadowRoot.querySelector('#book-price').innerHTML;
            // let bookPriceSum =  this.shadowRoot.querySelector('#book-price-sum').innerHTML;
            // let bookName = this.shadowRoot.querySelector('#book-name').innerHTML;

        }
        
        setName(name){
            this.shadowRoot.querySelector('#book-name').innerHTML = name;
        }
        setQnt(qnt){
            this.shadowRoot.querySelector('#book-qnt').innerHTML = qnt;
        }

        setPrice(price){
            this.shadowRoot.querySelector('#book-price').innerHTML = price;
        }

        setSumPrice(){
            let bookQnt = this.shadowRoot.querySelector('#book-qnt').innerHTML;
            let bookPrice =  this.shadowRoot.querySelector('#book-price').innerHTML;
            this.shadowRoot.querySelector('#book-price-sum').innerHTML = bookQnt * bookPrice;
        }
        setPhotos(img){
            this.shadowRoot.querySelector("#bookCover").src = img;
        }

        setIsbn(isbn){
            this.state.isbn = isbn; 
        }

  
        deleteList(){
            let bookPriceSum =  this.shadowRoot.querySelector('#book-price-sum').innerHTML;

            changeInfo(-1, -bookPriceSum);

            let bookAr = localStorage.getItem("books");
            bookAr = JSON.parse(bookAr);
            let len = Object.keys(bookAr.books).length;
            let tmp1 = this.state.isbn;
         
      
            for(var i = 0; i < len; i++){
                let tmp2 = bookAr.books[i].isbn;
                let check = tmp1.localeCompare(tmp2);
                if(check === 0){
                    bookAr.books.splice(i,1);
                    bookAr = JSON.stringify(bookAr);
                    localStorage.setItem("books", bookAr);
                    break;
                }
            }
            


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

    }
    

    window.customElements.define('cart-list', CartList);
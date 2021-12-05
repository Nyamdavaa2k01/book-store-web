const template = document.createElement('template');
template.innerHTML = `
    <style>

.cart{
 
    width: 64vw;
    margin-top: 5vh;
    margin-left: 5vw;
    float: left;
}
.list{
    height: 16VW;
    width: 59vw;

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
@media screen and (min-width: 480px) {
    .cart-mobile{
        display: none;
    }
 

}

@media screen and (max-width:480px) {
    .cart{
        display: none;
    }

  



    .cart-mobile{
        width: 100vw;
        height: 75vh;
        margin-left: -8px;

    }

    .list-mobile{
        width: 90vw;
        height: 25vh;
        border-style: solid none none none;
        border-width: 1px;
        margin-left: 5vw;
    }

    .list-mobile p {
        margin-bottom: 0px;
        margin-top:0px;
    }

    .book-cover-mobile{
        width: 24vw;
        height: 18vh;
        float: left;
        margin-left: 3vw;
        margin-top: 2vw;
        border-radius: 25px;
    }

    .list-info-mobile{
        float: left;
        width: 60vw;
        height: 21vh;
        margin-left: 2vw;
        padding-top: 2vh;
    }

    .book-title-mobile{
        width: 45vw;
        height: 5vh;
        background-color: #E2E0E0;
        border-radius: 20px;
        float: left;
        display: flex;
        justify-content: center;
        font-size: 6vw;
    }

    .book-trash-mobile{
        width: 8vw;
        height: 5vh;
        float: left;
        border-radius: 20px;
        margin-left: 2vw;
    }
    .book-car-mobile{
        margin-top: 2vh;
        margin-right: 2vw;
        width: 15vw;
        height: 5vh;
        background-color: #E2E0E0;
        border-radius: 20px;
        float: left;
        display: flex;
        justify-content: center;
        font-size: 4vw;

    }


}
    </style>
    <div class="list">
        
    <div class="list-cover">
            <a href="individualBook.html" aria-label="book cover" name = "More about book">
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
document.getElementById("test").addEventListener("click",function(){
    var list = new CartList();
    document.getElementById("cart").appendChild(list);

})
class CartList extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({
            mode: 'open'
        });

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.innerHTML = ' Test';
    }

    deleteList(){
        
        this.remove();
        //console.log(elem);
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#trash-icon').addEventListener("click", ()=> this.deleteList());
    }

}

window.customElements.define('cart-list', CartList);
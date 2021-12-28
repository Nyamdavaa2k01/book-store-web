const template = document.createElement('template') ; 
template.innerHTML = `

    <style>
    .book-small{
        margin-left : 
        background-color: #E2E0E0;
        width:14.5vw; 
        height: fit-content ; 
        border-radius: 2vw;
        
        }
        .book-small-photo{
        width:100%; 
        height:auto ; 
        border-radius: 2vw 2vw 0px 0px;
        }

        .book-title {
        
        font-size: 12px;
        text-align: center;
        margin-left : 15px;
        padding-left : 0px;
        }
        .info {
            display:none;
            padding : 10px;
        }
        .main-view{ 
            display:flex;
            justify-content : space-between ;
        }
        #toggle-info{
            width :50px ; 
            border:none; 
            background-color:#E2E0E0;
            border-radius:25px;
        }
        .toggle-icon {
            height : 100%; 
            width : 100% ;
        }
        .button-icon {
            width:40px;
            border:none;
            background-color:#E2E0E0;
            padding:0px;
        }
        p {
            margin:3px;
            font-size:14px;
        }
        .cart-icon{
            border-radius:50%; 
        }
    </style>
   
    <div class="book-small">
            <a href ="individualBook.html"><img class ="book-small-photo" ></a>
            <div class ="main-view">
                <h3 class = "book-title"></h3>
                <button id = "toggle-info">
                    <img class = "toggle-icon" src = "SVG/dropdown-icon.jpg">
                </button>
            </div>
            <div class = "info"> 
                <p><slot name = "author"/></p>
                <p><slot name = "price"/> </p>
                <div style = "display:flex">
                <p><slot name = "addtoList"/></p>
                <button class = "button-icon" id="add-book-cart"><slot class ="cart-icon" name = "cartIcon"/></button>
                <div>
            </div>
            
    </div>
`
let book2 ={
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
}
class bookSmall extends HTMLElement {
    constructor() {
        super() ; 
        this.showInfo = false; 
        this.attachShadow({mode : 'open'}) ; 
        this.shadowRoot.appendChild(template.content.cloneNode(true)) ; 
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name') ; 
        this.shadowRoot.querySelector('img').src = this.getAttribute('pic') ; 
    }
    
    toggleInfo () {
        this.showInfo = !this.showInfo ; 
        const info = this.shadowRoot.querySelector('.info') ; 
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info') ; 
        //const toggleIcon = his.shadowRoot.querySelector('#toggle-icon') ;  
        if (this.showInfo) {
            info.style.display = 'block' ; 
            toggleBtn.innerHTML ='<img class = "toggle-icon" src = "SVG/upward-icon.jpg">' ; 
        
        }
        else {
            info.style.display = 'none' ; 
            toggleBtn.innerHTML='<img class = "toggle-icon" src = "SVG/dropdown-icon.jpg">' ; 
        
        }

        console.log( this.getAttribute);
    }
    
    addBookToList(obj){
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
            "isbn": obj.isbn,
            "language": obj.language,
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

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').
        addEventListener('click', () => this.toggleInfo());
        this.shadowRoot.querySelector('#add-book-cart').
        addEventListener('click', () => this.addBookToList(book2));
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').
        removeEventListener();
        this.shadowRoot.querySelector('#add-book-cart').
        removeEventListener();
    }

    static get observedAttributes () {
        return ["count"] ; 
    }
   
    
}

customElements.define("book-info", bookSmall) ; 
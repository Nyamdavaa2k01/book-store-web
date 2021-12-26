//const url = "https://api.jsonbin.io/b/618c95b4820eda3cc81b7988/2" ; 
// const url = "https://api.jsonbin.io/b/618c95b4820eda3cc81b7988/latest"
const url = "https://api.jsonbin.io/b/61963b900ddbee6f8b0e09df/latest" ;
let book1 = 
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
    

}
export function getInfo (url, callMeBack) {
    fetch(url)
    .then(response => response.json())
        .then (data => {
            let books = [] ; 
            data.books.forEach(
                (book) => {
                    books.push(new News(book.title, book.photo, book.author, book.published, book.category,
                        book.isbn, book.language, book.page,book.size, book.shelf, book.price, book.discount, book.about))}) 
                 callMeBack(books)    
           
                })
}


export class News {
    constructor(newTitle,newPhoto , newAuthor, newPublisher, newCategory, newIsbn, newLang, newPage, newSize,newShelf, newPrice, disc, about,  ) {
        this.title = newTitle ;
        this.photo = newPhoto; 
        this.author = newAuthor ;
        this.published = newPublisher ; 
        this.category = newCategory; 
        this.isbn = newIsbn ; 
        this.language = newLang ; 
        this.page = newPage; 
        this.shelf = newShelf ; 
        this.price = newPrice ; 
        this.discount = disc ; 
        this.about = about ;  
        this.size = newSize;
    }
    create () {

        // return `
        // <div class="book-small" onclick = "pageSwap(0)">
        //     <a href ="individualBook.html" aria-label="${this.title}'s photo" name = "More about ${this.title}">
        //     <img class ="book-small-photo" alt = "photo of ${this.title}" src = "${this.photo}"></a>

        //     <p class = "book-title">${this.title}</p>
        // </div>
        // `
    
        // return `
        //     <book-info name = "${this.title}" pic = ${this.photo} author = "${this.author} price = "${this.author}""> </book-info>
        // `
        return `
        <book-info pic = "${this.photo}" name = "${this.title}">
                <div slot = "author">Зохиолч: ${this.author}</div>
                <div slot = "price">Үнэ: ${this.price}</div>
                <div slot = "addtoList">Сагсанд нэмэх</div>
               <div slot = "cartIcon"><i class ="material-icons">shopping_cart</i></div>
                
            </book-info>
            `
    }
    onOwn ()  {
        return `
  
        <div class = "path-way">
                <p >Интерном/ ${this.category}/</p>
                <p > ${this.title}</p>
            </div>
            <hr/>
            <section class="about-book">
                <h1>
                    ${this.title}
                </h1>
                <div class = "book-info">
                
                    <img  alt = "photo of ${this.title}" src = "${this.photo}"> 
                    <div class ="up-line"></div>
                    <div class= "book-details">
                        <ul>
                            <li> <p>Зохиолч</p> 
                                <p> ${this.author}</p>
                                
                                
                            </li>
                            <li> <p>Эрхлэн гаргасан:</p> 
                                <p>${this.published}</p>
                                
                            </li>
                            <li> <p>Ангилал:</p> 
                                <p>${this.category}</p>
                                
                            </li>
                            <li> <p>ISBN код</p> 
                                <p>${this.isbn}</p>
                                
                            </li>
                            <li> <p>Хэл</p> 
                                <p>${this.language}</p>
                                
                            </li>
                            <li> <p>Хуудасны тоо</p> 
                                <p>${this.page}</p>
                                
                            </li>
                            <li> <p>Хэмжээ</p> 
                                <p>${this.size}</p>
                                
                            </li>
                            <li> <p>Үлдэгдэл</p> 
                                <p>${this.shelf}</p>
                                
                            </li>
                        </ul>
                      
                        <h2 > 
                            <p>Үндсэн үнэ: ${this.price}</p>
                            <p> Хямдралтай үнэ: ${this.discount}</p>
                        </h2>
                        <div class ="flex">
                            <div class="count"></div>
                            <div class="order">Захиалах</div>
                        </div>
                    </div>
                </div>

            </section>

            <section class = "book-rating">
                <div class = "book-summary">${this.about}</div>
                <div class ="up-line"></div>
                <textarea name ="comment" rows ="5" cols="20" class = "book-summary" placeholder="Сэтгэгдэл үлдээх..." >
                  
                </textarea>
            </section>
        `
    }
}

const template = document.createElement('template') ; 
template.innerHTML = `


    <style>
    .book-small{
            margin-left : 2vw;
            background-color: #E2E0E0;
            width:14.5vw; 
            height: fit-content ; 
            border-radius: 2vw;
            margin-bottom:3vw;
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
            border-radius:50%;
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
        @media screen and (max-width:480px) {
            .book-small {
                width:25vw;
            }
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
                <button class = "button-icon"><slot name = "cartIcon"/></button>
                <div>
            </div>
            
    </div>
`

class bookSmall extends HTMLElement {
    constructor() {
        super() ; 
        this.showInfo = false; 
        this.attachShadow({mode : 'open'}) ; 
        this.shadowRoot.appendChild(template.content.cloneNode(true)) ; 
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name') ; 
        this.shadowRoot.querySelector('img').src = this.getAttribute('pic') ; 
        this.state = {
            name: "",
            isbn: "",

        };
        this.state.name =  this.getAttribute('name');
        this.state.author = this.getAttribute("author");
     
    }
    
toggleInfo () {
    this.showInfo = !this.showInfo ; 
    const info = this.shadowRoot.querySelector('.info') ; 
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info') ; 
    console.log(this);
    //const toggleIcon = his.shadowRoot.querySelector('#toggle-icon') ;  
    if (this.showInfo) {
        info.style.display = 'block' ; 
        toggleBtn.innerHTML ='<img class = "toggle-icon" src = "SVG/upward-icon.jpg">' ; 
       
    }
    else {
        info.style.display = 'none' ; 
        toggleBtn.innerHTML='<img class = "toggle-icon" src = "SVG/dropdown-icon.jpg">' ; 
      
    }
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

    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').
        addEventListener('click', () => this.toggleInfo());
        this.shadowRoot.querySelector('#add-book-cart').
        addEventListener('click', () => this.addBookToList(book1));
    }

    disconnectedCallback() {
<<<<<<< Updated upstream
        // this.shadowRoot.querySelector('#toggle-info').removeEventListener();
=======
        this.shadowRoot.querySelector('#toggle-info').
        removeEventListener();
        this.shadowRoot.querySelector('#add-book-cart').
        removeEventListener();
>>>>>>> Stashed changes
    }
    
}

customElements.define("book-info", bookSmall) ; 


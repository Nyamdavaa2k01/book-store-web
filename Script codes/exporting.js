//const url = "https://api.jsonbin.io/b/618c95b4820eda3cc81b7988/2" ; 
// const url = "https://api.jsonbin.io/b/618c95b4820eda3cc81b7988/latest"
const url = "https://api.jsonbin.io/b/61963b900ddbee6f8b0e09df/latest" ;

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
    
        return `
            <book-info name = "${this.title}" pic = ${this.photo} author = "${this.author} price = "${this.author}""> </book-info>
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
class bookSmall extends HTMLElement {
    constructor() {
        super() ; 
     //   this.shadowRoot.querySelector('#id');
    }
    render () {
        let name = this.getAttribute('name') ; 
        let pic = this.getAttribute('pic') ; 
        let author = this.getAttribute('author') ; 
        let price = this.getAttribute('price') ; 
        this.innerHTML = `

        <style>
        .book-small{

            background-color: #E2E0E0;
            width:14.5vw; 
            height: 26.4vmax ; 
            border-radius: 2vw;
            
            }
            .book-small-photo{
            width:100%; 
            height:auto ; 
            border-radius: 2vw 2vw 0px 0px;
            }

            .book-title {
            font-size: var(--book-title-size);
            text-align: center;
            
            }
        </style>

        <div class="book-small">
            <a href ="individualBook.html" aria-label="${name}'s photo" name = "More about ${name}" ><img class ="book-small-photo" alt = "Book photo" src = "${pic}"></a>
            <p class = "book-title">${name}</p>
        </div>
        `      
    }
    get count () {
        return this.getAttribute('count') ; 
    }
    set count (val)  {
        this.setAttribute('count', val) ; 
    }

    static get observedAttributes () {
        return ["count"] ; 
    }

    connectedCallback () {
        if (!this.rendered) {
            this.render() ; 
            this.rendered= true ;
        }
    }
    attributeChangedCallback () {
        this.render() ;

    }
}

customElements.define("book-info", bookSmall) ; 
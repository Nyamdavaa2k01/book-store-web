//const url = "https://api.jsonbin.io/b/618c95b4820eda3cc81b7988/2" ; 
const url = "https://api.jsonbin.io/b/618c95b4820eda3cc81b7988/latest"
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
        // return `<p> ${this.title} </p> 
        // <p>${this.price}</p> 
        // <p>written by ${this.author}</p>
        // <img src = ${this.photo}>
        // `
        // return `<a href ="individualBook.html" aria-label="${this.title}'s photo" name = "More about ${this.title}">
        // <img class ="book-small-photo" alt = "photo of ${this.title}" src = "${this.photo}"></a>

        // <p class = "book-title">${this.title}</p>
        // `

        return `
        <div class="book-small" >
            <a href ="" aria-label="${this.title}'s photo" name = "More about ${this.title}">
            <img class ="book-small-photo" alt = "photo of ${this.title}" src = "${this.photo}"></a>

            <p class = "book-title">${this.title}</p>
        </div>
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
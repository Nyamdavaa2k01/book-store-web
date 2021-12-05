 
// export class myHeader {
    
//     showData (){
//         return `
//         <header>
           
//            <div class = "header-top"> 
//                 <a href = "index.html"><p>Бие даасан номын дэлгүүр</p></a>
                
//                 <div class ="header-right">
//                     <a href = "register.html" name = "register"><i class ="material-icons register-icon" >account_circle</i></a>
//                     <a href ="register.html" name = "sign up via link"> <p style = "color:white">Бүртгүүлэх</p></a>
//                     <a href ="login.html"i class ="material-icons login-icon" name = "login">login</i></a>
               
//                     <p><a href = "login.html" name = "login">Нэвтрэх</a></p>
//                 </div>
//             </div>
//             <!-- <div  class = "header-top-right">
//                 <i class ="material-icons">shopping_cart</i>
//             </div> -->
//             <div class ="header-bottom">
               
//                 <a href ="index.html" name ="navigate to main page"><img src = "WEBP/logo.webp" alt = "book store logo" class = "logo-photo"></a>
//                 <div class = "search-field" >
//                     <input type = "text" class ="search-input" placeholder="Хайлт хийх"> 
//                     <button type ="search" class ="search-button">
//                         <i class ="material-icons icon-search">search</i>
//                     </button>
//                 </div>

//                 <i class = "material-icons icon-cart" style ="font-size: 4vmax;"><a href ="cart-list.html" name = "view cart list">shopping_cart</a></i>

//             </div>

//             <div class ="mobile-search-field">
//                 <button type ="search" class ="mobile-search-button">
//                     <i class ="material-icons icon-search">search</i>
//                 </button>
//             </div>
//             </header>
//         `
//     }
// }

export class navBar {

    showData() {
        return `
        <i class="material-icons" style ="margin-left: 5vw;">book</i>
				
					<a href ="bookCategory.html">Ном</a>
					<a href ="bookCategory.html">Хүүхдийн ном</a>
					<a href = "bookCategory.html">Гадаад ном</a>
					<a href = "bookCategory.html">Бичиг хэрэг</a>
					<a href="bookCategory.html" style = "margin-right: 5vw;">Бэлэг дурсгал</a>
                    `
    }
}

export class mainPage {

    showData() {
        return `
        
        <!-- mobile  -->
        <a href ="individualBook.html" name ="More about book" aria-label="book cover"><img src = "WEBP/mobile-book-cover.webp" alt = "Book photo" class ="mobile-main-book"> </a>
        <div class ="mobile-main-book-explanation">
            <p>“Айдас, догдлол зэрэг төрүүлэн уншигчийг олон төрлийн асуулт тавихад хүргэх нууцлаг зохиол”
                Хуурмаг гэрч номны зохиолч 
                -Karin slaughter </p>
        </div>
        <a href = "individualBook.html" name ="More about book" aria-label="book cover"><img src = "WEBP/big-cover-5.webp" alt = "Book photo" class = "desktop-main-book"></a>
        <div class ="book-row-title" id = "cat1">
            <hr/>
                <p class = "category-title">
                    <p class ="highlight">ШИНЭ </p> 
                    <p>болон </p> 
                    <p class = "highlight">БЭСТСЕЛЛЕР</p>
                </p>
            <hr/> 
        </div>
        <div class ="book-row-options">
            <button class ="chosen">ШИНЭ</button>
            <button class ="aux">БЕСТСЕЛЛЕР</button>
            <button class ="view-all">
                <p>Бүгд</p> 
                <!-- <img class ="icon" src ="PNG/dashed-right-arrow.png" alt ="See All"> -->
                <i class ="material-icons">arrow_forward</i>
            </button>
        </div>
        <div class="wrapper">
            <button type ="move" class ="move-left" onclick="sliding(0,1)"><i class ="material-icons">chevron_left</i></button>
            <div id = "book-row-container1">
                <div id="book1" ></div>
                <div id="book2"></div>
                <div id="book3"></div>
                <div id="book4"></div>
                <div id="book5"></div>
                <div id="book6"></div>
                <div id="book7"></div>
                <div id="book8"></div>
                <div id="book9"></div>
                <div id= "book10"></div>
                
            </div>
            <button type = "move" class ="move-right" onclick="sliding(1,1)"><i class ="material-icons">chevron_right</i></button>
        </div>
        
        
        <div class ="book-row-title" id = "cat2">
            <hr/>
                <p class = "category-title">
                    <p class ="highlight">ШИНЭ </p> 
                    <p>болон </p> 
                    <p class = "highlight">БЭСТСЕЛЛЕР</p>
                </p>
            <hr/> 
        </div>
        <div class ="book-row-options">
            <button class ="chosen">ШИНЭ</button>
            <button class ="aux">БЕСТСЕЛЛЕР</button>
            <button class ="view-all">
                <p>Бүгд</p> 
                <!-- <img class ="icon" src ="PNG/dashed-right-arrow.png" alt ="See All"> -->
                <i class ="material-icons">arrow_forward</i>
            </button>
        </div>
        <div class="wrapper">
            <button type ="move" class ="move-left" onclick="sliding(0,2)"><i class ="material-icons">chevron_left</i></button>
            <div id = "book-row-container2">
                <div id="book11"></div>
                <div id="book12"></div>
                <div id="book13"></div>
                <div id="book14"></div>
                <div id="book15"></div>
                <div id="book16"></div>
                <div id="book17"></div>
                <div id="book18"></div>
                <div id="book19"></div>
                <div id="book20"></div>
       
                
                 <!-- <button type = "move" class ="move"><i class = "material-icons"> chevron_right</i></button> -->
                
            </div>
            <button type = "move" class ="move-right" onclick="sliding(1,2)"><i class ="material-icons">chevron_right</i></button>
        </div>

        <a href ="individualBook.html"  aria-label="book-cover" name = "More about book"><img src = "WEBP/mobile-book-cover.webp" alt = "Book photo" class ="mobile-main-book"> </a>
        <div class ="mobile-main-book-explanation">
            <p>“Айдас, догдлол зэрэг төрүүлэн уншигчийг олон төрлийн асуулт тавихад хүргэх нууцлаг зохиол”
                Хуурмаг гэрч номны зохиолч 
                -Karin slaughter </p>
        </div>
        <a href = "individualBook.html"  aria-label="book-cover" name = "More about book"><img src = "WEBP/big-cover-5.webp" alt = "Book photo" class = "desktop-main-book"></a>

        <div class ="book-row-title">
            <hr/>
                <p class = "category-title">
                    <p class ="highlight">ШИНЭ </p> 
                    <p>болон </p> 
                    <p class = "highlight">БЭСТСЕЛЛЕР</p>
                </p>
            <hr/> 
        </div>
        <div class ="book-row-options">
            <button class ="chosen">ШИНЭ</button>
            <button class ="aux">БЕСТСЕЛЛЕР</button>
            <button class ="view-all">
                <p>Бүгд</p> 
                <!-- <img class ="icon" src ="PNG/dashed-right-arwebp.png" alt ="See All"> -->
                <i class ="material-icons">arrow_forward</i>
            </button>
        </div>
        <div class="wrapper">
            <button type ="move" class ="move-left" onclick="sliding(0, 3)"><i class ="material-icons">chevron_left</i></button>
            <div id = "book-row-container3">
                <div id="book21"></div>
                <div id="book22"></div>
                <div id="book23"></div>
                <div id="book24"></div>
                <div id="book25"></div>
                <div id="book26"></div>
                <div id="book27"></div>
                <div id="book28"></div>
                <div id="book29"></div>
                <div id= "book30"></div>
                
            </div>
            <button type = "move" class ="move-right" onclick="sliding(1, 3)"><i class ="material-icons">chevron_right</i></button>
        </div>



        <div class ="book-row-title">
            <hr/>
                <p class = "category-title">
                    <p class ="highlight">ШИНЭ </p> 
                    <p>болон </p> 
                    <p class = "highlight">БЭСТСЕЛЛЕР</p>
                </p>
            <hr/> 
        </div>
        <div class ="book-row-options">
            <button class ="chosen">ШИНЭ</button>
            <button class ="aux">БЕСТСЕЛЛЕР</button>
            <button class ="view-all">
                <p>Бүгд</p> 
                <!-- <img class ="icon" src ="PNG/dashed-right-arrow.png" alt ="See All"> -->
                <i class ="material-icons">arrow_forward</i>
            </button>
        </div>
        <div class="wrapper">
            <button type ="move" class ="move-left" onclick="sliding(0, 4)"><i class ="material-icons">chevron_left</i></button>
            <div id = "book-row-container4">
                <div id="book31"></div>
                <div id="book32"></div>
                <div id="book33"></div>
                <div id="book34"></div>
                <div id="book35"></div>
                <div id="book36"></div>
                <div id="book37"></div>
                <div id="book38"></div>
                <div id="book39"></div>
                <div id= "book40"></div>
                
                 <!-- <button type = "move" class ="move"><i class = "material-icons"> chevron_right</i></button> -->
                
            </div>
            <button type = "move" class ="move-right" onclick="sliding(1, 4)"><i class ="material-icons">chevron_right</i></button>
        </div>
        `
    }
}

export class individualBook {
    showData () {
        return `
       
            <div id="onOwn"></div>
            

            <div class ="book-row-title">
                <hr/>
                    <p class = "category-title">
                        <p class ="highlight">Санал </p> 
                        <p>болгох </p> 
                        <p class = "highlight">номнууд</p>
                    </p>
                <hr/> 
            </div>
            <div class ="book-row-options">
                <button class ="chosen">Төстэй номнууд</button>
                <!-- <button class ="aux"></button> -->
                <button class ="view-all">
                    <p>Бүгд</p> 
                    <!-- <img class ="icon" src ="PNG/dashed-right-arwebp.png" alt ="See All"> -->
                    <i class ="material-icons">arrow_forward</i>
                </button>
            </div>
         
            <div class="wrapper">
                <button type ="move" class ="move-left" onclick="sliding(0, 5)"><i class ="material-icons">chevron_left</i></button>
                <div id = "book-row-container5">
                    <div id="book41"></div>
                    <div id="book42"></div>
                    <div id="book43"></div>
                    <div id="book44"></div>
                    <div id="book45"></div>
                    <div id="book46"></div>
                    <div id="book47"></div>
                    <div id="book48"></div>
                    <div id="book49"></div>
                    <div id="book40"></div>
                    
                     <!-- <button type = "move" class ="move"><i class = "material-icons"> chevron_right</i></button> -->
                    
                </div>
                <button type = "move" class ="move-right" onclick="sliding(1, 5)"><i class ="material-icons">chevron_right</i></button>
            </div>

            <div class ="book-row-title">
                <hr/>
                    <p class = "category-title">
                        <p class ="highlight">Таний</p> 
                        <p>өмнө </p> 
                        <p class = "highlight">үзсэн</p>
                    </p>
                <hr/> 
            </div>
            <div class ="book-row-options">
                <button class ="chosen">Сонирхсон номнууд</button>
                <!-- <button class ="aux"></button> -->
                <button class ="view-all">
                    <p>Бүгд</p> 
                    <!-- <img class ="icon" src ="PNG/dashed-right-arwebp.png" alt ="See All"> -->
                    <i class ="material-icons">arrow_forward</i>
                </button>
            </div>
            <div class="wrapper">
                <button type ="move" class ="move-left" onclick="sliding(0, 6)"><i class ="material-icons">chevron_left</i></button>
                <div id = "book-row-container6">
                    <div id="book51"></div>
                    <div id="book52"></div>
                    <div id="book53"></div>
                    <div id="book54"></div>
                    <div id="book55"></div>
                    <div id="book56"></div>
                    <div id="book57"></div>
                    <div id="book58"></div>
                    <div id="book59"></div>
                    <div id="book60"></div>
                    
                     <!-- <button type = "move" class ="move"><i class = "material-icons"> chevron_right</i></button> -->
                    
                </div>
                <button type = "move" class ="move-right" onclick="sliding(1, 6)"><i class ="material-icons">chevron_right</i></button>
            </div>

        `
    }
}

export class footer {
    showData() {
        return `
        <div class="footer-left">
        <div class = "logo-photo-container">
            <img src = "SVG/footerLogo.svg" alt = "Logo">
        </div>
        <p class = "email-explanation">
            Шинэ, бэстселлер ном, хямдрал, урамшууллын талаарх мэдээллийг цаг алдалгүй авахыг хүсвэл манай жагсаалтад бүртгүүлээрэй!
        </p>
        <div class="email-register">
            <input type = "email" name ="email" placeholder="И-мейл хаяг">
            <button type ="submit" name ="register the email">Бүртгүүлэх</button>
        </div>
        <div class="inline">
            <i class = "material-icons">mark_as_unread</i>
        <p style = "color:white">info@internom.mn</p>
        </div>
        <div class="inline "><i class ="material-icons phone">call</i>
            <p style = "color:white">7577 7700</p></div>
    </div>
    <div class ="footer-right">
        <ul class="li-1">
            <li>ИНТЕРНОМ</li>
            <li>Бидний тухай</li>
            <li>Холбоо барих</li>
            <li>Манай дэлгүүрүүд</li>
            <li>Бэстселлер</li>
            <li>Шинэ</li>
            <li>Арга хэмжээ</li>
        </ul>
        <ul class="li-2">
            <li>ТУСЛАМЖ</li>
            <li>Захиалга хийх</li>
            <li>Төлбөрийн хэрэгслүүд</li>
            <li>Захиалга батлах, цуцлах</li>
            <li>Хүргэлт, буцаалт</li>
            <li>Бараа сонгох</li>
            <li>Үйлчилгээний нөхцөл</li>
        </ul>
    </div>
        `
    }
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
            <a href ="individualBook.html" aria-label="${this.title}'s photo" name = "More about ${this.title}">
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

export class category {
    showData() {
        return `
        
        <div class="cat-title">
            <p>
                THE ART 
            </p>
        </div>

            
        <img src="SVG/Menu.svg" class="cat-menu" alt="menu icon"></img>
        <aside class="category" >
            <div class="sub-cat">
                <p>
                    Үнээр
                </p>
                <select class="cat-drop-down">
                    <option> Үнээр</option>
                    <option> Үнээр</option>
                    <option> Үнээр</option>
                </select>
            </div>

            <div class="sub-cat">
                <p>
                    Сонгогдсон
                </p>
                <select class="cat-drop-down">
                    <option> Төрөл</option>
                    <option> Дэд төрөл </option>
                </select>
            </div>
            <p>Дэд сэдэв</p>
            <p>Бараа</p>
            <div class="cat-checkbox-big">
                <form>
                    <input type="checkbox">
                    <label for="vehicle1">Зөвхөн үлдэгдэлтэй</label><br>
                </form>
            </div>
            <p>Формат</p>
            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >Hardback</label><br>
                </form>
            </div>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >Paperback</label><br>
                </form>
            </div>

            <p>Үнэ</p>
            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >0-5000₮</label><br>
                </form>
            </div>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >5000-10000₮</label><br>
                </form>
            </div>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >10000-20000₮</label><br>
                </form>
            </div>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >20000-50000₮</label><br>
                </form>
            </div>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >50000₮-с дээш</label><br>
                </form>
            </div>
            <p>Нас</p>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >3 хүртэлх</label><br>
                </form>
            </div>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >3-5</label><br>
                </form>
            </div>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >6-8</label><br>
                </form>
            </div>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >9-12</label><br>
                </form>
            </div>

            <div class="cat-checkbox">
                <form>
                    <input type="checkbox">
                    <label >12 дээш</label><br>
                </form>
            </div>
        </aside>
        
        <main class="cat-main">

            <div class = "cat-book-row-container">
                
                
                <div class="book-small book1 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"></a>
                    <p class = "book-title">Book Name</p>
                </div>
                <div class="book-small book2 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"></a>
                    <p class = "book-title">Book Name</p>
                </div>
                <div class="book-small book3 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"></a>
                    <p class = "book-title">Book Name</p>
                </div>
                <div class="book-small book4 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"> </a>
                    <p class = "book-title">Book Name</p>
                </div>
                
            </div>
            <div class = "cat-book-row-container">
                
                
                <div class="book-small book1 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"></a>
                    <p class = "book-title">Book Name</p>
                </div>
                <div class="book-small book2 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"></a>
                    <p class = "book-title">Book Name</p>
                </div>
                <div class="book-small book3 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"></a>
                    <p class = "book-title">Book Name</p>
                </div>
                <div class="book-small book4 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"> </a>
                    <p class = "book-title">Book Name</p>
                </div>
                    
            </div>
            <div class = "cat-book-row-container">
                
            
                <div class="book-small book1 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"></a>
                    <p class = "book-title">Book Name</p>
                </div>
                <div class="book-small book2 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"></a>
                    <p class = "book-title">Book Name</p>
                </div>
                <div class="book-small book3 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"></a>
                    <p class = "book-title">Book Name</p>
                </div>
                <div class="book-small book4 ">
                    <a href="individualBook.html" aria-label="book-cover" name = "More about book" ><img class ="book-small-photo" alt = "Book photo" src = "WEBP/book-cover-4.webp"> </a>
                    <p class = "book-title">Book Name</p>
                </div>
                
            </div>
        `
    }
}

export class register {
    showData() {
        return `
        <div class="register" style ="margin-top : 5vw ;">
            <div class="card">
                <div class="card-header">
                    Бүртгүүлэх
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="name">Нэр</label>
                            <input type="text" class="form-control"
                                id="First-name"
                                name="name"
                                placeholder="Таны нэр">
                        </div>
                        <div class="form-group">
                            <label for="name">Нэр</label>
                            <input type="text" class="form-control"
                                id="Last-name"
                                name="name"
                                placeholder="Таны нэр">
                        </div>
                        <div class="form-group">
                            <label for="name">Нэр</label>
                            <input type="text" class="form-control"
                                id="name"
                                name="name"
                                placeholder="Таны нэр">
                        </div>

                        <div class="form-group">
                            <label for="password">Нууц үг</label>
                            <input type="password" class="form-control"
                                id="password"
                                name="password"
                                placeholder="Нууц үг">
                        </div>
                        <div class="form-group">
                            <label for="password">Нууц үг</label>
                            <input type="password" class="form-control"
                                id="re-password"
                                name="password"
                                placeholder="Нууц үг">
                        </div>
                        <!-- <div class="form-group">
                            <label for="password">Нууц үг</label>
                            <input type="password" class="form-control"
                                id="el-password"
                                name="password"
                                placeholder="Нууц үг">
                        </div> -->
                        <div class="center">
                            <button type="submit" class="button yellow">
                                <p style = "color:black">Бүртгүүлэх</p>
                            </button>
                        </div>
                        <div class="center padding-top">

                            <button type="submit" class="button blue">
                                <i class="icon">
                                    f
                                </i>
                                Фейсбүүкээр нэвтрэх
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
        `
    }
}

export class login {
    showData() {
       
        return `
        <section class="main" style = "width: 50vw;"  >

        <div style="padding: 50px;">
            <div class="card">
                <div class="card-header">
                    Нэвтрэх
                </div>
                <div class="card-body">
                    <form >
                        <div class="form-group">
                            <label for="name">Нэр</label>
                            <input type="text" class="form-control" id="name"
                                name="name"
                                placeholder="Таны нэр">
                        </div>
    
                        <div class="form-group">
                            <label for="password">Нууц үг</label>
                            <input type="password" class="form-control"
                                id="password"
                                name="password"
                                placeholder="Нууц үг">
                        </div>
                        <div class="center">
                            <button type="submit" class="button yellow">
                                Нэвтрэх
                            </button>
                        </div>
                        <div class="center padding-top">
    
                            <button onsubmit="event.preventDefault();  type="submit" class="button blue">
                                <i class="icon">
                                    F
                                </i>
                                Login with facebook
                            </button>
                        </div>
    
                    </form>
                </div>
    
            </div>
        </div>

    </section>
        `
    }
}

export class cartList {
    showData() {
        return `
        <div class="cart">
                <div class="list-title">

                    <p style="margin-left: 3vw">Зураг</p>
                    <p style="margin-left: 6vw">Номын нэр</p>
                    <p style="margin-left: 6.5vw">Тоо</p>
                    <p style="margin-left: 3vw">Нэгж үнэ</p>
                    <p style="margin-left: 4.5vw;margin-right: 3vw">Нийт үнэ  </p>
                </div>
                <cart-list name="list1"></cart-list>
                <cart-list name="list2"></cart-list>
                <cart-list name="list3"></cart-list>
            </div>

            <div class="cart-mobile">
                <div class="list-mobile">
   

                    <a href="individualBook.html" aria-label="book cover" name = "More about book">
                        <img class ="book-cover-mobile" alt = "Book photo" src = "WEBP/book-cover-4.webp">
                    </a>
                    
                    <div class="list-info-mobile">
                        <div class="book-title-mobile"> Book name</div>
                        <img class="book-trash-mobile" alt="Trash" src="SVG/trash.svg"> 
                        <div class="book-car-mobile"> 1 </div>
                        <div class="book-car-mobile"> 17000 </div>
                        <div class="book-car-mobile"> 17000 </div>
                    </div>
                </div>

                <div class="list-mobile">
      

                    <a href="individualBook.html" aria-label="book cover" name = "More about book">
                        <img class ="book-cover-mobile" alt = "Book photo" src = "WEBP/book-cover-4.webp">
                    </a>
                    
                    <div class="list-info-mobile">
                        <div class="book-title-mobile"> Book name</div>
                        <img class="book-trash-mobile" alt="Trash" src="SVG/trash.svg"> 
                        <div class="book-car-mobile"> 1 </div>
                        <div class="book-car-mobile"> 17000 </div>
                        <div class="book-car-mobile"> 17000 </div>
                    </div>
                </div>

                <div class="list-mobile">
    

                    <a href="individualBook.html" aria-label="book cover" name = "More about book">
                        <img class ="book-cover-mobile" alt = "Book photo" src = "WEBP/book-cover-4.webp">
                    </a>
                    
                    <div class="list-info-mobile">
                        <div class="book-title-mobile"> Book name</div>
                        <img class="book-trash-mobile" alt="Trash" src="SVG/trash.svg"> 
                        <div class="book-car-mobile"> 1 </div>
                        <div class="book-car-mobile"> 17000 </div>
                        <div class="book-car-mobile"> 17000 </div>
                    </div>
                </div>
            </div>
            <aside>
                <div class="info">
                    <div class="info-title">
                        Төлбөрийн мэдээлэл
                    </div>
                    <p>Нийт үнэ: 59000₮</p>
                    <p>Тоо ширхэг: 3</p>
                    <button class="order">
                        Захиалах
                    </button >
                    <button class="cancel">
                        Өөр бараа сонгох
                    </button>
                </div>
            </aside>
        `
    }
}
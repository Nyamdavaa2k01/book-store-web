 
export class myHeader {
    
    showData (){
        return `
        <header>
           
           <div class = "header-top"> 
                <a href = "index.html"><p>Бие даасан номын дэлгүүр</p></a>
                
                <div class ="header-right">
                    <a href = "register.html" name = "register"><i class ="material-icons register-icon" >account_circle</i></a>
                    <a href ="register.html" name = "sign up via link"> <p style = "color:white">Бүртгүүлэх</p></a>
                    <a href ="login.html"i class ="material-icons login-icon" name = "login">login</i></a>
               
                    <p><a href = "login.html" name = "login">Нэвтрэх</a></p>
                </div>
            </div>
            <!-- <div  class = "header-top-right">
                <i class ="material-icons">shopping_cart</i>
            </div> -->
            <div class ="header-bottom">
               
                <a href ="index.html" name ="navigate to main page"><img src = "WEBP/logo.webp" alt = "book store logo" class = "logo-photo"></a>
                <div class = "search-field" >
                    <input type = "text" class ="search-input" placeholder="Хайлт хийх"> 
                    <button type ="search" class ="search-button">
                        <i class ="material-icons icon-search">search</i>
                    </button>
                </div>

                <i class = "material-icons icon-cart" style ="font-size: 4vmax;"><a href ="cart-list.html" name = "view cart list">shopping_cart</a></i>

            </div>

            <div class ="mobile-search-field">
                <button type ="search" class ="mobile-search-button">
                    <i class ="material-icons icon-search">search</i>
                </button>
            </div>
            </header>
        `
    }
}

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
                <div id="book1"></div>
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
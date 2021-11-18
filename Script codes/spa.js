

import { navBar, mainPage, footer, News, category, cartList, register, login} from './pages.js'; 


// const header = new myHeader() ; 
// document.getElementById("header1").innerHTML = header.showData() ; 

// const navigation = new navBar() ; 
// document.getElementById("navbar").innerHTML = navigation.showData() ; 


const field = document.getElementById("mainPage") ; 


const foot = new footer () ; 
document.getElementById("footer").innerHTML = foot.showData() ; 

const main = new mainPage () ; 
document.getElementById("mainPage").innerHTML = main.showData() ; 


// document.getElementById("test").addEventListener("click", pageSwap) ; 
document.getElementById("opt4").addEventListener("click", function(){ 
    // const bookInfo = new individualBook () ; 
    // document.getElementById("mainPage").innerHTML = bookInfo.showData() ; 
    const cat = new category() ; 
    document.getElementById("mainPage").innerHTML = cat.showData() ;

});

document.getElementById("opt3").addEventListener("click", function(){ 
    // const bookInfo = new individualBook () ; 
    // document.getElementById("mainPage").innerHTML = bookInfo.showData() ; 
    const cat = new category() ; 
    document.getElementById("mainPage").innerHTML = cat.showData() ;

});
document.getElementById("opt2").addEventListener("click", function(){ 
    // const bookInfo = new individualBook () ; 
    // document.getElementById("mainPage").innerHTML = bookInfo.showData() ; 
    const cat = new category() ; 
    document.getElementById("mainPage").innerHTML = cat.showData() ;

});
document.getElementById("opt1").addEventListener("click", function(){ 
    // const bookInfo = new individualBook () ; 
    // document.getElementById("mainPage").innerHTML = bookInfo.showData() ; 
    const cat = new category() ; 
    document.getElementById("mainPage").innerHTML = cat.showData() ;

});


document.getElementById("navToMain").addEventListener("click", function () {
    const main = new mainPage () ; 
    field.innerHTML = main.showData() ; 
}); 

document.getElementById("navToMain2").addEventListener("click", function () {
    const main = new mainPage () ; 
    field.innerHTML = main.showData() ; 
}); 

document.getElementById("navToRegister").addEventListener("click", function() {
  

    const registering = new register() ; 
    // document.getElementById("mainPage").style.display ="none";
    document.getElementById("mainPage").innerHTML = registering.showData() ; 

});

document.getElementById("navToLogin").addEventListener("click", function() {
   
    const signin = new login() ; 
    document.getElementById("mainPage").innerHTML = signin.showData() ;
    document.getElementById("mainPage").style.zIndex = 999;
}

) ; 

document.getElementById("navToCart").addEventListener("click", function() {
    
    const cart = new cartList () ; 
   
    field.innerHTML = cart.showData(); 
}

) ; 
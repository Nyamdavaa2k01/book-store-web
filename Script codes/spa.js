

import { navBar, mainPage, footer, News, category, cartList, login2} from './pages.js'; 
import {loginSPA, registerSPA} from "./spa_login.js";

const mainSpa = document.getElementById("mainPage") ; 


const field = document.getElementById("mainPage") ; 

const foot = new footer () ; 
document.getElementById("footer").innerHTML = foot.showData() ; 

const main = new mainPage () ; 
document.getElementById("mainPage").innerHTML = main.showData() ; 

document.getElementById("opt4").addEventListener("click", function(){ 
   const cat = new category() ; 
    document.getElementById("mainPage").innerHTML = cat.showData() ;

});

document.getElementById("opt3").addEventListener("click", function(){ 
    const cat = new category() ; 
    document.getElementById("mainPage").innerHTML = cat.showData() ;

});
document.getElementById("opt2").addEventListener("click", function(){ 
    const cat = new category() ; 
    document.getElementById("mainPage").innerHTML = cat.showData() ;

});
document.getElementById("opt1").addEventListener("click", function(){ 
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
    const signin2 = new login2() ; 
    document.getElementById("mainPage").innerHTML = signin2.showData() ; 
    document.querySelector("#loginButtonSPA").addEventListener("click", loginSPA);
    document.querySelector("#registerButtonSPA").addEventListener("click", registerSPA);
    const mainSpa = document.getElementById("mainPage") ; 
    mainSpa.style.margin = "50px 0 0 0 ";
    mainSpa.style.width = "50% " ;
    document.getElementById("mainPage").style.zIndex = 999 ; 
    document.getElementById("footer").style.display = "none" ; 

});

document.getElementById("navToLogin").addEventListener("click", function() {
    const signin2 = new login2() ; 
    document.getElementById("mainPage").innerHTML = signin2.showData() ; 
    document.querySelector("#loginButtonSPA").addEventListener("click", loginSPA);
    document.querySelector("#registerButtonSPA").addEventListener("click", registerSPA);
    const mainSpa = document.getElementById("mainPage") ; 
    mainSpa.style.margin = "50px 0 0 0 ";
    mainSpa.style.width = "50% " ;
    document.getElementById("mainPage").style.zIndex = 999 ; 
    document.getElementById("footer").style.display = "none" ; 

}

) ; 

document.getElementById("navToCart").addEventListener("click", function() {
    
    const cart = new cartList () ; 
   
    field.innerHTML = cart.showData(); 
}

) ;

// let appContainerID = "mainPage" ; 

// class SpaNav {
//     AddRoute(parentRoute, routeName, data) {
//         this.appData.get(parentRoute).
//         set(routeName, data) ; 
//     }
//     onRoute (route) {
//         console.log(`route = ${route}`) ; 
//     document.getElementById(this.appContainerID).innerHTML = this.appData.get("/").get(route)?.showData() || "not Found"; 
//     }

//     notFound() {
//         return html ` 
//             <p></p>
//         `    
//         }
// }

// // Adding routes 
// SpaNav.AddRoute("/", "cartList", cartList) ; 
// SpaNav.AddRoute("/", "login", )
// document.getElementById("mainPage").array.forEach(element => {
//     element.addEventListener("click", e => {
//         e.preventDefault() ; 
//         history.pushState(null, "", e.target.href) ; 
//     } 
//     )
// });

// window.addEventListener("popstate", e => {
//     console.log("testing") ; 
//     mainPage
// }

// )
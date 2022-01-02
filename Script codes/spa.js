import {
	navBar,
	mainPage,
	footer,
	News,
	category,
	cartList,
	login2
} from "./pages.js";
import { loginSPA, registerSPA } from "./spa_login.js";
import {getInfo} from './exporting.js'; 

            // export const url = "https://api.jsonbin.io/b/618c95b4820eda3cc81b7988/latest" ;    
            export const url = "https://api.jsonbin.io/b/61963b900ddbee6f8b0e09df/latest" ;

            
const mainSpa = document.getElementById("mainPage");

const field = document.getElementById("mainPage");

const foot = new footer();
document.getElementById("footer").innerHTML = foot.showData();

const footerSpa = document.getElementById("footer"); 

function display(code) {
	if (code == 1) {
        mainSpa.style.width = "100%";
		const main = new mainPage();
		mainSpa.innerHTML = main.showData();
		const foot = new footer();
		footerSpa.style.display = "flex" ; 
        footerSpa.style.width = "100%" ; 
        setInterval(

            getInfo(url, 
               (books) => {
                   let i = 1 ; 
                   console.log(this);
                   books.forEach (
                     (element) => {
                           let id = 'book'+i; 
                           document.getElementById(id).innerHTML += element.create() ; 
                           let id2 = 'book' + (10+i) ; 
                           document.getElementById(id2).innerHTML += element.create() ; 
                           let id3 = 'book' + (20+i) ; 
                           document.getElementById(id3).innerHTML += element.create() ; 
                           let id4 = 'book' + (30+i) ; 
                           document.getElementById(id4).innerHTML += element.create() ; 
                           // let id5 = 'book' + (40+i) ; 
                           // document.getElementById(id5).innerHTML += element.create() ; 
                     i ++ ; 
                   })
                   
               }), 3000
       )

	} else if (code == 2 ) {
		const signin2 = new login2();
		document.getElementById("mainPage").innerHTML = signin2.showData();
		document.querySelector("#loginButtonSPA").addEventListener("click", loginSPA);
		document.querySelector("#registerButtonSPA").addEventListener("click", registerSPA);
		const localMain = document.getElementById("mainPage");
		localMain.style.margin = "50px 0 0 0 ";
		localMain.style.width = "50%";
		// document.getElementById("mainPage").style.zIndex = 999 ;
		document.getElementById("footer").style.display = "none";
	}
    else if (code == 3) {
        mainSpa.style.width = "100% ";
        const cart = new cartList();
        mainSpa.innerHTML = cart.showData();
        const foot = new footer();
		footerSpa.style.display = "flex" ; 
        footerSpa.style.width = "100%" ; 
    }
    else {
        mainSpa.style.width = "100% ";
        const cat = new category();
	    mainSpa.innerHTML = cat.showData();
        footerSpa.style.display = "flex" ; 
    }
}

const main = new mainPage();
mainSpa.innerHTML = main.showData();

document.getElementById("opt4").addEventListener("click", function () {
	let id = 4 ; 
    history.pushState({id}, `Selected : ${id}`, `./Category:1`) 
    display(id) ; 
});

document.getElementById("opt3").addEventListener("click", function () {
    let id = 5 ; 
    history.pushState({id}, `Selected : ${id}`, `./Category:2`) 
    display(id) ; 
});
document.getElementById("opt2").addEventListener("click", function () {
	let id = 6 ; 
    history.pushState({id}, `Selected : ${id}`, `./Category:3`) 
    display(id) ; 
});
document.getElementById("opt1").addEventListener("click", function () {
	let id = 7 ; 
    history.pushState({id}, `Selected : ${id}`, `./Category:4`) 
    display(id) ; 
});

document.getElementById("navToMain").addEventListener("click", function () {
	let id = 1 ; 
    history.pushState({id}, `Selected : ${id}`, `./mainPage`) 
    display(id) ; 
});
document.getElementById("navToMain2").addEventListener("click", function () {
	let id = 1 ; 
    history.pushState({id}, `Selected : ${id}`, `./mainPage`) 
    display(id) ; 
});
document.getElementById("navToRegister").addEventListener("click", function () {
	let id = 2 ; 
    history.pushState({id}, `Selected : ${id}`, `./Register`) 
    display(id) ;  
}) ; 
document.getElementById("navToLogin").addEventListener("click", function () {
    let id = 2 ; 
    history.pushState({id}, `Selected : ${id}`, `./Login`) 
    display(id) ; 
});
document.getElementById("navToCart").addEventListener("click", function () {
	let id = 3 ; 
    history.pushState({id}, `Selected : ${id}`, `./CartList`) 
    display(id) ; 
});

window.addEventListener('popstate', e => {
    if (e.state != null) 
        display(e.state.id) ; 
    else 
        display(1) ; 
})


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


// //#region Testing Codes 

// class MyApp {
//     constructor(appId) {
//         this.appContainerId = appId ; 
//         this.appData = new Map() ; 
//         this.appData.set("/", new Map()) ; 
//     }

//     AddRoute (parentRoute, routeName, data) {
//         this.appData.get(parentRoute).set(routeName, data) ; 
//     }

         

//     notFound () {
//         return html `Хуудаст дамжихад алдаа гарлаа`
//     }
// }

// const html = String.raw() ; 
// class AboutUs {
//     constructor(objData) {
//         this.data = objData ; 
//     }
//     Render () {
//         return html` 
//         <p>Bolkulenda</p>
//         <h1>About MEEEE</h1>
//         `
//     }
// }

// class News {
   
// Article (dataObj) {
//     return html `<p>${dataObj.title}</p>` ; 
// }

//     Render () {
//         let returnHTML ="" ; 
//         for (let article of this.data.articles) { 
//             returnHTML += this.Article (article) ; 
//         }

//         return html `
//         ${returnHTML} 
//         `
//     }
// }
// //#endregion

import {myHeader, navBar, mainPage} from './pages.js'; 


const header = new myHeader() ; 
document.getElementById("header1").innerHTML = header.showData() ; 

// const row1 = new bookRow() ; 
// document.getElementById("book-row-container1").innerHTML = row1.showData(1) ; 

const navigation = new navBar() ; 
document.getElementById("navbar").innerHTML = navigation.showData() ; 

const main = new mainPage () ; 
document.getElementById("mainPage").innerHTML = main.showData() ; 


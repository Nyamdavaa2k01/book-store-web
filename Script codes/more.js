
import {News, getInfo} from './exporting.js'; 

export const url = "https://api.jsonbin.io/b/618c95b4820eda3cc81b7988/latest" ;    
getInfo(url, 
    (books) => {
        let i = 1 ; 
        books.forEach (
          (element) => {
              
          if (i==1)document.getElementById("onOwn").innerHTML += element.onOwn() ; 
          let id = 'book'+(40+i) ; 
          document.getElementById(id).innerHTML += element.create() ; 
          let id2 ='book'+ (50+i) ; 
          document.getElementById(id2).innerHTML += element.create() ; 
          i ++ ; 
        })
        //document.getElementById("onOwn").innerHTML += books[1] ; 
        
    })
    

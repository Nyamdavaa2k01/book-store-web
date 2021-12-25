import {News, getInfo} from './exporting.js'; 

            // export const url = "https://api.jsonbin.io/b/618c95b4820eda3cc81b7988/latest" ;    
            export const url = "https://api.jsonbin.io/b/61963b900ddbee6f8b0e09df/latest" ;
            setInterval(

                getInfo(url, 
                    (books) => {
                        let i = 1 ; 
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
                

            
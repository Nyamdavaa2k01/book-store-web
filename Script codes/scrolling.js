function sliding (dir, index) {
    scrolled = 0 ; 
    let id  = 'book-row-container' + index ; 
    var cont = document.getElementById(id) ; 
     var slideTimer = setInterval(function(){
         if (dir == 0) {
             cont.scrollLeft -= 20 ;  
         }
         else cont.scrollLeft += 20 ; 
         scrolled += 20 ; 
         if (scrolled >= 200) {
             window.clearInterval(slideTimer) ; 
         }
     
      }, 50)
}

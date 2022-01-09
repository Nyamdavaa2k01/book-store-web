
const sortOpen = document.getElementById("sort_open") ; 
const sortClose = document.getElementById("sort_close") ; 

console.log(sortOpen);
console.log(sortClose) ;
const sortOverlay = document.getElementById('sort_overlay') ; 


sortOpen.addEventListener('click', () => {
    const modal = document.getElementById("sort_modal") ;
    opening(modal) ; 
})

sortClose.addEventListener('click', () => {
    const modal = document.getElementById("sort_modal") ; 
    closing (modal) ; 
})


function opening(modal) {
    if (modal == null) return ; 
    modal.classList.add('active') ; 
    sortOverlay.classList.add('active') ; 
}

function closing(modal) {
    if (modal == null) return ; 
    modal.classList.remove('active') ; 
    sortOverlay.classList.remove('active') ; 
}
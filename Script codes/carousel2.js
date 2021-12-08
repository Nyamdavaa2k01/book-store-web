const track = document.querySelector('.c_track') ; 
const slides = Array.from(track.children) ; 
const nextButton = document.querySelector('.c_button--right'); 
const prevButton = document.querySelector('.c_button--left');
const dotsNav = document.querySelector('.c_nav') ; 
const dots = Array.from(dotsNav.children) ; 

// showing slides 
const slideWidth = slides[0].getBoundingClientRect().width ;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth*index + 'px' ;
}

slides.forEach(setSlidePosition);

// moving function 

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left+ ')' ; 
    // changing the class here 
    currentSlide.classList.remove('current-slide') ; 
    targetSlide.classList.add('current-slide') ; 
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden') ; 
        nextButton.classList.remove('is-hidden') ; 
    }
    else if (targetIndex === slides.length-1) {
        prevButton.classList.remove('is-hidden') ; 
        nextButton.classList.add('is-hidden') ; 
    }
    else {
        prevButton.classList.remove('is-hidden') ; 
        nextButton.classList.remove('is-hidden') ;
    }
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide') ; 
    targetDot.classList.add('current-slide') ; 
} 

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide') ; 
    const prevSlide = currentSlide.previousElementSibling ; 

    moveToSlide(track, currentSlide, prevSlide) ; 
    const currentDot = dotsNav.querySelector('.current-slide') ; 
    const prevDot = currentDot.previousElementSibling ; 
    updateDots(currentDot, prevDot) ; 

    const prevIndex = slides.findIndex(slide => slide == prevSlide) ; 
    hideShowArrows(slides, prevButton, nextButton, prevIndex); 
});


// right button 
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide') ;
    const nextSlide = currentSlide.nextElementSibling ; 
    moveToSlide(track, currentSlide, nextSlide) ;  
    const currentDot = dotsNav.querySelector('.current-slide') ; 
    const nextDot = currentDot.nextElementSibling ; 
    updateDots(currentDot, nextDot) ; 
    const nextIndex = slides.findIndex(slide => slide == nextSlide) ; 
    
    hideShowArrows(slides, prevButton, nextButton, nextIndex); 

    
 })

dotsNav.addEventListener('click', e => {
    // which one is clicked?
    const targetDot = e.target.closest('button') ; 
    console.log(targetDot) ;
    const currentSlide = track.querySelector('.current-slide') ; 
    const currentDot = dotsNav.querySelector('.current-slide') ; 
    const targetIndex = dots.findIndex(dot  => dot === targetDot)

    const targetSlide = slides[targetIndex] ;
    moveToSlide(track,currentSlide, targetSlide) ; 
    updateDots(currentDot, targetDot) ; 

    // hiding buttons when we are at some corner 
    hideShowArrows(slides, prevButton, nextButton, targetIndex) ; 
})

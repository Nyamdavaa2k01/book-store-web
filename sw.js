self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
             return cache.addAll([
                 // essentials 
            "./", "PNG/logo192_real.png", "main-style-2.css", "individualBook.html", "bookCategory.html",
            "./Script codes/scrolling.js", "./stylesheets/fonts.css", "./stylesheets/carousel.css", "./stylesheets/loginForm.css", "./stylesheets/scrolling.css", 
            "./WEBP/book-cover-small-1.webp", "./WEBP/book-cover-small-2.webp", "./WEBP/book-cover-small-3.webp", "./WEBP/book-cover-small-4.webp",
            "./WEBP/book-cover-small-5.webp", "./WEBP/big-cover-5.webp", "individualBook.css", 
                // second-level
            "./style.css", "./main.css", "./cart-list.css",  "cart-list.html", "cart-list-module.html",
             "JPG/banner.jpg", "JPG/footerLogo.png", "JPG/logo.png", "JPG/left.jpg", "JPG/right.jpg",
                // added because of error 
            "./Script codes/more.js", "./WEBP/logo.webp", "./SVG/footerLogo.svg", "./Script codes/carousel2.js",
             "category.css", "./Script codes/bookInfo.js", "./SVG/Menu.svg"
        ] ) ; 
        })
    ) ;
})

self.addEventListener("fetch", e => {
    // console.log(`Intercepting fetch request for: ${e.request.url}`) ; 
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request) ; 
        })
    )
}) ; 
self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
             return cache.addAll([
                 // essentials 
            "./",
             "PNG/logo192_real.png", 
                // pages 
             "individualBook.html", 
             "bookCategory.html", 
             "login.html",
             "cart-list.html",
                // stylesheets 
             "main-style-2.css", 
             "./stylesheets/fonts.css",
             "mobile-modal.css",
             "stylesheets/scrolling.css",
             "stylesheets/carousel.css",
             "stylesheets/loginForm.css",
             "cart-list.css",
             "bookCategory3.css",
             "sort_modal.css",
             
                // scripts 
             "Script codes/scrolling.js",
             "Script codes/main.js", 
             "modal.js",
             "Script codes/carousel2.js",
             "./Script codes/more.js",
             "Script codes/bookInfo.js",
             "Script codes/cart.js",

                // assets 
            "WEBP/logo.webp", 
            "JPG/left.jpg ",
            "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80",
            "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80",
            "https://images.unsplash.com/photo-1601640365825-66327247a242?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80",
            "JPG/right.jpg",
            "SVG/footerLogo.svg",
            "PNG/fb.png",
            "PNG/ig.png",
            "PNG/tweet.png",
            "WEBP/book-cover-small-1.webp",
            "WEBP/book-cover-small-2.webp",
            "WEBP/book-cover-small-3.webp",
            "WEBP/book-cover-small-4.webp",
            "WEBP/book-cover-small-5.webp",


        ] ) ; 
        })
    ) ;
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request) ; 
        })
    )
}) ; 
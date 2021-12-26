const express = require('express') ; 
const app = express () ; 
const Pool = require("pg").Pool;

// https://www.youtube.com/watch?v=ldYcgPKEZC8

const pool = new Pool ({
    user : "postgres", 
    password : "password",  
    host : "localhost", 
    port :5432 , 
    database : "books" 
})
app.use (express.json()) ; 

app.get ("/books", async (req,res) => {
    try {
        const allBooks = await pool.query("SELECT * from book") ; 
        res.json(allBooks.rows) ; 
    }
    catch(err) {
        console.error(err.message) ; 
    }
}) ; 

app.get("/books/:id", async(req, res) => {
    try {
        const { id } = req.params ; 
        const singleBook = await pool.query("SELECT * FROM book WHERE book_id = $1", 
        [
            id
        ]) ; 
        res.json(singleBook.rows) ; 
    }catch (err) {
        console.error(err.message) ; 
    }
}) ; 

app.put ("/books/:id", async(req, res) => {
    try {
        const {id} = req.params ; 
        const {title} = req.body ; 
        const {author} = req.body ;
        const updateBook = await pool.query("UPDATE book SET title = $1 WHERE book_id = $2", 
         [
             title, id
         ]); 
         res.json ("Амжилттай өөрчиллөө.")
    }
    catch (err) {
        console.error(err.message) 
    }
})

app.delete("/books/:id", async (req, res) => {
    try {
        const {id} = req.params ; 
        const deleteBook = await pool.query("DELETE FROM book WHERE book_id = $1", 
            [
                id 
            ] 
        ); 
        res.json("Амжилттай устгалаа.") ; 
    }
    
    catch(err) {
        console.error(err.message) ; 
    }
})


app.get('/', (req, res) => { 
    res.send ("Веб програмчлал хичээлийн хүрээнд хийж буй WEB API даалгаврын эхлэх хэсэг харагдаж байна.") ; 
}) ; 

app.post ('/books', async(req,res) => {
    try {
        const {title, author, price} = req.body ; 
        const newBook = await pool.query("INSERT INTO book (title, author, price) VALUES($1, $2, $3) RETURNING *", 
        [title, author, price]) ; 
        res.json(newBook.rows[0]); 
        console.log(pool.query("SELECT * from book"));
    }
    
    catch (err) {
        console.error(err.message) ; 
    }
}) ; 

const port = process.env.PORT || 3000 ; 
app.listen(port, () => console.log(`Listening on port ${port}...`)) ;


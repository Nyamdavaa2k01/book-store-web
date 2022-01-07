-- Note that these arent actual queries, but just a kind of documentation

CREATE DATABASE books ; 

CREATE TABLE book (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255), 
    photo VARCHAR(255),
    author VARCHAR(255),
    published VARCHAR(255),
    category VARCHAR(255),
    isbn VARCHAR(255),
    language  VARCHAR(255),
    page VARCHAR(255),
    size VARCHAR(255),
    shelf VARCHAR(255),
    price int,
    discount int,
    about VARCHAR(255)

) ; 

ALTER TABLE book 
ALTER COLUMN published TYPE VARCHAR(255); 


INSERT INTO book (
	 book_id, title, photo, author, published, category, isbn, language, page, size, shelf, price, discount, about
)

VALUES (
	1,  'HARRY POTTER AND THE ORDER OF THE PHOENIX',
	'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
	'J. K. Rowling', 'Bloomsbury Publishing PLC', 
	 'CHILDRENS, TEENAGE & EDUCATIONAL',
	'978-14088-55-69-0',
	'Англи', 816, '198 x 135 x 129 мм',
	'Байгаа', 60000, 45000, 
	'Ид шидийг дамжуулах цаг боллоо. Олон улсын сонгодог, бестселлер номны шинэчилсэн хувилбар'
)
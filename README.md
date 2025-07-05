# Minimal Library Management System

A full-featured Library Management System built using **React (TypeScript)**, **Redux Toolkit** **Query (RTK Query)**, **Express.js**, and **MongoDB (Mongoose)**.

## Features

- Create, Read, Update, Delete (CRUD) books
-  Borrow books with availability check
-  Summary of borrowed books using aggregation
-  Schema validation, custom error handling, filtering, sorting, and pagination
-  Clean code structure using TypeScript interfaces and Mongoose models

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Redux Toolkit Query + ShadCN UI + Tailwind CSS
- **Backend**: Node.js + Express.js + TypeScript + Mongoose
- **Language**: TypeScript
- **Database**: MongoDB using Mongoose
- **Testing**: Postman

## Project setup locally : 
**Backend**

```js
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system
npm install
npm run dev
```

**Frontend**
```js
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system
npm install
npm run dev
```

## API Endpoints
### 1️⃣ Create a Book
#### method:  POST
#### end point : /api/books
#### 1. Creates a new book with all details (Must follow this format) : 
#### Request body: 

``` bash
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology.",
  "copies": 5,
  "available": true
}
```
#### Response body: 
``` bash
{
  "success": true,
  "message": "Book created successfully",
  "data": { ... }
}
```
### 2️⃣ Get All Books.
#### method:  GET
#### 2. Get all books: 

```base 
/api/books
```

 ### 3️⃣ Get a book by id .
#### method:  GET
#### 3. Get a single book by MongoDB Id from books collection

```base
/api/books/6857d1d8026e223064630198
```

 ### 4️⃣ Update a book by id .
#### method:  PUT
#### 4. Get a single book by MongoDB Id from books collection

```base
/api/books/6857d1d8026e223064630198
```

 ### 5️⃣ Delete a book by id .
#### method:  DELETE
#### 5. Delete a book by Id

```base
/api/books/6857d1d8026e223064630198
```

 ### 6️⃣ Borrow a book .
#### method:  POST
#### end point : /api/borrow
#### This will : 
- Check if the book exists and has enough copies
- Deduct the borrowed quantity from available copies
-  Automatically mark the book as unavailable if copies reach 0
-  Create a borrow record
#### Request body: 
```base
    {
    "book": "6647a5f1c6c8b32a5c123abc",
    "quantity": 2,
    "dueDate": "2025-07-01"
    }
```
#### Response body
```base
{
  "success": true,
  "message": "Borrowed book successfully",
  "data": { ... }
}
```

 ### 7️⃣ Borrowed summery(Aggregation)
#### method:  GET
#### end point : /api/borrow
#### Response body : 
Returns a summary grouped by books with total quantity borrowed : 
```bash
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "book": {
        "title": "The Theory of Everything",
        "isbn": "9780553380163"
      },
      "totalBorrwed": 5
    }
  ]
}
```

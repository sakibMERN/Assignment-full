const express = require('express');
const router = express.Router();

const { allBooks, specificBook, newBook, addBook, deleteBook  } = require("../controllers/book")

router.get("/books", allBooks);
router.get("/books/:id", specificBook);
router.post("/books", newBook);
router.put("/books/:id", addBook);
router.delete("/books/:id", deleteBook);



module.exports = router;
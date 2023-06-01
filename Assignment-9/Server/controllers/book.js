const bookList = require("../controllers/book");

exports.allBooks = async (req, res,next) => {
    try{
        const books = await bookList.find();
        res.json(books);
    }
    catch(err){
        res.status(500).json({error:'Internal server error'});
    }
};


exports.specificBook = async (req, res, next) =>{
    try {
        const books = await bookList.find(req.params.id);
        if(!books){
            return res.status(404).json({error: 'Book not found'});
        }
        res.json(books);
    }
    catch(err){
        res.status(500).json({error:'Internal server error'});
    }

};


exports.newBook = async (req, res, next) =>{
    try {
        const books = new bookList(req.body);
        await books.save();
        res.status(201).json(books);
    }
    catch(err){
        res.status(500).json({error:'Internal server error'});
    }
};


exports.addBook = async (req, res, next) =>{
    try {
        const books = await bookList.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!books){
            return res.status(404).json({error: 'Book not found'});
        }
        res.json(books);
    }
    catch(err){
        res.status(500).json({error:'Internal server error'});
    }
};


exports.deleteBook = async (req, res, next) =>{
    try {
        const books = await bookList.findByIdAndDelete(req.params.id);
        if(!books) {
            return res.status(404).json({error:'Book not found'});
        }
        res.sendStatus(204);
    }
    catch(err){
        res.status(500).json({error:'Book not found'});
    }
};



const Books = require('../models/bookSchema')

exports.createBook = (req, res) => {
    const book = new Books(req.body);
    book.save((err, book) => {
        if(err){
            return res.status(400).json({
                error:"Unable to create a book"
            })
        }
        res.json(book);
    })
}

exports.getBookByBid = (req, res) => {
    Books.findOne({"Bid":req.body.Bid}).exec((err, onebook) => {
        if(err){
            return res.status(400).json({
                error:"Book does't exists"
            })
        }
        res.json(onebook);
    })
}

exports.getAllBooks = (req, res) => {
    Books.find().exec((err, allbooks) => {
        if(err){
            return res.status(400).json({
                error:"No products in database"
            })
        }
        res.json(allbooks);
    })
}

exports.updateBook = (req, res) => {
    Books.findOne({ "Bid": req.body.Bid }).exec((err, onebook) => {
        if (err) {
            return res.status(400).json({
                error: "Book does't exists"
            })
        }
        let book = onebook;
        //console.log(onebook);
        //console.log(book)
        if (req.body.title){
            book.title = req.body.title;
        }
        if (req.body.price){
            book.price = req.body.price;
        }
        if(req.body.author){
            book.author = req.body.author;
        }
        //console.log(book)
        Books.updateOne({Bid:book.Bid}, {$set:book}, (err, updbook) => {
            if(err){
                return res.status(400).json({
                    error:"Unable to update"
                })
            }
            res.json(onebook);
        })
    })
}

exports.removeBook = (req, res) => {
    Books.findOne({ "Bid": req.body.Bid }).exec((err, onebook) => {
        if (err) {
            return res.status(400).json({
                error: "Book does't exists"
            })
        }
        const book = onebook;

        book.remove((err, rmbook) => {
            if(err){
                return res.status(400).json({
                    error:"Unable to remove"
                })
            }
            res.json(rmbook);
        })
    })
}
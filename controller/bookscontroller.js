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
    Books.find({"Bid":req.body.Bid}).exec((err, onebook) => {
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
    console.log(Object.keys(req.body));
    // Books.update({"Bid":req.body.Bid}, {req.body}, (err, book) => {
    //     if(err){
    //         return 
    //     }
    // })
}
const express = require('express');
const router = express.Router();

const { createBook, getBookByBid, getAllBooks, updateBook, removeBook} = require('../controller/bookscontroller')

router.post("/create", createBook);
router.post("/onebook", getBookByBid);

router.get("/allbooks", getAllBooks);

router.put("/updatebook", updateBook);

router.delete("/remove", removeBook)

module.exports = router
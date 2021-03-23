const express = require('express');
const router = express.Router();

const { createBook, getBookByBid, getAllBooks, updateBook} = require('../controller/bookscontroller')

router.post("/create", createBook);
router.post("/onebook", getBookByBid);

router.get("/allbooks", getAllBooks);

router.put("/updatebook", updateBook);

module.exports = router
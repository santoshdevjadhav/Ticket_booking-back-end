var express = require('express');
var router = express.Router();

var Book = require("../schema/book")

router.post("/book_movie", async function (req, res) {
    try {
        var book = await Book.create(req.body);
        if (book)
            res.send(book)


    } catch (error) {
        res.send(error)
    }
})

router.get("/get_movie", function (req, res) {

    Book.find({}, function (error, data) {
        if (error)
            res.status(404).send(error)
        if (data)
            console.log(data)
        res.json(data)

    });


})
router.patch("/update_seats/:id", async function (req, res) {

    console.log(req.body)
    console.log(req.params.id)
    try {
        var ticket = await Book.findByIdAndUpdate(req.params.id, { booked_seats: req.body.booked_seats })

        if (ticket) {

            var new_data = await Book.findOne({ _id: ticket._id })
            res.send(new_data)
        }
        else
            res.status(404).send("no record found")
    } catch (error) {
        res.status(404).send(error)
    }
})



module.exports = router;

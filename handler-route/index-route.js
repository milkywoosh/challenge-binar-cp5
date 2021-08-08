const express = require('express');
const app = express();
const path = require('path');
const { chapters } = require('../chapter-db/index-chapter-db');
const router = express.Router();


router.get('/:part', (req, res) => {
    // choice: 3,4,5 else not found
    // logic to find email
    // req.params.email ==> request parameter  : contoh: :part 
    const parts = chapters.find( ({ part }) => part == parseInt(req.params.part));
    if (!parts) {
        res.status(404).send("The chapter part is not found");
    }

    res.send(parts);
});


module.exports = router;
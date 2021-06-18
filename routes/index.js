'use strict';
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', { // changed to template
        locals: {
            title: "Home Page"
        },
        partials: {
            body: "partials/home"
        }
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();

// matches http://localhost:3000/ps3
router.route('/')
    .get((req, res, next) => {
        console.log('In ps3 GET:');
        res.render('ps3', { string: 'I love CS412 and Prof. Donham!' });
    })

    .post((req, res, next) => {
        console.log('In ps3 POST:');
        let data = req.body.inputData;
        res.render('ps3',
            {
                originalString: data,
                stringLength: data.length
            });
    })

module.exports = router;

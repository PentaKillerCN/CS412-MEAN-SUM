const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/weatherAPI');

// matches http://localhost:3000/ps4/
router.route('/')
    .post(async (req, res, next) => {
        console.log('In ps4 POST:');
        let result = await fetch(CONFIG.url + '?q=' + req.body.city + '&units=metric&appid=' + CONFIG.key);
        let weather = await result.json();
        res.render('weather', {title: 'Check the Weather Today!', city: weather.name, temperature: weather.main.temp, humidity: weather.main.humidity});
    })

module.exports = router;
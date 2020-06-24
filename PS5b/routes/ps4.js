const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const CONFIG = require('../configs/weatherAPI');

const redis = require('redis');
const client = redis.createClient();
client.flushdb((err, success) => {
    if (err) {throw new Error("Error found in client.flushdb function");}
    console.log("The cache has been cleared")
});

const {promisify} = require('util');
const existsAsync = promisify(client.exists).bind(client);
const getAsync = promisify(client.get).bind(client);

// matches http://localhost:3000/ps4/
router.route('/')
    .post(async (req, res, next) => {
        console.log('In ps5 POST:');
        const city = req.body.city;
        let match = await existsAsync(city);
        if (match) {
            // console.log('cache found');
            let cachedData = await getAsync(city);
            let cityData = cachedData.split(',');
            // console.log(cityData);
            let res = {
                cityName: cityData[0],
                temperature: cityData[1],
                humidity: cityData[2],
                cachedBefore: true
            }
            res.send(res);
        } else {
            // console.log('cache not found')
            let result = await fetch(CONFIG.url + '?q=' + req.body.city + '&units=metric&appid=' + CONFIG.key);
            let weather = await result.json();
            let cityData = `${weather.name},${weather.main.temp},${weather.main.humidity}`;
            // console.log(cityData);
            client.set(city, cityData, 'EX', 30, (err, response) => {
                cityData = cityData.split(',');
                let res = {
                    cityName: cityData[0],
                    temperature: cityData[1],
                    humidity: cityData[2],
                    cachedBefore: false
                }
                res.send(res);
            })
        }
    })

module.exports = router;
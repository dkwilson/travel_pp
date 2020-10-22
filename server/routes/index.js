const express = require('express');
const router = express.Router();
const { restart } = require('nodemon');

// import the controllers
const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const travelController = require('../controllers/travelController');
const testimonialController = require('../controllers/testimonialController');


module.exports = function() {
    // home routes
    router.get('/', homeController.homeInformation)

     // about routes
    router.get('/about', aboutController.aboutInformation);

     // travel routes
    router.get('/travels', travelController.displayTravels);
    router.get('/travels/:id', travelController.displayTravel);

     // testimonials routes
    router.get('/testimonials', testimonialController.displayTestimonials);
    router.post('/testimonials', testimonialController.addTestimonial);

    return router;
}
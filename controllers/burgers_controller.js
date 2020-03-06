const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// get info from the database and show on the webpage
router.get('/', (req, res) => {
	burger.all(function(data) {
		let burgerObject = {
			burger : data
		};
		console.log(burgerObject);
		res.render('index', burgerObject);
	});
});

// post new information to the database
// router.post('/api/burger',(req, res)=>{

// })
module.exports = router;

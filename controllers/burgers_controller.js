const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// get info from the database and show on the webpage
router.get('/', (req, res) => {
	burger.all(function(data) {
		let burgerObject = {
			burgers : data
		};
		console.log(burgerObject);
		res.render('index', burgerObject);
	});
});

router.post('/api/burgers', (req, res) => {
	burger.create(
		[ 'burger_name', 'devoured' ],
		[ req.body.name, req.body.devoured ],
		function(result) {
			res.json({ id: result.insertId });
		}
	);
});

router.put('/api/burgers/:id', (req, res) => {
	let condition = 'id' + req.params.id;
	console.log('condition', condition);

	burger.update(
		{
			devoured : req.body.devoured
		},
		condition,
		function(result) {
			if (result.changedRow == 0) {
				return res.status(404).end();
			} else {
				res.status(200).end();
			}
		}
	);
});

router.delete('/api/burgers/:id', (req, res) => {
	let condition = 'id' + req.params.id;
	burger.delete(condition, function(result) {
		if (result.affectedRow == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
// post new information to the database
// router.post('/api/burger',(req, res)=>{

// })
module.exports = router;

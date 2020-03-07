const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'localhost',
	port     : 3306,
	user     : 'root',
	password : 'root',
	database : 'eat_da_burger'
});
connection.connect((err) => {
	if (err) {
		console.log('error connecting: ' + err.stack);
		return;
	}
});
module.exports = connection;

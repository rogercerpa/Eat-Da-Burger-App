const mysql = require('mysql');

const connection = mysql.createConnection({
	host     : 'cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	port     : 3306,
	user     : 'qcsu11gvaqp2wrn4',
	password : 'da4elqb2b8hybcj1',
	database : 'pos86jv69jto8h7f'
});
connection.connect((err) => {
	if (err) {
		console.log('error connecting: ' + err.stack);
		return;
	}
});
module.exports = connection;

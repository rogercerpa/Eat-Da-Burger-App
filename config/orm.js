const connection = require('./connection');

function printQuestionMarks(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
}

function objToSql(ob) {
	let arr = [];
	for (let key in ob) {
		let value = ob[key];
		if (Object.hasOwnProperty.call(ob, key)) {
			if (typeof value === 'string' && value.indexOf('') >= 0) {
				value = "'" + value + "'";
			}
			arr.push(key + '=' + value);
		}
	}
	return arr.toString();
}

let orm = {
	all : function(tableInput, cb) {
		let queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, (err, result) => {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

// selectAll();
// insertOne();
// updateOne();

module.exports = orm;

const orm = require('../config/orm');

let burger = {
	all    : function(cd) {
		orm.all('burgers', function(res) {
			cd(res);
		});
	},
	create : function(cols, vals, cb) {
		orm.create('burgers', cols, vals, function(res) {
			cb(res);
		});
	},
	update : function(objColvals, condition, cb) {
		orm.update('burgers', objColvals, condition, function(res) {
			cb(res);
		});
	},
	delete : function(condition, cb) {
		orm.delete('burgers', condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;

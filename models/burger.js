const orm = require('../config/orm');

let burger = {
	all : function(cd) {
		orm.all('burgers', function(res) {
			cd(res);
		});
	}
};

module.exports = burger;

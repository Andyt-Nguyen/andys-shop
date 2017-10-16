const app = require('./server');
const db = app.get('db');

module.exports = {
	getProducts(req, res) {
		db.get_prod([], (err, prod) => {
			(!err) ? res.status(200).send(prod) : console.log(err);
		});
	},

	addProduct(req, res) {
		db.post_prod([req.body.name, req.body.price], (err, prod) => {
			!err ? res.status(200).send("Success!") : console.log(err);
		});
	},

	deleteProduct(req ,res) {
		db.delete_prod( req.body.id, (err, prod) => {
			!err ? res.status(200).send("Success!") : console.log(err);
		});
	}
}

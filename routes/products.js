const routes = require("express").Router();

routes.get("/products", (req, res) => {
	res.render("products", {
		title: "Product Page",
	});
});

module.exports = routes;

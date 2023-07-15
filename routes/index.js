const routes = require("express").Router();

routes.get("/", (req, res) => {
	res.render("index", {
		title: "Home Page",
	});
});

routes.get("/about", (req, res) => {
	res.render("about", {
		title: "About Page",
	});
});

module.exports = routes;

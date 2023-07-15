const routes = require("express").Router();
// const apiKeyMiddleware = require("../middleware/apiKey");

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

// routes.get("/api/products", apiKeyMiddleware, (req, res) => {
// 	res.json([
// 		{
// 			id: "12",
// 			name: "Chrome",
// 		},
// 		{
// 			id: "13",
// 			name: "Mozilla",
// 		},
// 	]);
// });

module.exports = routes;

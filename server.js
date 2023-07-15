const express = require("express");
const app = express();

// Using Template Engine
// { views } is default folder in ejs
app.set("view engine", "ejs");

// to print views path where we can save dynamic pages
// console.log(app.get("views"));

app.get("/", (req, res) => {
	res.render("index", {
		title: "Home Page",
	});
});

app.get("/about", (req, res) => {
	res.render("about", {
		title: "About Page",
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
	console.log(`Development Server Started at PORT ${PORT}`)
);

var express = require("express");
var router = express.Router();
const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];
/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "View Message", messages });
});

router.post("/new", function (req, res, next) {
	const { user, text } = req.body;
	messages.push({ text, user, added: new Date() });
	res.redirect("/");
});
router.get("/new", function (req, res, next) {
	res.render("form", { title: "Sent Message" });
});
module.exports = router;

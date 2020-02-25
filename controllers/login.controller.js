module.exports.index = (req, res) => {
	res.render("login")
};

module.exports.post = (req, res) => {
	res.send("done")
}
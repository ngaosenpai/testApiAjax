
module.exports.index = (req, res) => {
	res.render("index", {
		page : 0,
		pageName: "Trang chu"
	})
}

module.exports.routing = (req, res) => {
	const pages = {
		"about" : 1,
		"service" : 2,
		"contact" : 3,
	}
	if(req.params.page in pages)
		res.render("index", {
			page: pages[req.params.page],
			pageName: `Page: ${req.params.page}`
		})
	else
		res.sendStatus(404)
}
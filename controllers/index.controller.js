
module.exports.index = (req, res) => {
	res.render("index", {
		page : "bg-secondary",
		pageName: "Trang chu"
	})
}

module.exports.routing = (req, res) => {
	const pages = {
		"about" : "bg-primary",
		"service" : "bg-warning",
		"contact" : "bg-dark",
	}
	if(req.params.page in pages)
		res.render("index", {
			page: pages[req.params.page],
			pageName: `Page: ${req.params.page}`
		})
	else
		res.sendStatus(404)
}
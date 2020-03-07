
module.exports.index = (req, res) => {
	res.render("index", {
		include: "components/trangchu.pug",
		pageName: "Trang chu"
	})
}

module.exports.routing = (req, res) => {
	const pages = {
		"about" : "components/about.pug",
		"service" : "components/service.pug",
		"contact" : "components/contact.pug",
	}
	if(req.params.page in pages)
		res.render("index", {
			include: pages[req.params.page],
			pageName: `Page: ${req.params.page}`
		})
}
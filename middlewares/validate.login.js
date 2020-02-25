const User = require("../models/user.model.js")
module.exports.postLogin = async (req, res, next) => {
	try{
		let user = await User.findOne({username : req.body.username});
		if(!user){
			res.json({error : "username is invalid"})
		} else if(user.password != req.body.password) {
			res.json({error : "password is incorrect"})
		} else {
			res.locals.userId = user._id //send user's id to controller
			next()
		}
	} catch(err) {
		console.log(err);
	}
}
//const underscore = require("underscore")

module.exports = (req, res)=>{
	if (!req.user){
		req.login({id: "asad"}, function(err) {
			if (err) console.log(err)
			return res.redirect("/user")
		})
	}
	else{
		res.redirect("/user")
		//res.send(req.user)
	}
}
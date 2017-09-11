var Meetup = require('../models/meetup');

module.exports.create = function(req,res){ 
	var meetup = new Meetup(req.body); //does json of request recieved  //text to object.
	console.log(typeof(res));
	console.log(req.body);
	meetup.save(function(err,result){   //save body recieved from client to DB 
		console.log("res",res);
		console.log("result",typeof(res.result));
		res.json(result);
		console.log(typeof(res));
		
	});
}

module.exports.list = function (req,res) {
	Meetup.find({},function(err, results){
		res.json(results);
	}); 
}
			exports.getHome = function(req, res) {
			    console.log("in home page ");

			    res.render('home', {
			        page_title: "Home Page"
			    });
			};



			exports.getMap = function(req, res) {
			    console.log("in get Maps page ");

			    res.render('view_map', {
			        page_title: "Home Page"
			    });
			};



			exports.getDirection = function(req, res) {
			    console.log("in get Maps page ");

			    res.render('getDirection', {
			        page_title: "Get Directions"
			    });
			};



			exports.getHospitals = function(req, res) {
			    console.log("in get Maps page ");

			    res.render('hospitalQuery', {
			        page_title: "Get Hospitals"
			    });
			};


			exports.yelpData = function(req, res){
					module.exports = require('./routes/yelp');
			}
			
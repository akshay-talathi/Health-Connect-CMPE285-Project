                                

                                var yelp = require("./index").createClient({
                              consumer_key: 'aajREhLmZp8AXSTsmse8uA',
                                          consumer_secret: 'UWF5By-IWGddqeHF1I3hebc34-8',
                                          token: 'zmxzUteI29OoVwq4XXpEPmz2iMlc3cI4',
                                          token_secret: '7aC6qqfqVFA8REF2O3PIm7Jm7o8',
                                          ssl: true
                                        });
                                var express = require('express');
                                var path = require('path');
                                var favicon = require('serve-favicon');
                                var logger = require('morgan');
                                var cookieParser = require('cookie-parser');
                                var bodyParser = require('body-parser');
                                var http = require('http');
                                var session = require('express-session');
                                var fs = require('fs');
                                var maps = require('./routes/maps');
                                var app = express();
                                // all environments
                                app.set('view engine', 'ejs');
                                app.set('views', path.join(__dirname, 'views'));
                                app.set('port', process.env.PORT || 4311);

                                //app.use(express.favicon());

                                app.use(session({
                                    secret: 'ssshhhhh'
                                }));
                                var sess;

                                app.use(logger('dev'));
                                app.use(bodyParser.json());
                                app.use(bodyParser.urlencoded({
                                    extended: true,
                                    keepExtensions: true, uploadDir:'/Users/akshay/Documents/workspace/nodeProj/public/images' 
                                }));
                                app.use(cookieParser());
                                app.use(express.static(path.join(__dirname, 'public')));
                               
                                app.use(session({
                                    cookie: {
                                        maxAge: 60000
                                    }
                                }));



                                        yelp.search({term: "hospital", location: "san jose"}, function(error, data) {
                                          console.log(error);
                                          console.log(data);
                                        });


                                
                                app.get('/yelp', maps.yelpData);
                                app.get('/', maps.getHome);
                                app.get('/map', maps.getMap);
                                app.get('/direction',maps.getDirection);
                                app.get('/hospitals', maps.getHospitals);
                                //catch 404 and forward to error handler
                                app.use(function(req, res, next) {
                                    var err = new Error('Not Found');
                                    err.status = 404;
                                    next(err);
                                });

                      
                                if (app.get('env') === 'development') {
                                    app.use(function(err, req, res, next) {
                                        res.status(err.status || 500);
                                        res.render('error', {
                                            message: err.message,
                                            error: err
                                        });
                                    });
                                }

                                // production error handler
                                // no stacktraces leaked to user
                                app.use(function(err, req, res, next) {
                                    res.status(err.status || 500);
                                    res.render('error', {
                                        message: err.message,
                                        error: {}
                                    });
                                });


                                http.createServer(app).listen(app.get('port'), function() {
                                    console.log('Express server listening on port ' + app.get('port'));
                                });


                             

                                module.exports = app;
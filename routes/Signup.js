(function(){
  "use strict";

  var _ = require("underscore"),
      handleGet,
      handlePost,
      handler, dispatch,

      ControllerClass = require("../controllers/Signup.js");

  handleGet = function(req, res, next){
    var control = new ControllerClass();

    var params = {};

    control.renderView(res, params);
  };

  handlePost = function(req, res, next){
    console.log('getting a signup post request with request body:')
    console.log(req.body);

    var userData = {
      email: req.body.email,
      password: req.body.password,
      firstName: (_.has(req.body, "firstName")) ? req.body.firstName : "",
      lastName: (_.has(req.body, "lastName")) ? req.body.lastName : "",
      deviceId: (_.has(req.body, "deviceId")) ? req.body.deviceId : null
    };
    var control = new ControllerClass(req._schemas, req._conf);
    control.createUser(userData, function(err, user){
      if (err){
        return res.json(500, {err: err});
      }

      return res.json({err: 0, user: user});
    });
  };
  
  dispatch = {GET: handleGet, POST: handlePost};
  handler = function(req, res, next){
    if (_.has(dispatch, req.method)){
      return dispatch[req.method](req, res, next);
    }

    return next(405);
  };
  
  module.exports = handler;
}());

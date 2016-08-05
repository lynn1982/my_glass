/*!
 * todo - app.js
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */
require('./patch');
var connect = require('connect');
var render = require('connect-render');
var urlrouter = require('urlrouter');
var config = require('./config');
var Bearcat = require('bearcat');

var app = connect();

process.env.BEARCAT_DEBUG = true;

app.use('/public', connect.static(__dirname + '/public', {
  maxAge: 3600000 * 24 * 30
}));
app.use(connect.cookieParser());
app.use(connect.query());
app.use(connect.bodyParser());
app.use(connect.session({
  secret: config.session_secret
}));
// app.use(connect.csrf());
app.use(render({
  root: __dirname + '/views',
  layout: 'layout.html',
  cache: config.debug, // `false` for debug
  helpers: {
    config: config,
    _csrf: function(req, res) {
      return req.session._csrf;
    }
  }
}));

var contextPath = require.resolve('./context.json');

var bearcat = Bearcat.createApp([contextPath]);

bearcat.start(function() {
  /**
   * Routing
   */
  // var todoController = bearcat.getBean('todoController');

  /**
   * Routing
   */
  var router = urlrouter(function(app) {
    app.get('/', bearcat.getRoute("todoController", "index"));
    app.post('/todo/new', bearcat.getRoute("todoController", "new"));
    app.get('/todo/:id', bearcat.getRoute("todoController", "view"));
    app.get('/todo/:id/edit', bearcat.getRoute("todoController", "edit"));
    app.post('/todo/:id/edit', bearcat.getRoute("todoController", "save"));
    app.get('/todo/:id/delete', bearcat.getRoute("todoController", "delete"));
    app.get('/todo/:id/finish', bearcat.getRoute("todoController", "finish"));
  });
  app.use(router);

  // start app
  app.listen(config.port);
  console.log('Server start on ' + config.port);
});
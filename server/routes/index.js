'use strict';

/**
 * AWDG
 *
 * @copyright Atlanta Web Design Group 2014
 *
 * Index Routes
 */

module.exports = function(app) {
    app.get('/', function(req, res) {
         res.render('home/index');
    });

};
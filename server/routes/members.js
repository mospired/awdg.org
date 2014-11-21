'use strict';

/**
 * AWDG
 *
 * @copyright Atlanta Web Design Group 2014
 *
 * Member Routes
 */

module.exports = function(app) {
    app.get('/members', function(req, res) {
         res.render('members/index');
    });

};
'use strict';

/**
 * AWDG
 *
 * @copyright Atlanta Web Design Group 2014
 *
 * Event Routes
 */

module.exports = function(app) {
    app.get('/events', function(req, res) {
        res.render('events/list',{module:'events-list'});
    });

};
'use strict';

module.exports = function(app)
{
    var jsonku = require('./controller');

    app.route('/')       
          .get(jsonku.index);
          
    app.route('/tampil/')
          .get(jsonku.select_all)

    app.route('/tampil/:id')
          .get(jsonku.select_id)

    app.route('/add')
          .post(jsonku.insert)

    app.route('/update')
          .put(jsonku.update)

    app.route('/delete')
          .delete(jsonku.delete)
}
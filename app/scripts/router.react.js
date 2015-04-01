'use strict';

define([
    'underscore',
    'backbone',
    'react',
	'jsx!component/IndexComponent.react'
],function(_, Backbone, React, IndexComponent){
    var AppRouter = Backbone.Router.extend({
        index: function(){
            React.render( <IndexComponent />, document.getElementById('main_content'));
        },
        initialize: function() {
            var self = this,
                routes = [
                    [ /^.*$/, 'index' ]
                ];

            _.each(routes, function(route) {
                self.route.apply(self, route);
            });
            Backbone.history.start();
        }
    });

    return AppRouter;
});

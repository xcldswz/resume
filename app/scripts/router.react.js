'use strict';

define([
    'react-router',
    'react',
	'jsx!component/IndexComponent.react'
],function(Router, React, IndexComponent){
	var Route = Router.Route, AppRouter;

	var DefaultRoute = Router.DefaultRoute;

	var routes = (
		<Route handler={IndexComponent} path="/">
			<DefaultRoute handler={IndexComponent} />
		</Route>
	);

	AppRouter = function(){};
	AppRouter.prototype.init = function () {
		Router.run(routes, Router.HistoryLocation, function (Handler) {
			React.render(<Handler/>, document.getElementById('main_content'));
		});
	};

	return AppRouter;
});

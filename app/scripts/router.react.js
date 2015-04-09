'use strict';

define([
    'react-router',
    'react',
	'jsx!component/IndexComponent.react',
	'jsx!component/ExampleComponent.react'
],function(Router, React, IndexComponent, ExampleComponent){
	var AppRouter;

	var DefaultRoute = Router.DefaultRoute;
	var Link = Router.Link;
	var Route = Router.Route;
	var RouteHandler = Router.RouteHandler;

	var App = React.createClass({
		render: function () {
			return (
				<div>
					<div className="header">
						<header>
							<ul>
								<li><Link to="app" data-i18n="nav.home">Home</Link></li>
								<li><Link to="example">Example</Link></li>
							</ul>
						</header>
					</div>
					<RouteHandler/>
				</div>
			);
		}
	});
	var routes = (
		<Route name="app" path="/" handler={App}>
			<Route name="example" handler={ExampleComponent}/>
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

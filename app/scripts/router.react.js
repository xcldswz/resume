'use strict';

define([
    'react-router',
    'react',
	'jsx!component/IndexComponent.react',
	'jsx!component/CalendarComponent.react',
	'jsx!component/InboxComponent.react'
],function(Router, React, IndexComponent, CalendarComponent, InboxComponent){
	var AppRouter;

	var DefaultRoute = Router.DefaultRoute;
	var Link = Router.Link;
	var Route = Router.Route;
	var RouteHandler = Router.RouteHandler;

	var App = React.createClass({
		render: function () {
			return (
				<div className="header">
					<header>
						<ul>
							<li><Link to="app">Dashboard</Link></li>
							<li><Link to="inbox">Inbox</Link></li>
							<li><Link to="calendar">Calendar</Link></li>
						</ul>
					</header>
					<RouteHandler/>
				</div>
			);
		}
	});
	var routes = (
		<Route name="app" path="/" handler={App}>
			<Route name="inbox" handler={InboxComponent}/>
			<Route name="calendar" handler={CalendarComponent}/>
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

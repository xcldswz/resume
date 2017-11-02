'use strict';

define([
    'react-router',
    'react',
	'jsx!component/IndexComponent.react',
	'jsx!component/ExampleComponent.react',
	'jsx!component/LanguageComponent.react',
	'i18n!:translation'
],function(Router, React, IndexComponent, ExampleComponent, LanguageComponent, i18n){
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
						<LanguageComponent />
						<header>
							<ul>
								<li><Link to="app">{i18n.t('nav.home')}</Link></li>
								<li><Link to="example">{i18n.t('nav.example')}</Link></li>
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

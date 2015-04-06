'use strict';

define([
	'react',
	'text!../data/resume.md',
	'showdown',
	'jsPDF',
	'jquery',
	'table',
	'prettify',
	'star',
	'icons'
], function (React, Resume, Showdown, jsPDF, $) {
	var converter = new Showdown.converter({ extensions: ['table', 'prettify', 'star', 'icons'] });

	var lib = [
		{ name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
		{ name: 'AngularJS', url: 'https://angularjs.org/'},
		{ name: 'jQuery', url: 'http://jquery.com/'},
		{ name: 'Prototype', url: 'http://www.prototypejs.org/'},
		{ name: 'React', url: 'http://facebook.github.io/react/'},
		{ name: 'Ember', url: 'http://emberjs.com/'},
		{ name: 'Knockout.js', url: 'http://knockoutjs.com/'},
		{ name: 'Dojo', url: 'http://dojotoolkit.org/'},
		{ name: 'Mootools', url: 'http://mootools.net/'},
		{ name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
		{ name: 'Lodash', url: 'http://lodash.com/'},
		{ name: 'Moment', url: 'http://momentjs.com/'},
		{ name: 'Express', url: 'http://expressjs.com/'},
		{ name: 'Koa', url: 'http://koajs.com/'}
	];

	var ExampleComponent = React.createClass({
		onButtonClicked: function () {
			var doc = new jsPDF();
			var elementHandler = {
				'#main_content': function (element, renderer) {
					return true;
				}
			};
			var source = $('#main_content').html();
			doc.fromHTML(
				source,
				15,
				15,
				{
					'width': 180,'elementHandlers': elementHandler
				});
			doc.save("dataurlnewwindow.pdf");
		},
		getInitialState: function () {
			return {searchString: ''};
		},

		handleChange: function (e) {
			this.setState({searchString: e.target.value});
		},
		render: function () {
			var libraries = lib,
				searchString = this.state.searchString.trim().toLowerCase();

			if (searchString.length > 0) {
				libraries = libraries.filter(function (l) {
					return l.name.toLowerCase().match(searchString);
				});
			}

			return (
				<div className="pure-g">
					<div className="pure-u-3 pure-u-md-2-3 example" >
						<input type="button" className="pure-button pure-button-primary" onClick={this.onButtonClicked} value="export as pdf"/>
						<input type='text' value={this.state.searchString} onChange={this.handleChange} placeholder='Type here'/>
						<ul>
							{
								libraries.map(function (l) {
									return <li>{l.name}
										<a href={l.url}>{l.url}</a>
									</li>;
								})
							}
						</ul>
						<div dangerouslySetInnerHTML={{ __html: converter.makeHtml(Resume) }}/>
					</div>
				</div>
			);
		}
	});

	return ExampleComponent;
});

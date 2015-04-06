'use strict';

define([
	'react',
	'text!../data/resume.md',
	'showdown',
	'jsPDF',
	'jquery',
	'jsx!component/SearchComponent.react',
	'table',
	'prettify',
	'star',
	'icons'
], function (React, Resume, Showdown, jsPDF, $, SearchComponent) {
	var converter, html, ExampleComponent;
	converter = new Showdown.converter({extensions: ['table', 'prettify', 'star', 'icons']});
	html = converter.makeHtml(Resume);

	ExampleComponent = React.createClass({
		onButtonClicked: function () {
			var doc, elementHandler, source;
			doc = new jsPDF();
			elementHandler = {
				'#main_content': function () {
					return true;
				}
			};
			source = $('#main_content').html();
			doc.fromHTML(source, 15, 15,
				{
					'width': 180, 'elementHandlers': elementHandler
				});
			doc.save("resume.pdf");
		},
		render: function () {
			return (
				<div className="pure-g">
					<div className="pure-u-3 pure-u-md-2-3 example">
						<input type="button" className="pure-button pure-button-primary" onClick={this.onButtonClicked}
						       value="export as pdf"/>
						<SearchComponent html={html} />
						<div dangerouslySetInnerHTML={{ __html: html }}/>
					</div>
				</div>
			);
		}
	});

	return ExampleComponent;
});

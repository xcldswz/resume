'use strict';

define([
	'react',
	'text!../data/resume.md',
	'showdown',
	'jsPDF',
	'jquery',
	'jsx!component/SearchComponent.react',
	'jsx!component/ExportPDFComponent.react',
	'table',
	'prettify',
	'star',
	'icons'
], function (React, Resume, Showdown, jsPDF, $, SearchComponent, ExportPDFComponent) {
	var converter, html, ExampleComponent;
	converter = new Showdown.converter({extensions: ['table', 'prettify', 'star', 'icons']});
	html = converter.makeHtml(Resume);

	ExampleComponent = React.createClass({
		render: function () {
			var id = '#resume';
			return (
				<div className="pure-g">
					<div className="pure-u-3 pure-u-md-2-3 example">
						<ExportPDFComponent id={id} />
						<SearchComponent html={html} />
						<div id='resume' dangerouslySetInnerHTML={{ __html: html }}/>
					</div>
				</div>
			);
		}
	});

	return ExampleComponent;
});

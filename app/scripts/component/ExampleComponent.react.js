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
	var doc = new jsPDF();
	var elementHandler = {
		'#main_content': function (element, renderer) {
			return true;
		}
	};
	var source = $('#main_content');
	doc.fromHTML(
		source,
		15,
		15,
		{
			'width': 180,'elementHandlers': elementHandler
		});

	doc.save("dataurlnewwindow.pdf");
	var ExampleComponent = React.createClass({
		render: function () {
			return (
				<div className="pure-g">
					<div className="pure-u-3 pure-u-md-2-3 example" >
						<div dangerouslySetInnerHTML={{ __html: converter.makeHtml(Resume) }}/>
					</div>
				</div>
			);
		}
	});

	return ExampleComponent;
});

'use strict';

define([
	'react',
	'jquery',
	'jsPDF'
], function (React, $, jsPDF) {
	var exportPDFComponent = React.createClass({
		onButtonClicked: function () {
			var doc, elementHandler, source;
			doc = new jsPDF();
			elementHandler = {};
			source = $(this.props.id).html();
			doc.fromHTML(source, 15, 15,
				{
					'width': 180, 'elementHandlers': elementHandler
				});
			doc.save("resume.pdf");
		},
		render: function () {
			return (
				<span>
					<input type="button" className="pure-button pure-button-primary" onClick={this.onButtonClicked} value="export as pdf"/>
				</span>
			);
		}
	});

	return exportPDFComponent;
});

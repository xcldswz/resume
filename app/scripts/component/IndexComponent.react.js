'use strict';

define([
	'react',
	'showdown',
	'text!../data/example.md',
	'jquery',
	'jsPDF',
	'table',
	'prettify',
	'star',
	'icons'
], function (React, Showdown, example, $, jsPDF) {
	var converter = new Showdown.converter({ extensions: ['table', 'prettify', 'star', 'icons'] });

	var IndexComponent = React.createClass({
		getInitialState: function () {
			return {value: example};
		},
		handleChange: function () {
			this.setState({value: this.refs.textarea.getDOMNode().value});
		},
		onButtonClicked: function () {
			var doc = new jsPDF();
			var elementHandler = {
				'#main_content': function (element, renderer) {
					return true;
				}
			};
			var source = $('#main_content .resume').html();
			doc.fromHTML(
				source,
				15,
				15,
				{
					'width': 180,'elementHandlers': elementHandler
				});
			doc.save("dataurlnewwindow.pdf");
		},
		render: function () {
			return (
				<div>
					<div className="pure-u-1 pure-u-md-1-2">
						<input type="button" className="pure-button pure-button-primary" onClick={this.onButtonClicked} value="export as pdf"/>
						<h3>Input</h3>
						<textarea
							onChange={this.handleChange}
							ref="textarea"
							defaultValue={this.state.value}/>
					</div>
					<div className="pure-u-1 pure-u-md-1-2">
						<h3>Output</h3>
						<div className="resume"

							dangerouslySetInnerHTML={{
								__html: converter.makeHtml(this.state.value)
							}}
							/>
					</div>
				</div>
			);
		}
	});

	return IndexComponent;
});

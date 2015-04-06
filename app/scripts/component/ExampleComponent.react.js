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
		getInitialState: function () {
			return {searchString: ''};
		},

		handleChange: function (e) {
			this.setState({searchString: e.target.value});
		},
		render: function () {
			var libraries, searchString;
			libraries = [];
			$.each($(html).find('ol li'), function (index, list) {
				libraries.push({name: $(list).text()});
			});
			searchString = this.state.searchString.trim().toLowerCase();

			if (searchString.length > 0) {
				libraries = libraries.filter(function (l) {
					return l.name.toLowerCase().match(searchString);
				});
			}

			return (
				<div className="pure-g">
					<div className="pure-u-3 pure-u-md-2-3 example">
						<input type="button" className="pure-button pure-button-primary" onClick={this.onButtonClicked}
						       value="export as pdf"/>
						Search:
						<input type='text' value={this.state.searchString} onChange={this.handleChange}
						       placeholder='Type here'/>

						<p><strong>Keywords</strong>:
							{
								libraries.map(function (l) {
									return <span>{l.name},</span>;
								})
							}
						</p>

						<div dangerouslySetInnerHTML={{ __html: html }}/>
					</div>
				</div>
			);
		}
	});

	return ExampleComponent;
});

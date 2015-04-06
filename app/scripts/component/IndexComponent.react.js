'use strict';

define([
	'react',
	'showdown',
	'text!../data/example.md',
	'jsx!component/SearchComponent.react',
	'jsx!component/ExportPDFComponent.react',
	'table',
	'prettify',
	'star',
	'icons'
], function (React, Showdown, example, SearchComponent, ExportPDFComponent) {
	var converter = new Showdown.converter({ extensions: ['table', 'prettify', 'star', 'icons'] });

	var IndexComponent = React.createClass({
		getInitialState: function () {
			return {value: example};
		},
		handleChange: function () {
			this.setState({value: this.refs.textarea.getDOMNode().value});
		},
		render: function () {
			var html = converter.makeHtml(this.state.value);
			return (
				<div>
					<div className="pure-u-1 pure-u-md-1-2">
						<ExportPDFComponent id={'resume'} />
						<SearchComponent html={html} />
						<h3>Input</h3>
						<textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value}/>
					</div>
					<div className="pure-u-1 pure-u-md-1-2">
						<h3>Output</h3>
						<div className="resume" id="resume" dangerouslySetInnerHTML={{ __html:  html }} />
					</div>
				</div>
			);
		}
	});

	return IndexComponent;
});

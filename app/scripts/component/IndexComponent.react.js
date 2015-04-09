'use strict';

define([
	'react',
	'showdown',
	'jquery',
	'text!../data/example.md',
	'jsx!component/SearchComponent.react',
	'jsx!component/ExportPDFComponent.react',
	'table',
	'prettify',
	'star',
	'icons'
], function (React, Showdown, $, example, SearchComponent, ExportPDFComponent) {
	var IndexComponent;
	var converter = new Showdown.converter({ extensions: ['table', 'prettify', 'star', 'icons'] });

	IndexComponent = React.createClass({
		getInitialState: function () {
			var save = localStorage.getItem("markdown-editor-storage");
			if(save !== undefined && save !== null && save != '') {
				console.log(save);
				return {value: save};
			}
			return {value: example};
		},
		handleChange: function () {
			this.setState({value: this.refs.textarea.getDOMNode().value});
		},
		hiddenOthers: function () {
			$('.input').hide();
			$('.top').hide();
			$('.header').hide();
			$('.output h3').hide();
			localStorage.setItem("markdown-editor-storage", this.refs.textarea.getDOMNode().value);
		},
		render: function () {
			var html = converter.makeHtml(this.state.value);
			return (
				<div>
					<div className="pure-u-1 top">
						<ExportPDFComponent id={'resume'}/> &nbsp;
						<button className="pure-button pure-button-primary" onClick={this.hiddenOthers}>
							<i className="fa fa-arrow-left"></i> Only Output
						</button>
						<SearchComponent html={html}/>
					</div>
					<div className="pure-u-1 pure-u-md-1-2 input">
						<h3>Input</h3>
						<textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value}/>
					</div>
					<div className="pure-u-1 pure-u-md-1-2 output">
						<h3>Output</h3>

						<div className="resume" id="resume" dangerouslySetInnerHTML={{ __html:  html }}/>
					</div>
				</div>
			);
		}
	});

	return IndexComponent;
});

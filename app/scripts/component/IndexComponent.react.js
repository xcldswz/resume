'use strict';

define([
	'react',
	'showdown'
], function (React, Showdown) {
	var converter = new Showdown.converter();

	var IndexComponent = React.createClass({
		getInitialState: function () {
			return {value: 'Type some *markdown* here!'};
		},
		handleChange: function () {
			this.setState({value: this.refs.textarea.getDOMNode().value});
		},
		render: function () {
			return (
				<div>
					<div className="pure-u-1 pure-u-md-1-2">
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

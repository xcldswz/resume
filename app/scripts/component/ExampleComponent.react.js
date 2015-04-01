'use strict';

define([
	'react',
	'text!../data/resume.md',
	'showdown'
], function (React, Resume, Showdown) {
	var converter = new Showdown.converter();

	var ExampleComponent = React.createClass({
		render: function () {
			return (
				<div className="pure-g">
					<div className="pure-u-1 pure-u-md-1-1 resume" >
						<div dangerouslySetInnerHTML={{ __html: converter.makeHtml(Resume) }}/>
					</div>
				</div>
			);
		}
	});

	return ExampleComponent;
});

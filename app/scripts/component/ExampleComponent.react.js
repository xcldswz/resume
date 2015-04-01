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
					<div className="pure-u-3 pure-u-md-2-3 example" >
						<div dangerouslySetInnerHTML={{ __html: converter.makeHtml(Resume) }}/>
					</div>
				</div>
			);
		}
	});

	return ExampleComponent;
});

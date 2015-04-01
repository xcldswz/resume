'use strict';

define([
	'react',
	'text!../data/resume.md',
	'showdown',
	'table',
	'prettify',
	'resume'
], function (React, Resume, Showdown) {
	var converter = new Showdown.converter({ extensions: ['table', 'prettify', 'resume'] });

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

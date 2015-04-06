'use strict';

define([
	'react',
	'jquery'
], function (React, $) {
	var SearchComponent = React.createClass({
		getInitialState: function () {
			return {searchString: ''};
		},
		handleChange: function (e) {
			this.setState({searchString: e.target.value});
		},
		render: function () {
			var libraries, searchString;

			libraries = [];
			$.each($(this.props.html).find('ol li'), function (index, list) {
				libraries.push({name: $(list).text()});
			});
			searchString = this.state.searchString.trim().toLowerCase();

			if (searchString.length > 0) {
				libraries = libraries.filter(function (l) {
					return l.name.toLowerCase().match(searchString);
				});
			}

			return (
					<span>
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
					</span>
			);
		}
	});

	return SearchComponent;
});

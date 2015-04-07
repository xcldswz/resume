'use strict';

define([
	'react',
	'jquery'
], function (React, $) {
	function getListsName(ol_list) {
		var libraries = [];
		$.each(ol_list, function (index, list) {
			libraries.push({name: $(list).text()});
		});
		return libraries;
	}
	
	var SearchComponent = React.createClass({
		getInitialState: function () {
			return {searchString: ''};
		},
		handleChange: function (e) {
			this.setState({searchString: e.target.value});
		},
		render: function () {
			var libraries, searchString;

			libraries = getListsName($(this.props.html).find('ol li'));
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

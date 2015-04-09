'use strict';

define([
	'react',
	'i18n!:translation'
], function (React, i18n) {
	var LanguageComponent;
	LanguageComponent = React.createClass({
		switchEn: function () {
			i18n.setLng('en');
		},
		switchCn: function () {
			i18n.setLng('zh');
		},
		render: function () {
			return (
				<div className="language" role="group">
					<button type="button" className="pure-button pure-button-primary" onClick={this.switchEn.bind(null, this)}>English</button>
					<button type="button" className="pure-button pure-button-primary" onClick={this.switchCn.bind(null, this)}>中文</button>
				</div>
			)
		}
	});

	return LanguageComponent;
});

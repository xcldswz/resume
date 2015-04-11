'use strict';

require.config({
	map: {
		"*": {
			i18n: "vendor/i18next"
		}
	},
	paths: {
		jquery: 'vendor/zepto.min',

		react: 'vendor/react-with-addons.min',
		'react-router': 'vendor/ReactRouter.min',
		"JSXTransformer": 'vendor/JSXTransformer',
		jsx: 'vendor/jsx',

		jsPDF: 'vendor/jspdf.min',

		text: 'vendor/text',
		json: 'vendor/json',
		i18next: 'vendor/i18next.amd.min',

		showdown: 'vendor/Showdown',
		table: 'vendor/extensions/table',
		prettify: 'vendor/extensions/prettify',
		star: 'vendor/extensions/star',
		icons: 'vendor/extensions/icons'
	},
	shim: {
		table: ["showdown"],
		prettify: ["showdown"],
		star: ["showdown"],
		icons: ["showdown"],
		"react-router": {
			exports: "ReactRouter",
			deps: ['react'],
			init: function (React) {
				this.React = React;
			}
		},
		jquery: {
			exports: '$'
		}
	},
	i18next: {
		ns: "translation",
		fallbackLng: "zh-CN",
		detectLngQS: "locale",
		supportedLngs: {
			zh: ['translation'],
			en: ['translation'],
			'zh-cn': ['translation']
		}
	}
});

require([
	'jsx!app.react'
], function (App) {
	App.initialize();
});

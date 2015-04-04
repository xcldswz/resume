'use strict';

require.config({
    paths: {
        jquery: 'vendor/zepto.min',

        react: 'vendor/react-with-addons.min',
        'react-router': 'vendor/ReactRouter.min',
        "JSXTransformer": 'vendor/JSXTransformer',
        jsx: 'vendor/jsx',

        jsPDF: 'vendor/jspdf.min',

        text: 'vendor/text',
        json: 'vendor/json',
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
		    init: function(React) {
			    this.React = React;
		    }
	    },
	    jquery: {
		    exports: '$'
	    }
    }
});

require([
    'jsx!app.react'
], function (App) {
    App.initialize();
});

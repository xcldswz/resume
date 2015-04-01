'use strict';

require.config({
    paths: {
        jquery: 'vendor/zepto.min',

        react: 'vendor/react-with-addons.min',
        'react-router': 'vendor/ReactRouter.min',
        "JSXTransformer": 'vendor/JSXTransformer',
        jsx: 'vendor/jsx',

        text: 'vendor/text',
        json: 'vendor/json',
        showdown: 'vendor/showdown'
    },
    shim: {
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

'use strict';

require.config({
    paths: {
        jquery: 'vendor/jquery.min',

        react: 'vendor/react-with-addons.min',
        "JSXTransformer": 'vendor/JSXTransformer',
        jsx: 'vendor/jsx',
        'react.backbone': 'vendor/react.backbone',

        backbone: 'vendor/backbone',
        underscore: 'vendor/lodash.min',

        text: 'vendor/text',
        json: 'vendor/json',
        mdown: 'vendor/mdown',
        markdownConverter: 'vendor/Markdown.Converter'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
});

require([
    'backbone', 'jsx!app.react'
], function (Backbone, App) {
    App.initialize();
});

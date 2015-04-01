'use strict';

define([
    'backbone', 'react', 'jsx!router.react', 'react.backbone'
], function (Backbone, React, Router, ReactBackbone) {

    var initialize = function () {
        new Router();
    };

    return {
        initialize: initialize
    };
});

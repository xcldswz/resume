'use strict';

define([
    'react', 'jsx!router.react'
], function (React, Router) {

    var initialize = function () {
        var router = new Router();
	    router.init();
    };

    return {
        initialize: initialize
    };
});

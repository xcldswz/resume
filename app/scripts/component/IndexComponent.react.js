'use strict';

define([
    'react'
],function(React, about){
    var IndexComponent = React.createClass({
        render : function() {
            this.info = about;
            return (<div>Hello, World</div>);
        }
    });

    return IndexComponent;
});

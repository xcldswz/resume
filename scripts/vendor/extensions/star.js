//
//  A showdown extension to add star for Resume
//  hints to showdown's HTML output.
//

(function(){

    var star = function(converter) {
        return [
            { type: 'output', filter: function(source){
                return source.replace(/(<level([0-9]*\.?[0-9]+)>)/gi, function(match, isLevel) {
                    var level = match.match(/<level([0-9]*\.?[0-9]+)>/i)[1];
                    level = level.replace(".", "-");

                    if (isLevel) {
                        return '<i class="star-icon icon-star star-' + level + '"></i>';
                    }
                });
            }}
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.star = star; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = star;

}());

//
//  A showdown extension to add star for Resume
//  hints to showdown's HTML output.
//

(function(){

    var resume = function(converter) {
        return [
            { type: 'output', filter: function(source){
                return source.replace(/(<level\d>)/gi, function(match, star) {
                    var level = match.match(/<level(\d)>/i)[1];

                    if (star) {
                        return '<i class="star-icon icon-star star-' + level + '"></i>';
                    } else {
                        return '<i class="star-icon icon-star star-1"></i>';
                    }
                });
            }}
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.resume = resume; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = resume;

}());

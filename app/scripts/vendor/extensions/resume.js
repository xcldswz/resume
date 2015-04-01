//
//  A showdown extension to add star for Resume
//  hints to showdown's HTML output.
//

(function(){

    var resume = function(converter) {
        return [
            { type: 'output', filter: function(source){

                return source.replace(/(<level>)/gi, function(match, star) {
                    if (star) {
                        return '<span class="star">';
                    } else {
                        return '<span class="star">';
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

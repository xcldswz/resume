//
//  Github Extension (WIP)
//  ~~strike-through~~   ->  <del>strike-through</del>
//

(function(){
    var icons = function(converter) {
        return [
            { type: 'output', filter: function(source){
                return source.replace(/<icon-(\w+)>/gi, function(match, isLevel) {
                    var type = match.match(/<icon-(\w+)>/i)[1];

                    if (isLevel) {
                        return '<i class="fa fa-' + type + '"></i>';
                    }
                });
            }}
        ];
    };

    // Client-side export
    if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.icons = icons; }
    // Server-side export
    if (typeof module !== 'undefined') module.exports = icons;
}());

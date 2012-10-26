// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.
window.jQuery || document.write('<script src="js/vendor/jquery-1.8.2.min.js"><\/script>');
document.write('<script src="js/vendor/bootstrap.min.js"><\/script>');
document.write('<script src="js/vendor/meny.min.js"><\/script>');
document.write('<script src="js/main.coffee" type="text/coffeescript"><\/script>');

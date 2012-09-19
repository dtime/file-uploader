/*global jQuery*/
(function ($) {
    var methods;

    methods = {
        init : function (options) {
            $.extend({
                debug: false,
                endpoint: '/server/upload'
            }, options);
        }
    };

    $.fn.fineuploader = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  methodOrOptions + ' does not exist on jQuery.fineuploader');
        }
    };
}(jQuery));

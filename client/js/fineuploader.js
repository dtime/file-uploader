/*global jQuery*/
(function($) {
    "use strict";

    var methods, xhrUploader, settings;

    methods = {
        init : function(options) {
            settings = $.extend({
                debug: false,
                endpoint: '/server/upload'
            }, options);
        }
    };

    xhrUploader =  {
        upload: function(id, params) {

        }
    };

    $.fn.fineuploader = function(methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  methodOrOptions + ' does not exist on jQuery.fineuploader');
        }
    };
}(jQuery));

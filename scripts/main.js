requirejs.config({

    paths: {
        backbone: "vendor/backbone/backbone",
        jquery: "vendor/jquery/dist/jquery",


        marionette: "vendor/backbone.marionette/lib/backbone.marionette",

        underscore: "vendor/underscore/underscore",
        localstorage: "vendor/Backbone.localStorage/backbone.localStorage"
    },

    shim: {
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        marionette: {
            deps: ["backbone"],
            exports: "Marionette"
        },
        "jquery-ui": ["vendor/jquery-ui/jquery-ui"],
        localstorage: ["backbone"]
    }
});

require(["app"], function (ReltioManager) {
    ReltioManager.start();
});
require(["app", "config/entities/contact"], function (ReltioManager) {
    var fetchingContacts = ReltioManager.request("contact:entities");
    $.when(fetchingContacts).done(function (contacts) {
        console.log(contacts);
    });
});
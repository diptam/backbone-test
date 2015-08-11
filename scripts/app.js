define(["marionette", "config/marionette/regions/dialog"], function (Marionette) {
    var ReltioManager = new Marionette.Application();

    ReltioManager.addRegions({
        headerRegion: "#header-region",
        mainRegion: "#main-region",
        dialogRegion: Marionette.Region.Dialog.extend({
            el: "#dialog-region"
        })
    });

    ReltioManager.navigate = function (route, options) {
        options || (options = {});
        Backbone.history.navigate(route, options);
    };

    ReltioManager.getCurrentRoute = function () {
        return Backbone.history.fragment
    };

    ReltioManager.on("initialize:after", function () {
        console.log("Contact Manager has started");
        if (Backbone.history) {
            Backbone.history.start();

            if (this.getCurrentRoute() === "") {
                ReltioManager.trigger("contacts:list");
            }
        }
    });

    return ReltioManager;
});
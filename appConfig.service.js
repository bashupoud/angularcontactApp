

(function () {
    var app = angular.module("ContactApp");

    //Service service
    app.service("AppDataServiceSvc", function (AppNameSvc) {
        //var this={};
        this.name = AppNameSvc;
        this.author = "Bashu";
        this.builtDate = new Date().toDateString;
    }
    );//new AppConfig(); call the service in constructor mode
})();
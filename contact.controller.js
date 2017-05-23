
(function () {
    var app = angular.module("ContactApp");
    app.controller("ContactCtrl", ContactCtrl);

    function ContactCtrl(CotactdataSvc) {
        this.contacts = CotactdataSvc.contacts;


        this.selectContacts = function (index) {
            this.selectedContact = this.contacts[index]

        }

    }
})();
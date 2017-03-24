var exec = require('cordova/exec');

var iCloudDocument = {

    check: function (fileName) {
        exec(successCallback, erroCallback, 'echo', []);
    },

    list: function () {
        exec(successCallback, errorCallback, 'echo', []);
    },

    upload: function (fileName) {
        exec(successCallback, errorCallback, 'echo', []);
    },

    retrieve: function () {
        exec(successCallback, errorCallback, 'echo', []);
    }
};

module.exports = iCloudDocument;
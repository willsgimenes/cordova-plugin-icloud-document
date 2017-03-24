var exec = require('cordova/exec');

var iCloudDocument = {

    check: function (fileName) {
        exec(successCallback, erroCallback, 'checking', []);
    },

    list: function () {
        exec(successCallback, errorCallback, 'listing', []);
    },

    upload: function (fileName) {
        var args = fileName;
        exec(successCallback, errorCallback, 'uploading', [args]);
    },

    retrieve: function () {
        exec(successCallback, errorCallback, 'retrieving', []);
    }
};

module.exports = iCloudDocument;
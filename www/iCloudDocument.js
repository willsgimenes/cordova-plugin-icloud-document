module.exports = {

    /**
     * test for icloud connectivity
     * @param  {string} name            icloud name
     * @param  {function} successCallback success callback function
     * @param  {function} errorCallback   error callback function
     * @return {boolean}                 connectivity status
     */
    test: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "iCLoudDocument", "test", [name]);
    },

    /**
     * check icloud for a given document
     * @param  {string} fileName        document name
     * @param  {function} successCallback success callback function
     * @param  {function} errorCallback   error callback function
     * @return {object}                 object returned from icloud
     */
    checkFile: function (fileName,successCallback, errorCallback) {
    var args = fileName;
        cordova.exec(successCallback, errorCallback, "iCLoudDocument", "checkFile", [args]);
    },

    /**
     * setup icloud container for usage
     * @param  {string} name icloud name
     * @return {boolean}      boolean for container bootstrap
     */
    setContainer: function (name) {
        cordova.exec(null, null, "iCLoudDocument", "setContainer", [name]);
    },

    /**
     * lists documents from icloud container
     * @param  {fcuntion} successCallback success callback from documents listing
     * @param  {function} errorCallback   error callcack for documents listing
     * @return {object}                 list of documents
     */
    listDocuments: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "iCLoudDocument", "listDocuments", []);
    },

    /**
     * uploads document to icloud container
     * @param  {string} fileName        document fileName
     * @param  {function} successCallback success callback from uploads
     * @param  {function} errorCallback   error callback from uploads
     * @return {boolean}                 return of document uploadFile
     */
    uploadFile: function (fileName, successCallback, errorCallback) {
        var args = fileName;
        cordova.exec(successCallback, errorCallback, "iCLoudDocument", "uploadFile", [args]);
    },

    /**
     * retrieves document from icloud document
     * @param  {string} fileName        document file name
     * @param  {function} successCallback success callback from retrieve
     * @param  {function} errorCallback   error callback from retrieve
     * @return {boolean}                 return of retrieve function
     */
    retrieveFile: function (fileName, successCallback, errorCallback) {
        var args = fileName
        cordova.exec(successCallback, errorCallback, "iCLoudDocument", "retrieveFile", [args]);
    }
};

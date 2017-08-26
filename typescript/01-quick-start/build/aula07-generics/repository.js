"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repository = (function () {
    function Repository() {
    }
    Repository.prototype.insert = function (object) {
        console.log('Inserting...');
        return true;
    };
    Repository.prototype.update = function (object) {
        return true;
    };
    Repository.prototype.delete = function (id) {
        return null;
    };
    Repository.prototype.find = function (id) {
        return null;
    };
    Repository.prototype.findAll = function () {
        return [null];
    };
    return Repository;
}());
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map
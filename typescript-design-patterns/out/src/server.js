"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server = (function () {
    function Server() {
        this.store = {
            timestamp: 0,
            data: ''
        };
    }
    Server.prototype.getData = function (clientTimestamp) {
        if (clientTimestamp < this.store.timestamp) {
            return this.store;
        }
        else {
            return undefined;
        }
    };
    return Server;
}());

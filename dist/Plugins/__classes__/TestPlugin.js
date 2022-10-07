"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ManagerPlugin_1 = require("../../Utility/ManagerPlugin");
class TestPlugin extends ManagerPlugin_1.ManagerPlugin {
    constructor() {
        super();
        this.managerConfig = { trackingId: '' };
    }
    addTrackingCode(trackingHtml) {
        console.log(trackingHtml);
    }
    getTrackingCodeHTML() {
        return "This is some tracking code";
    }
    init(data) {
        this.managerConfig = data;
    }
}
exports.default = TestPlugin;

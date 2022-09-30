"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ManagerPlugin_1 = __importDefault(require("../../Utility/ManagerPlugin"));
class TestPlugin extends ManagerPlugin_1.default {
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

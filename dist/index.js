"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerPlugin = exports.AnalyticsPluginManager = exports.ManagerConfig = exports.AnalyticsEvent = void 0;
const ManagerConfig_1 = require("Configuration/ManagerConfig");
Object.defineProperty(exports, "ManagerConfig", { enumerable: true, get: function () { return ManagerConfig_1.ManagerConfig; } });
const AnalyticsEvent_1 = __importDefault(require("Objects/AnalyticsEvent"));
exports.AnalyticsEvent = AnalyticsEvent_1.default;
const AnalyticsPluginManager_1 = __importDefault(require("Plugins/AnalyticsPluginManager"));
exports.AnalyticsPluginManager = AnalyticsPluginManager_1.default;
const ManagerPlugin_1 = __importDefault(require("Utility/ManagerPlugin"));
exports.ManagerPlugin = ManagerPlugin_1.default;
exports.default = AnalyticsPluginManager_1.default;

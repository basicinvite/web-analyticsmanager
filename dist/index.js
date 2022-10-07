"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagerPlugin = exports.AnalyticsEventData = exports.AnalyticsEvent = exports.ManagerConfig = void 0;
const ManagerConfig_1 = require("Configuration/ManagerConfig");
Object.defineProperty(exports, "ManagerConfig", { enumerable: true, get: function () { return ManagerConfig_1.ManagerConfig; } });
const AnalyticsEvent_1 = require("Objects/AnalyticsEvent");
Object.defineProperty(exports, "AnalyticsEvent", { enumerable: true, get: function () { return AnalyticsEvent_1.AnalyticsEvent; } });
const AnalyticsEventData_1 = require("Objects/AnalyticsEventData");
Object.defineProperty(exports, "AnalyticsEventData", { enumerable: true, get: function () { return AnalyticsEventData_1.AnalyticsEventData; } });
const ManagerPlugin_1 = require("Utility/ManagerPlugin");
Object.defineProperty(exports, "ManagerPlugin", { enumerable: true, get: function () { return ManagerPlugin_1.ManagerPlugin; } });
const AnalyticsPluginManager_1 = __importDefault(require("Plugins/AnalyticsPluginManager"));
exports.default = AnalyticsPluginManager_1.default;

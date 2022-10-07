"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ManagerConfig_1 = require("Configuration/ManagerConfig");
const AnalyticsEvent_1 = require("Objects/AnalyticsEvent");
const AnalyticsEventData_1 = require("Objects/AnalyticsEventData");
const AnalyticsPluginManager_1 = __importDefault(require("Plugins/AnalyticsPluginManager"));
const ManagerPlugin_1 = require("Utility/ManagerPlugin");
const WebAnalyticsManager = {
    AnalyticsPluginManager: AnalyticsPluginManager_1.default,
    ManagerConfig: ManagerConfig_1.ManagerConfig,
    AnalyticsEvent: AnalyticsEvent_1.AnalyticsEvent,
    ManagerPlugin: ManagerPlugin_1.ManagerPlugin,
    AnalyticsEventData: AnalyticsEventData_1.AnalyticsEventData
};
exports.default = WebAnalyticsManager;

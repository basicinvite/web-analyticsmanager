"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class AnalyticsPluginManager {
    constructor() {
        this._pluginList = new Map();
    }
    _addPlugin(plugin, pluginContent) {
        this._pluginList.set(plugin.name, Object.assign(Object.assign({}, plugin), { instance: pluginContent }));
    }
    registerPlugin(plugin) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!plugin || !plugin.name || !plugin.packageName) {
                throw new Error(`Plugin not found`);
            }
            try {
                const pluginContent = yield Promise.resolve().then(() => __importStar(require(plugin.packageName)));
                this._addPlugin(plugin, pluginContent);
            }
            catch (error) {
                console.error(`Cannot load plugin - ${plugin.name}`);
            }
        });
    }
    loadPlugin(name) {
        const plugin = this._pluginList.get(name);
        if (!plugin) {
            throw new Error(`Plugin not found - ${name}`);
        }
        if (!plugin.instance || !plugin.instance.default) {
            throw new Error(`Plugin cannot be loaded - ${name}`);
        }
        plugin.instance.default.prototype.options = plugin.options;
        return Object.create(plugin === null || plugin === void 0 ? void 0 : plugin.instance.default.prototype);
    }
    listAllPlugins() {
        return this._pluginList;
    }
}
exports.default = AnalyticsPluginManager;

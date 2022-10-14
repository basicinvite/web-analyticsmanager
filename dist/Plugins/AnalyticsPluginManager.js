"use strict";
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
    _addPlugin(plugin) {
        this._pluginList.set(plugin.name, plugin);
    }
    registerPlugin(plugin) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!plugin || !plugin.name || !plugin.instance) {
                throw new Error(`Plugin not found`);
            }
            this._addPlugin(plugin);
        });
    }
    loadPlugin(name) {
        const plugin = this._pluginList.get(name);
        if (!plugin) {
            throw new Error(`Plugin not found - ${name}`);
        }
        if (!plugin.instance) {
            throw new Error(`Plugin cannot be loaded - ${name}`);
        }
        plugin.instance.prototype.options = plugin.options;
        return Object.create(plugin === null || plugin === void 0 ? void 0 : plugin.instance.prototype);
    }
    listAllPlugins() {
        return this._pluginList;
    }
}
exports.default = AnalyticsPluginManager;

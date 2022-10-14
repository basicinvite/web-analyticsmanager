export interface AnalyticsManagerPluginInterface {
  name: string,
  instance: any,
  enabled: boolean,
  options?: any,

}

export default class AnalyticsPluginManager {

  private _pluginList: Map<string, AnalyticsManagerPluginInterface>;

  constructor() {
    this._pluginList = new Map();
  }

  private _addPlugin(plugin: AnalyticsManagerPluginInterface) {
    this._pluginList.set(plugin.name, plugin);
  }

  async registerPlugin(plugin: AnalyticsManagerPluginInterface) {
    if (!plugin || !plugin.name || !plugin.instance) {
      throw new Error(`Plugin not found`);
    }
    this._addPlugin(plugin);
  }

  loadPlugin<T>(name: string): T {
    const plugin = this._pluginList.get(name);
    if (!plugin) {
      throw new Error(`Plugin not found - ${name}`);
    }

    if (!plugin.instance) {
      throw new Error(`Plugin cannot be loaded - ${name}`);
    }

    plugin.instance.prototype.options = plugin.options;

    return Object.create(plugin?.instance.prototype) as T;
  }

  listAllPlugins(): Map<string, AnalyticsManagerPluginInterface> {
    return this._pluginList;
  }


}
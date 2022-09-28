export interface AnalyticsManagerPluginInterface {
  name: string,
  packageName: string,
  enabled: boolean,
  instance?: any,
  options?: any,

}

export default class AnalyticsPluginManager {

  private _pluginList: Map<string, AnalyticsManagerPluginInterface>;

  constructor() {
    this._pluginList = new Map();
  }

  private _addPlugin(plugin: AnalyticsManagerPluginInterface, pluginContent: any) {
    this._pluginList.set(plugin.name, { ...plugin, instance: pluginContent });
  }

  async registerPlugin(plugin: AnalyticsManagerPluginInterface) {
    if (!plugin || !plugin.name || !plugin.packageName) {
      throw new Error(`Plugin not found`);
    }

    try {
      const pluginContent = await import(plugin.packageName);
      this._addPlugin(plugin, pluginContent);
    } catch (error) {
      console.error(`Cannot load plugin - ${plugin.name}`);
    }
  }

  loadPlugin<T>(name: string): T {
    const plugin = this._pluginList.get(name);
    if (!plugin) {
      throw new Error(`Plugin not found - ${name}`);
    }

    if (!plugin.instance || !plugin.instance.default) {
      throw new Error(`Plugin cannot be loaded - ${name}`);
    }

    plugin.instance.default.prototype.options = plugin.options;

    return Object.create(plugin?.instance.default.prototype) as T;
  }

  listAllPlugins(): Map<string, AnalyticsManagerPluginInterface> {
    return this._pluginList;
  }


}
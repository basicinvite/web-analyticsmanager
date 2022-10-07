export interface AnalyticsManagerPluginInterface {
    name: string;
    packageName: string;
    enabled: boolean;
    instance?: any;
    options?: any;
}
export default class AnalyticsPluginManager {
    private _pluginList;
    constructor();
    private _addPlugin;
    registerPlugin(plugin: AnalyticsManagerPluginInterface): Promise<void>;
    loadPlugin<T>(name: string): T;
    listAllPlugins(): Map<string, AnalyticsManagerPluginInterface>;
}

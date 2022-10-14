export interface AnalyticsManagerPluginInterface {
    name: string;
    instance: any;
    enabled: boolean;
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

import { ManagerConfig } from "Configuration/ManagerConfig";
import { AnalyticsEvent } from "Objects/AnalyticsEvent";
import { AnalyticsEventData } from "Objects/AnalyticsEventData";
import AnalyticsPluginManager from "Plugins/AnalyticsPluginManager";
import { ManagerPlugin } from "Utility/ManagerPlugin";
declare const WebAnalyticsManager: {
    AnalyticsPluginManager: typeof AnalyticsPluginManager;
    ManagerConfig: typeof ManagerConfig;
    AnalyticsEvent: typeof AnalyticsEvent;
    ManagerPlugin: typeof ManagerPlugin;
    AnalyticsEventData: typeof AnalyticsEventData;
};
export default WebAnalyticsManager;
//# sourceMappingURL=index.d.ts.map
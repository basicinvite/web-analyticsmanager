import { ManagerConfig } from "Configuration/ManagerConfig";
import { AnalyticsEvent } from "Objects/AnalyticsEvent";
import { AnalyticsEventData } from "Objects/AnalyticsEventData";
import AnalyticsPluginManager from "Plugins/AnalyticsPluginManager";
import { ManagerPlugin } from "Utility/ManagerPlugin";

const WebAnalyticsManager = {
  AnalyticsPluginManager: AnalyticsPluginManager,
  ManagerConfig: ManagerConfig,
  AnalyticsEvent: AnalyticsEvent,
  ManagerPlugin: ManagerPlugin,
  AnalyticsEventData: AnalyticsEventData
}

export default WebAnalyticsManager;
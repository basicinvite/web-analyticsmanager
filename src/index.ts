import { AnalyticsEventDataInterface } from "Objects/Interfaces/AnalyticsEventData.Interface";
import { ManagerConfigInterface } from "Configuration/Interfaces/ManagerConfig.Interface";
import { AnalyticsEvent } from "Objects/AnalyticsEvent";
import { ManagerPlugin } from "Utility/ManagerPlugin";

import AnalyticsPluginManager from "Plugins/AnalyticsPluginManager";

export default AnalyticsPluginManager;

export {
  AnalyticsEventDataInterface,
  ManagerConfigInterface,
  AnalyticsEvent,
  ManagerPlugin
}
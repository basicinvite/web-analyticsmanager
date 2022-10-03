import { AnalyticsEventDataInterface } from "Objects/Interfaces/AnalyticsEventData.Interface";
import { AnalyticsEventInterface } from "Objects/Interfaces/AnalyticsEvent.Interface";
import { ManagerConfig } from "Configuration/ManagerConfig";

import AnalyticsEvent from "Objects/AnalyticsEvent";
import AnalyticsPluginManager from "Plugins/AnalyticsPluginManager";
import ManagerPlugin from "Utility/ManagerPlugin";

export default AnalyticsPluginManager;

export {
  AnalyticsEvent as AnalyticsEvent,
  AnalyticsEventDataInterface as AnalyticsEventDataInterface,
  AnalyticsEventInterface as AnalyticsEventInterface,
  ManagerConfig as ManagerConfig,
  AnalyticsPluginManager as AnalyticsPluginManager,
  ManagerPlugin as ManagerPlugin
};
import { ManagerConfig } from "Configuration/ManagerConfig";
import { ManagerConfigInterface } from "Configuration/Interfaces/ManagerConfig.Interface";
import { AnalyticsEvent } from "Objects/AnalyticsEvent";
import { AnalyticsEventInterface } from "Objects/Interfaces/AnalyticsEvent.Interface";
import { AnalyticsEventData } from "Objects/AnalyticsEventData";
import { AnalyticsEventDataInterface } from "Objects/Interfaces/AnalyticsEventData.Interface";
import { ManagerPlugin } from "Utility/ManagerPlugin";
import { ManagerInterface } from "Utility/Interfaces/Manager.Interface";
import { AnalyticsManagerPluginInterface } from "Plugins/AnalyticsPluginManager";
import AnalyticsPluginManager from "Plugins/AnalyticsPluginManager";

export {
  ManagerConfig,
  ManagerConfigInterface,
  AnalyticsEvent,
  AnalyticsEventInterface,
  AnalyticsEventData,
  AnalyticsEventDataInterface,
  ManagerPlugin,
  ManagerInterface,
  AnalyticsManagerPluginInterface
}

export default AnalyticsPluginManager;
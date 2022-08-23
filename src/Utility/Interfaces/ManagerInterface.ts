import { ManagerConfigInterface } from "../../Configuration/Interfaces/ManagerConfigInterface";
import { AnalyticsEventDataInterface } from "../../Objects/Interfaces/AnalyticsEventDataInterface";

export interface ManagerInterface {
  managerConfig: ManagerConfigInterface;

  getAnalyticsTrackingCode(): string;
  getAnalyticsTrackingId(): string;
  addTrackingCode(id: string): void;
  fireNewTrackingEvent(option: AnalyticsEventDataInterface): void;
}

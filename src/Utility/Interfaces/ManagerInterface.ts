import { ManagerConfigInterface } from "src/Configuration/Interfaces/ManagerConfigInterface";
import { AnalyticsEventDataInterface } from "src/Models/Interfaces/AnalyticsEventDataInterface";

export interface ManagerInterface {
  managerConfig: ManagerConfigInterface;

  getAnalyticsTrackingCode(): string;
  getAnalyticsTrackingId(): string;
  addTrackingCode(id: string): void;
  fireNewTrackingEvent(option: AnalyticsEventDataInterface): void;
}

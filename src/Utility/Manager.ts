import $ from "jquery";
import { ManagerConfigInterface } from "src/Configuration/Interfaces/ManagerConfigInterface";
import { ManagerConfig } from "src/Configuration/ManagerConfig";
import { ManagerInterface } from "./Interfaces/ManagerInterface";
import { AnalyticsEventDataInterface } from "src/Models/Interfaces/AnalyticsEventDataInterface";
import { AnalyticsEvent } from "src/Models/AnalyticsEvent";

export class Manager implements ManagerInterface {
  managerConfig: ManagerConfigInterface;

  constructor(data: ManagerConfigInterface) {
    this.managerConfig = new ManagerConfig();
    this.managerConfig.trackingCode = data.trackingCode;
    this.managerConfig.trackingId = data.trackingId;
  }

  getAnalyticsTrackingCode(): string {
    return this.managerConfig.trackingCode;
  }

  getAnalyticsTrackingId(): string {
    return this.managerConfig.trackingId;
  }

  addTrackingCode(id: string): void {
    if (id) {
      const trackingCodeParent = $(id);
      if (trackingCodeParent) {
        const trackingElement = $(this.managerConfig.trackingCode);
        trackingCodeParent.add(trackingElement);
      }
    }
  }

  fireNewTrackingEvent(options: AnalyticsEventDataInterface): void {
    const event = new AnalyticsEvent(options);
    event.fire();
  }
}

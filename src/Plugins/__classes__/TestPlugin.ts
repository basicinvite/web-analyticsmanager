import { ManagerPlugin } from "../../Utility/ManagerPlugin";
import { ManagerConfigInterface } from "../../Configuration/Interfaces/ManagerConfig.Interface";

export default class TestPlugin extends ManagerPlugin {
  managerConfig: ManagerConfigInterface = { trackingId: '' };

  constructor() {
    super();
  }

  addTrackingCode(trackingHtml: string): void {
    console.log(trackingHtml);
  }

  getTrackingCodeHTML(): string {
    return "This is some tracking code";
  }

  init(trackingId: string): void {
    this.managerConfig.trackingId = trackingId;
  }
}
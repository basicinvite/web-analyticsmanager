import { ManagerConfigInterface } from '../../Configuration/Interfaces/ManagerConfig.Interface';
import ManagerPlugin from '../../Utility/ManagerPlugin';

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

  init(data: ManagerConfigInterface): void {
    this.managerConfig = data;
  }
}
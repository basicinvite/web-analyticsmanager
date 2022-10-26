import { ManagerConfigInterface } from "./Interfaces/ManagerConfig.Interface";

export class ManagerConfig implements ManagerConfigInterface {
  trackingId: string;

  constructor(data: ManagerConfigInterface) {
    this.trackingId = data.trackingId;
  }

}

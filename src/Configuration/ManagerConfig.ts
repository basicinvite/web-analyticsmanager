import { ManagerConfigInterface } from "./Interfaces/ManagerConfigInterface";

export class ManagerConfig implements ManagerConfigInterface {
  trackingCode: string;
  trackingId: string;

  constructor(trackingCode: string, trackingId: string) {
    this.trackingCode = trackingCode;
    this.trackingId = trackingId;
  }
  
}

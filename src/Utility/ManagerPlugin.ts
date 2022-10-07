import { ManagerConfigInterface } from "../Configuration/Interfaces/ManagerConfig.Interface";
import { ManagerInterface } from "./Interfaces/Manager.Interface";

export abstract class ManagerPlugin implements ManagerInterface {
  managerConfig: ManagerConfigInterface = { trackingId: '' };

  abstract init(data: ManagerConfigInterface): void;
  abstract getTrackingCodeHTML(): string;
  abstract addTrackingCode(trackingHtml: string): void;
}
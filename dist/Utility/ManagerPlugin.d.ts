import { ManagerConfigInterface } from "../Configuration/Interfaces/ManagerConfig.Interface";
import { ManagerInterface } from "./Interfaces/Manager.Interface";
export default abstract class ManagerPlugin implements ManagerInterface {
    managerConfig: ManagerConfigInterface;
    abstract init(data: ManagerConfigInterface): void;
    abstract getTrackingCodeHTML(): string;
    abstract addTrackingCode(trackingHtml: string): void;
}

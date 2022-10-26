import { ManagerConfigInterface } from "../Configuration/Interfaces/ManagerConfig.Interface";
import { ManagerInterface } from "./Interfaces/Manager.Interface";
export declare abstract class ManagerPlugin implements ManagerInterface {
    managerConfig: ManagerConfigInterface;
    abstract init(trackingId: string): void;
}

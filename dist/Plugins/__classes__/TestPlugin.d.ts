import { ManagerPlugin } from "../../Utility/ManagerPlugin";
import { ManagerConfigInterface } from "../../Configuration/Interfaces/ManagerConfig.Interface";
export default class TestPlugin extends ManagerPlugin {
    managerConfig: ManagerConfigInterface;
    constructor();
    addTrackingCode(trackingHtml: string): void;
    getTrackingCodeHTML(): string;
    init(trackingId: string): void;
}

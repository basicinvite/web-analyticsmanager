import { ManagerConfigInterface } from "../../Configuration/Interfaces/ManagerConfig.Interface";
export interface ManagerInterface {
    managerConfig: ManagerConfigInterface;
    init(data: ManagerConfigInterface): void;
    getTrackingCodeHTML(): string;
    addTrackingCode(trackingHtml: string): void;
}
//# sourceMappingURL=Manager.Interface.d.ts.map
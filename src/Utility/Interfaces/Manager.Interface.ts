import { ManagerConfigInterface } from "../../Configuration/Interfaces/ManagerConfig.Interface";

export interface ManagerInterface {
  managerConfig: ManagerConfigInterface;

  init(data: ManagerConfigInterface): void;
}

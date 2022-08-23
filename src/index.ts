import { Manager } from "./Utility/Manager";

export const Base = new Manager({ trackingCode: "test", trackingId: "test" });
Base.addTrackingCode("test");

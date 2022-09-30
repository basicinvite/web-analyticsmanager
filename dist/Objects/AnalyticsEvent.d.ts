import { AnalyticsEventDataInterface } from "./Interfaces/AnalyticsEventData.Interface";
import { AnalyticsEventInterface } from "./Interfaces/AnalyticsEvent.Interface";
export declare class AnalyticsEvent implements AnalyticsEventInterface {
    eventData: AnalyticsEventDataInterface;
    constructor(data: AnalyticsEventDataInterface);
    setEventData(data: AnalyticsEventDataInterface): void;
    getEventData(): AnalyticsEventDataInterface;
    fire(): void;
}

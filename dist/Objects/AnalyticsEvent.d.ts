import { AnalyticsEventInterface } from "./Interfaces/AnalyticsEvent.Interface";
import { AnalyticsEventData } from "./AnalyticsEventData";
export declare class AnalyticsEvent implements AnalyticsEventInterface {
    eventData: AnalyticsEventData;
    constructor(data: AnalyticsEventData);
    setEventData(data: AnalyticsEventData): void;
    getEventData(): AnalyticsEventData;
    fire(): void;
}
//# sourceMappingURL=AnalyticsEvent.d.ts.map
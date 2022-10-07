import { AnalyticsEventDataInterface } from "./Interfaces/AnalyticsEventData.Interface";
import { AnalyticsEventInterface } from "./Interfaces/AnalyticsEvent.Interface";
export default class AnalyticsEvent implements AnalyticsEventInterface {
    eventData: AnalyticsEventDataInterface;
    constructor(data: AnalyticsEventDataInterface);
    setEventData(data: AnalyticsEventDataInterface): void;
    getEventData(): AnalyticsEventDataInterface;
    fire(): void;
}
//# sourceMappingURL=AnalyticsEvent.d.ts.map
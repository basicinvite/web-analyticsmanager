import { AnalyticsEventDataInterface } from "./Interfaces/AnalyticsEventData.Interface";
export declare class AnalyticsEventData implements AnalyticsEventDataInterface {
    eventType: string;
    eventPayload: any;
    constructor(eventType?: string, eventPayload?: any);
    get typeOfEvent(): string;
    set typeOfEvent(typeOfEvent: string);
    get payloadForEvent(): any;
    set payloadForEvent(payload: any);
}
//# sourceMappingURL=AnalyticsEventData.d.ts.map
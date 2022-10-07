import { AnalyticsEventDataInterface } from "./Interfaces/AnalyticsEventData.Interface";

export class AnalyticsEventData implements AnalyticsEventDataInterface {
  eventType: string;
  eventPayload: any;
  constructor(eventType?: string, eventPayload?: any) {
    this.eventType = eventType ? eventType : '';
    this.eventPayload = eventPayload ? eventPayload : {};
  }

  get typeOfEvent(): string {
    return this.eventType;
  }

  set typeOfEvent(typeOfEvent: string) {
    this.eventType = typeOfEvent;
  }

  get payloadForEvent(): any {
    return this.eventPayload;
  }

  set payloadForEvent(payload: any) {
    this.eventPayload = payload;
  }
}

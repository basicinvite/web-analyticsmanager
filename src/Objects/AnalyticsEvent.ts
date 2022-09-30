import { AnalyticsEventDataInterface } from "./Interfaces/AnalyticsEventData.Interface";
import { AnalyticsEventInterface } from "./Interfaces/AnalyticsEvent.Interface";

export class AnalyticsEvent implements AnalyticsEventInterface {
  eventData: AnalyticsEventDataInterface = { eventType: '', eventPayload: null };

  constructor(data: AnalyticsEventDataInterface) {
    if (data && Object.keys(data).length > 0) {
      this.setEventData(data);
    }
  }

  setEventData(data: AnalyticsEventDataInterface) {
    this.eventData = data;
  }

  getEventData(): AnalyticsEventDataInterface {
    return this.eventData;
  }

  fire(): void {
    //TODO - Use analytics specific event firing.
    console.log("Use analytics specific event firing.");
  }
}

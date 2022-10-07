import { AnalyticsEventInterface } from "./Interfaces/AnalyticsEvent.Interface";
import { AnalyticsEventData } from "./AnalyticsEventData";

export class AnalyticsEvent implements AnalyticsEventInterface {
  eventData: AnalyticsEventData = new AnalyticsEventData();

  constructor(data: AnalyticsEventData) {
    if (data && Object.keys(data).length > 0) {
      this.setEventData(data);
    }
  }

  setEventData(data: AnalyticsEventData) {
    this.eventData = data;
  }

  getEventData(): AnalyticsEventData {
    return this.eventData;
  }

  fire(): void {
    //TODO - Use analytics specific event firing.
    console.log("Use analytics specific event firing.");
  }
}

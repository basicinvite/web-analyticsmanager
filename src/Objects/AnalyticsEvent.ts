import { AnalyticsEventDataInterface } from "./Interfaces/AnalyticsEventDataInterface";
import { AnalyticsEventInterface } from "./Interfaces/AnalyticsEventInterface";

export class AnalyticsEvent implements AnalyticsEventInterface {
  eventData: AnalyticsEventDataInterface = {eventType: ''};

  constructor(data: AnalyticsEventDataInterface) {
    this.setEventData(data);
  }

  setEventData(data: AnalyticsEventDataInterface ) {
    this.eventData = data;
  }

  getEventData(): AnalyticsEventDataInterface {
    return this.eventData;
  }

  fire(): void {
    //TODO - Use analytics specific event firing.
    console.log()
  }
}

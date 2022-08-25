import { AnalyticsEventDataInterface } from "./AnalyticsEventData.Interface";

export interface AnalyticsEventInterface {
  eventData: AnalyticsEventDataInterface;

  getEventData(): AnalyticsEventDataInterface;

  fire(): void;
}

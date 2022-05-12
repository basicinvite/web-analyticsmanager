import { AnalyticsEventDataInterface } from "./AnalyticsEventDataInterface";

export interface AnalyticsEventInterface {
  eventData: AnalyticsEventDataInterface;

  getEventData(): AnalyticsEventDataInterface;

  fire(): void;
}

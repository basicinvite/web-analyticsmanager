export interface AnalyticsEventDataInterface {
  eventType: string;
  data: object;

  getData(): object;
}

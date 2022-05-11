import { EventDataInterface } from "./EventDataInterface";

export interface EventInterface {
  eventData: EventDataInterface;

  getEventData(): EventDataInterface;
}

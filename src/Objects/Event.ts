import {EventDataInterface} from "../Interfaces/EventDataInterface";
import {EventInterface} from "../Interfaces/EventInterface";

export class Event implements EventInterface {
    eventData: EventDataInterface;

    getEventData(): EventDataInterface {
        return this.eventData;
    }
}
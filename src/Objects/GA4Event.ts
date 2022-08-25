import { AnalyticsEvent } from "./AnalyticsEvent";
import { AnalyticsEventDataInterface } from "./Interfaces/AnalyticsEventData.Interface";

export default class GA4Event extends AnalyticsEvent {

    public data = {};
    private requiredItems: Array<string> = [];


    constructor(details: AnalyticsEventDataInterface, required?: Array<string>) {
        super(details);
        //Set data and required items for event.
        if(required && required.length > 0) {
            this.requiredItems = required;
        }
    }


    private _isValid() {
        const payload = this.getEventData().eventPayload;
        let valid = true;
        if(this.requiredItems) {
            valid = this.requiredItems.every(key => {
                if(!(key in payload) || !payload[key]) {
                    return false;
                }
                return true;
            }, payload)
        }

        return valid;
    }

    private _logEventError(error: string): void {
        if(error) {
            console.error(error);
        }
    }

    fire(): void {
        if(this._isValid()) {
            if(window.WebAnalyticsManager.ga) {
                const eventData = this.getEventData();
                window.WebAnalyticsManager.ga('event', eventData.eventType, eventData.eventPayload);
            }   
        } else {
            this._logEventError(`Event data not valid: \n Payload ${this.getEventData()}`)
        }
    }
}
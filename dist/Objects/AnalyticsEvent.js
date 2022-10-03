"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AnalyticsEvent {
    constructor(data) {
        this.eventData = { eventType: '', eventPayload: null };
        if (data && Object.keys(data).length > 0) {
            this.setEventData(data);
        }
    }
    setEventData(data) {
        this.eventData = data;
    }
    getEventData() {
        return this.eventData;
    }
    fire() {
        //TODO - Use analytics specific event firing.
        console.log("Use analytics specific event firing.");
    }
}
exports.default = AnalyticsEvent;

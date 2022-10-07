"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsEventData = void 0;
class AnalyticsEventData {
    constructor(eventType, eventPayload) {
        this.eventType = eventType ? eventType : '';
        this.eventPayload = eventPayload ? eventPayload : {};
    }
    get typeOfEvent() {
        return this.eventType;
    }
    set typeOfEvent(typeOfEvent) {
        this.eventType = typeOfEvent;
    }
    get payloadForEvent() {
        return this.eventPayload;
    }
    set payloadForEvent(payload) {
        this.eventPayload = payload;
    }
}
exports.AnalyticsEventData = AnalyticsEventData;

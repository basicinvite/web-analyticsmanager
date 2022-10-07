"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsEvent = void 0;
const AnalyticsEventData_1 = require("./AnalyticsEventData");
class AnalyticsEvent {
    constructor(data) {
        this.eventData = new AnalyticsEventData_1.AnalyticsEventData();
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
exports.AnalyticsEvent = AnalyticsEvent;

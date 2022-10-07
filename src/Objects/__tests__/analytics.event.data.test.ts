import { AnalyticsEventData } from "../AnalyticsEventData";

//Tests to check getter and setter methods on base AnalyticsEvent.
describe("Test getter and setter methods of Analytics Event class.", () => {
    const EventData = new AnalyticsEventData('test', { message: 'This is my data.' });

    //Getter test.
    test("Test getter method.", () => {
        expect(EventData.typeOfEvent).toBe("test");
        expect(EventData.payloadForEvent).toStrictEqual({ message: "This is my data." });
    });

    //Setter test
    test("Test setter method.", () => {
        EventData.typeOfEvent = 'new';
        EventData.payloadForEvent = { message: "New Event" };
        expect(EventData.typeOfEvent).toBe("new");
        expect(EventData.payloadForEvent).toStrictEqual({ message: "New Event" });
    });
});
import AnalyticsEvent from "../AnalyticsEvent";

//Tests to check getter and setter methods on base AnalyticsEvent.
describe("Test getter and setter methods of Analytics Event class.", () => {
    const testEvent = new AnalyticsEvent({ eventType: "test", eventPayload: { message: "This is my data." } });

    //Getter test.
    test("Test getter method.", () => {
        const data = testEvent.getEventData();
        expect(data.eventType).toBe("test");
        expect(data.eventPayload).toStrictEqual({ message: "This is my data." });
    });

    //Setter test
    test("Test setter method.", () => {
        testEvent.setEventData({ eventType: "new", eventPayload: { message: "New Event" } });
        const data = testEvent.getEventData();
        expect(data.eventType).toBe("new");
        expect(data.eventPayload).toStrictEqual({ message: "New Event" });
    });
});

//Tests to check fire method on base AnalyticsEvent.
describe("Test fire method of Analytics Event class.", () => {

    const log = jest.spyOn(console, 'log');

    const testEvent = new AnalyticsEvent({ eventType: "test", eventPayload: { message: "This is my data." } });

    //Fire method test.
    test("Test getter method.", () => {
        testEvent.fire();
        expect(log).toHaveBeenCalled();
    });
});
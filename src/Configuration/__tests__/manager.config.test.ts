import { ManagerConfig } from '../ManagerConfig';

describe("Test that ManagerConfig initialization.", () => {
    test("When Manager Config initialized, can retrieve correct tracking id value.", () => {
        const settings = { trackingId: "123456789" };
        const config = new ManagerConfig(settings);
        expect(config.trackingId).toBe("123456789");
    });
})
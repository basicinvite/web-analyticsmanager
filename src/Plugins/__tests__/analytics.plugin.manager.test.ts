import AnalyticsPluginManager from '../AnalyticsPluginManager';
import TestPlugin from '../__classes__/TestPlugin';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => { });
});

afterAll(() => {
  jest.clearAllMocks();
})

describe("Test that plugin is loaded successfully", () => {

  test("Do not add plugin if module cannot be loaded", async () => {
    const Manager = new AnalyticsPluginManager();
    try {
      await Manager.registerPlugin({ name: 'test', instance: null, enabled: true });
    } catch (error: any) {
      expect(error.message).toBe('Plugin not found');
    }
  });

  test("Add a plugin", async () => {
    const Manager = new AnalyticsPluginManager();
    await Manager.registerPlugin({ name: 'jest', instance: jest, enabled: true });
    const pluginList = Manager.listAllPlugins();
    expect(pluginList.size).toBe(1);
    expect(pluginList.has('jest')).toBeTruthy();
  });

  test("Loading a plugin", async () => {
    const Manager = new AnalyticsPluginManager();
    await Manager.registerPlugin({ name: 'plugin1', instance: TestPlugin, enabled: true });
    const loadedModule = Manager.loadPlugin('plugin1');
    expect(loadedModule).toBeInstanceOf(TestPlugin);
  });

});
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
      await Manager.registerPlugin({ name: 'test', packageName: 'test/package', enabled: true });
    } catch (error) {
      expect(console.error).toHaveBeenCalledTimes(1);
      expect(error).toBe('Cannot load plugin - test');
    }
  });

  test("Add a plugin", async () => {
    const Manager = new AnalyticsPluginManager();
    await Manager.registerPlugin({ name: 'jest', packageName: 'jest', enabled: true });
    const pluginList = Manager.listAllPlugins();
    expect(pluginList.size).toBe(1);
    expect(pluginList.has('jest')).toBeTruthy();
  });

  test("Loading a plugin", async () => {
    const Manager = new AnalyticsPluginManager();
    await Manager.registerPlugin({ name: 'plugin1', packageName: './__classes__/TestPlugin', enabled: true });
    const loadedModule = Manager.loadPlugin('plugin1');
    expect(loadedModule).toBeInstanceOf(TestPlugin);
  });

});
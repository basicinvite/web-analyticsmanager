import { Items } from "src/Collections/Items";

const mockItem = jest.fn();

jest.mock("./src/Collections/Items", () => {
  return {
    Items: jest.fn().mockImplementation(() => {
      return { getItemsArray: mockItem };
    }),
  };
});

beforeEach(() => {
  mockItem.mockClear();
});

it("Check that getItemsArray returns an array of items.", () => {
  const itemsCollection = new Items();
  expect(itemsCollection).toHaveLength(1);
});

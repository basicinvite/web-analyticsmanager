import { Item } from "src/Models/Item";

export interface ItemsInterface {
  items: Array<Item>;

  addItemToCollection(item: Item): void;
  getItemsArray(): Array<Item>;
}

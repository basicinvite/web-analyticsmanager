import { ItemInterface } from "../Objects/Interfaces/ItemInterface";
import { Item } from "../Objects/Item";
import { ItemsInterface } from "./Interfaces/ItemsInterface";

export class Items implements ItemsInterface {
  items: Array<Item>;

  constructor() {
    this.items = [];
  }

  addItemToCollection(item: ItemInterface): void {
    const newItem = new Item(item.itemId, item.itemName);
    this.items.push(newItem);
  }

  getItemsArray(): Item[] {
    return this.items;
  }
}

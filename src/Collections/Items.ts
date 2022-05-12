import { ItemInterface } from "src/Models/Interfaces/ItemInterface";
import { Item } from "src/Models/Item";
import { ItemsInterface } from "./Interfaces/ItemsInterface";

export class Items implements ItemsInterface {
  items: Array<Item>;

  addItemToCollection(item: ItemInterface): void {
    const newItem = new Item(item.itemId, item.itemName);
    this.items.push(newItem);
  }

  getItemsArray(): Item[] {
    return this.items;
  }
}

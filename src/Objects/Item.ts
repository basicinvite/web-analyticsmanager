import { ItemInterface } from "./Interfaces/ItemInterface";

export class Item implements ItemInterface {
  itemId: string;
  itemName: string;

  constructor(id: string, name: string) {
    this.itemId = id;
    this.itemName = name;
  }
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello EXE.LK';
  }

  private readonly items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  getItems(): string[] {
    return this.items;
  }

  getItemById(id: string): string {
    const index = parseInt(id, 10);
    if (isNaN(index) || index < 0 || index >= this.items.length) {
      throw new Error('Item not found');
    }
    return this.items[index];
  }

  createItem(item: string): void {
    this.items.push(item);
  }

  updateItem(id: string, newItem: string): void {
    const index = parseInt(id, 10);
    if (isNaN(index) || index < 0 || index >= this.items.length) {
      throw new Error('Item not found');
    }
    this.items[index] = newItem;
  }

  deleteItem(id: string): void {
    const index = parseInt(id, 10);
    if (isNaN(index) || index < 0 || index >= this.items.length) {
      throw new Error('Item not found');
    }
    this.items.splice(index, 1);
  }
}

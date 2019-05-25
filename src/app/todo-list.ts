import { TodoItem } from './todo-item';
import { moveItemInArray } from '@angular/cdk/drag-drop';

export class TodoList {
    private itemsCurrentAutoincrementId = 0;
    private items: TodoItem[] = [];

    id: number;

    constructor(id: number) {
        this.id = id;
    }

    copyFromObject(obj: any) {
        this.itemsCurrentAutoincrementId = obj.itemsCurrentAutoincrementId;
        this.id = obj.id;
        this.items = obj.items.map(x => new TodoItem(x.id, x.value, x.checked));
        return this;
    }

    addNewItem(value: string, checked: boolean) {
        this.items.push(new TodoItem(this.itemsCurrentAutoincrementId++, value, checked));
    }

    getItemById(id: number) {
        return this.items.find((x) => x.id == id);
    }

    deleteItemById(id: number) {
        this.items = this.items.filter((x) => x.id != id);
    }

    getItems() {
        return this.items;
    }

    moveItemInList(previousIndex: number, currentIndex: number) {
        moveItemInArray(this.items, previousIndex, currentIndex);
    }

    updateItemCheckedById(id: number, checked: boolean) {
        const item: TodoItem = this.getItemById(id);
        if (item) {
            item.checked = checked;
        }
    }

    updateItemValuedById(id: number, value: string) {
        const item: TodoItem = this.getItemById(id);
        if (item) {
            item.value = value;
        }
    }
}
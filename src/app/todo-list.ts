import { TodoItem } from './todo-item';

export class TodoList {
    private itemsCurrentAutoincrementId = 0;
    private items: TodoItem[] = [];

    id: number;

    constructor(id: number) {
        this.id = id;
    }

    addNewItem(value: string, checked: boolean) {
        this.items.push(new TodoItem(this.itemsCurrentAutoincrementId++, value, checked));
    }

    findItemById(id: number) {
        this.items.find((x) => x.id == id);
    }

    deleteItemById(id: number) {
        this.items = this.items.filter((x) => x.id != id);
    }

    getItems() {
        return this.items;
    }
}
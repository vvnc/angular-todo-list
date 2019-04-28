import { TodoItem } from './todo-item';

export class TodoList {
    private items: TodoItem[] = [];

    addNewItem(value: string, checked: boolean) {
        this.items.push(new TodoItem(value, checked));
        console.log('Created new item:', value, checked);
    }

    getItems() {
        return this.items;
    }
}
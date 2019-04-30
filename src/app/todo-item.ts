export class TodoItem {
    id: number;
    value: string;
    checked: boolean;

    constructor(id: number, value = '', checked = false) {
        this.id = id;
        this.value = value;
        this.checked = checked;
    }
}
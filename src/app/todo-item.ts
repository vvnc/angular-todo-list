export class TodoItem {
    value: string;
    checked: boolean;

    constructor(value = '', checked = false) {
        this.value = value;
        this.checked = checked;
    }
}
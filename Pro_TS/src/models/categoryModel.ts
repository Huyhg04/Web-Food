class Category {
    private _id: string;
    private name: string;
    private items: string[];

    constructor(id: string, name: string, items: string[] = []) {
        this._id = id;
        this.name = name;
        this.items = items;
    }

    get Id() {
        return this._id;
    }

    set Id(id: string) {
        this._id = id;
    }

    get Name() {
        return this.name;
    }

    set Name(name: string) {
        if (name.length == 0 || name.trim() == "") {
            this.name = "No name";
        } else {
            this.name = name;
        }
    }

    get Items() {
        return this.items;
    }

    set Items(items: string[]) {
        this.items = items;
    }

    addItem(item: string) {
        this.items.push(item);
    }

    removeItem(item: string) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}



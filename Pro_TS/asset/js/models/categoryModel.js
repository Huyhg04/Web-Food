"use strict";
class Category {
    constructor(id, name, items = []) {
        this._id = id;
        this.name = name;
        this.items = items;
    }
    get Id() {
        return this._id;
    }
    set Id(id) {
        this._id = id;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        if (name.length == 0 || name.trim() == "") {
            this.name = "No name";
        }
        else {
            this.name = name;
        }
    }
    get Items() {
        return this.items;
    }
    set Items(items) {
        this.items = items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
}

"use strict";
class Product {
    constructor(_id, ma, name, image, price_now, price_sale, category_id, created_at, updated_at) {
        this._id = _id;
        this.ma = ma;
        this.name = name;
        this.image = image;
        this.price_now = price_now;
        this.price_sale = price_sale;
        this.category_id = category_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    // Getter methods
    getId() {
        return this._id;
    }
    getMa() {
        return this.ma;
    }
    getName() {
        return this.name;
    }
    getImage() {
        return this.image;
    }
    getPriceNow() {
        return this.price_now;
    }
    getPriceSale() {
        return this.price_sale;
    }
    getCategoryId() {
        return this.category_id;
    }
    getCreatedAt() {
        return this.created_at;
    }
    getUpdatedAt() {
        return this.updated_at;
    }
    // Setter methods
    setId(id) {
        this._id = id;
    }
    setMa(ma) {
        this.ma = ma;
    }
    setName(name) {
        this.name = name;
    }
    setImage(image) {
        this.image = image;
    }
    setPriceNow(price_now) {
        this.price_now = price_now;
    }
    setPriceSale(price_sale) {
        this.price_sale = price_sale;
    }
    setCategoryId(category_id) {
        this.category_id = category_id;
    }
    setCreatedAt(created_at) {
        this.created_at = created_at;
    }
    setUpdatedAt(updated_at) {
        this.updated_at = updated_at;
    }
}

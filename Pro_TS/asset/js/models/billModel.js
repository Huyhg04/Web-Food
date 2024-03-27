"use strict";
class Bill {
    constructor(id, userId, status, total, voucherId, purchases, note, payment) {
        this.id = id;
        this.userId = userId;
        this.status = status;
        this.total = total;
        this.voucherId = voucherId;
        this.purchases = purchases;
        this.note = note;
        this.payment = payment;
    }
    get Id() {
        return this.id;
    }
    set Id(id) {
        this.id = id;
    }
    get UserId() {
        return this.userId;
    }
    set UserId(userId) {
        this.userId = userId;
    }
    get Status() {
        return this.status;
    }
    set Status(status) {
        this.status = status;
    }
    get Total() {
        return this.total;
    }
    set Total(total) {
        this.total = total;
    }
    get VoucherId() {
        return this.voucherId;
    }
    set VoucherId(voucherId) {
        if (voucherId == null || voucherId == "") {
            this.voucherId = "Không có mã nào áp dụng";
        }
        else {
            this.voucherId = voucherId;
        }
    }
    get Purchases() {
        return this.purchases;
    }
    set Purchases(purchases) {
        this.purchases = purchases;
    }
    get Note() {
        return this.note;
    }
    set Note(note) {
        this.note = note;
    }
    get Payment() {
        return this.payment;
    }
    set Payment(payment) {
        if (payment == "") {
            this.payment = "Thanh toán bằng tiền mặt";
        }
        else {
            this.payment = payment;
        }
    }
}

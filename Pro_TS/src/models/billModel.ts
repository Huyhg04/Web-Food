class Bill {
    private id: string | undefined;
    private userId: string;
    private status: string;
    private total: number;
    private voucherId: string;
    private purchases: number;
    private note: string;
    private payment: string;

    constructor(
        id: string | undefined,
        userId: string,
        status: string,
        total: number,
        voucherId: string,
        purchases: number,
        note: string,
        payment: string
    ) {
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

    set Id(id: string | undefined) {
        this.id = id;
    }

    get UserId() {
        return this.userId;
    }

    set UserId(userId: string) {
        this.userId = userId;
    }

    get Status() {
        return this.status;
    }

    set Status(status: string) {
        this.status = status;
    }

    get Total() {
        return this.total;
    }

    set Total(total: number) {
        this.total = total;
    }

    get VoucherId() {
        return this.voucherId;
    }

    set VoucherId(voucherId: string) {
       if (voucherId == null || voucherId == "") {
            this.voucherId = "Không có mã nào áp dụng";
       }else{
            this.voucherId = voucherId;
       }
    }

    get Purchases() {
        return this.purchases;
    }

    set Purchases(purchases: number) {
        this.purchases = purchases;
    }

    get Note() {
        return this.note;
    }

    set Note(note: string) {
        this.note = note;
    }

    get Payment() {
        return this.payment;
    }

    set Payment(payment: string) {
        if (payment == "") {
            this.payment = "Thanh toán bằng tiền mặt"
        }else{
            this.payment = payment;
        }
    }
}

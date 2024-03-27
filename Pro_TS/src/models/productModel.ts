class Product{
    private _id: string | null;
    private ma: string;
    private name: string;
    private image: string;
    private price_now: number;
    private price_sale: number;
    private category_id: string;
    private created_at: string;
    private updated_at: string;

    constructor(
        _id: string | null,
        ma: string,
        name: string,
        image: string,
        price_now: number,
        price_sale: number,
        category_id: string,
        created_at: string,
        updated_at: string
    ) {
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
    getId(): string | null {
        return this._id;
    }

    getMa(): string {
        return this.ma;
    }

    getName(): string {
        return this.name;
    }

    getImage(): string {
        return this.image;
    }

    getPriceNow(): number {
        return this.price_now;
    }

    getPriceSale(): number {
        return this.price_sale;
    }

    getCategoryId(): string {
        return this.category_id;
    }

    getCreatedAt(): string {
        return this.created_at;
    }

    getUpdatedAt(): string {
        return this.updated_at;
    }
    // Setter methods
    setId(id: string | null): void {
        this._id = id;
    }

    setMa(ma: string): void {
        this.ma = ma;
    }

    setName(name: string): void {
        this.name = name;
    }

    setImage(image: string): void {
        this.image = image;
    }

    setPriceNow(price_now: number): void {
        this.price_now = price_now;
    }

    setPriceSale(price_sale: number): void {
        this.price_sale = price_sale;
    }

    setCategoryId(category_id: string): void {
        this.category_id = category_id;
    }

    setCreatedAt(created_at: string): void {
        this.created_at = created_at;
    }

    setUpdatedAt(updated_at: string): void {
        this.updated_at = updated_at;
    }
}

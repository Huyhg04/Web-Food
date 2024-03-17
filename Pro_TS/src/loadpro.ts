import axios from "axios";

interface Product {
    _id: string;
    ma: string;
    name: string;
    image: string;
    price_now: number;
    price_sale: number;
    category_id: string;
    created_at: string;
    updated_at: string;
}

async function loadProducts(targetElementId: string): Promise<void> {
    try {
        const response = await axios.get('http://localhost:3000/products');
        const data: Product[] = response.data;

        const targetElement = document.getElementById(targetElementId);
        if (!targetElement) return;

        let str = '';

        data.forEach(item => {
            const obj = JSON.stringify(item);
            str +=`
            <div class="col-md-2">
                <div class="card border-success-subtle noi-bat">
                    <div class="card__img">
                        <a href="#"><img src="/asset/img/${item.image}" alt=""></a>
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title"><a href="">${item.name}</a></h5>
                        <p class="card-price">
                            <span class="price-cost">${item.price_now}</span>
                            <span class="price-sale">${item.price_sale}</span>
                        </p>
                        <button class="btn-card_buy" onclick='addCart(${obj})'>Mua Ngay</button>
                        <button class="btn-card_view" onclick='showDetail(${obj})'>Xem</button>
                    </div>
                </div>
            </div>`;
        });
      // Đặt HTML được tạo ra vào phần tử mục tiêu
      targetElement.innerHTML = str;

    } catch (error) {
        console.error("Lỗi", error);
        
    }
}

// Gọi hàm API
loadProducts('productHot');
loadProducts('productNew');
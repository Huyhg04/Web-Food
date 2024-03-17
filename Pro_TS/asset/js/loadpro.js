"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchDataProduct(targetElementId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:3000/products');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = yield response.json();
            displayProductClientData(data, targetElementId);
        }
        catch (error) {
            console.error('Error fetching product data:', error);
        }
    });
}
function displayProductClientData(data, targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (!targetElement)
        return;
    let str = '';
    data.forEach(item => {
        const obj = JSON.stringify(item);
        str += `
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
}
// Gọi fetchDataProduct để lấy dữ liệu từ API và cập nhật HTML tương ứng
fetchDataProduct('productHot');
fetchDataProduct('productNew');

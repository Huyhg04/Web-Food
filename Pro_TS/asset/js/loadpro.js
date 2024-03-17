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
function fetchDataCategory(isAdminPage, targetElementId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:3000/categories');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const categories = yield response.json();
            if (isAdminPage) {
                // displayCategoryAdminData(categories, targetElementId); // Bạn không có hàm này, có thể là displayCategoryClientData?
                displayCategoryClientData(categories, targetElementId);
            }
            else {
                displayCategoryClientData(categories, targetElementId);
            }
        }
        catch (error) {
            console.error('Error fetching categories:', error);
        }
    });
}
function displayCategoryClientData(categories, targetElementId) {
    const categoryListContainer = document.querySelector(targetElementId);
    if (!categoryListContainer)
        return;
    // Xóa nội dung cũ của targetElementId trước khi cập nhật
    categoryListContainer.innerHTML = '';
    // Lặp qua mỗi danh mục và tạo HTML tương ứng
    categories.forEach(category => {
        const menuListItem = document.createElement('div');
        menuListItem.classList.add('menu-item');
        menuListItem.innerHTML = `
            <div class="title-menu">
                <a href="#">${category.name}</a>
            </div>
            <ul class="sub-menu">
                ${category.items.map(item => `<li><a href="#">${item}</a></li>`).join('')}
            </ul>
        `;
        categoryListContainer.appendChild(menuListItem);
    });
}
// Gọi hàm fetchDataCategory để lấy dữ liệu từ API và cập nhật HTML tương ứng
fetchDataCategory(false, '.menu-list');

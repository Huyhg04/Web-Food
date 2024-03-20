"use strict";
// import axios from "axios";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadCate(targetElementId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:3000/categories');
            const data = yield response.json();
            const categoryList = document.querySelector(targetElementId);
            if (!categoryList)
                return;
            // Xóa nội dung cũ trước khi cập nhật
            categoryList.innerHTML = '';
            data.forEach(cate => {
                const menuListItem = document.createElement('div');
                menuListItem.classList.add('menu-item');
                menuListItem.innerHTML = `
            <div class="title-menu">
                <a href="#">${cate.name}</a>
            </div>
            <ul class="sub-menu">
                ${cate.items.map(item => `<li><a href="#">${item}</a></li>`).join('')}
            </ul>
            `;
                categoryList.appendChild(menuListItem);
            });
        }
        catch (error) {
            console.error('Lỗi', error);
        }
    });
}
loadCate('.menu-list');

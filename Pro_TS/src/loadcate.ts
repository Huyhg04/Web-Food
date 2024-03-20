// import axios from "axios";

interface Category {
    _id: string;
    name: string;
    items: [];
}

async function loadCate(targetElementId: string): Promise<void> {
    try {
        const response = await fetch('http://localhost:3000/categories');
        const data: Category[] = await response.json();

        const categoryList = document.querySelector(targetElementId);
        if(!categoryList) return;

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
    } catch (error) {
        console.error('Lỗi', error);
        
    }
}

loadCate('.menu-list');
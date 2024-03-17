interface Category {
    name: string;
    items: string[];
}

async function fetchDataCategory(isAdminPage: boolean, targetElementId: string): Promise<void> {
    try {
        const response = await fetch('http://localhost:3000/categories');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const categories: Category[] = await response.json();

        if (isAdminPage) {
            // displayCategoryAdminData(categories, targetElementId); // Bạn không có hàm này, có thể là displayCategoryClientData?
            displayCategoryClientData(categories, targetElementId);
        } else {
            displayCategoryClientData(categories, targetElementId);
        }

    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

function displayCategoryClientData(categories: Category[], targetElementId: string): void {
    const categoryListContainer = document.querySelector(targetElementId);
    if (!categoryListContainer) return;

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

// // import axios from "axios";



// async function loadCate(targetElementId: string): Promise<void> {
//     try {
//         const response = await fetch('http://localhost:3000/categories');
//         const data: Category[] = await response.json();

//         const categoryList = document.querySelector(targetElementId);
//         if (!categoryList) return;

//         // Xóa nội dung cũ trước khi cập nhật
//         categoryList.innerHTML = '';

//         data.forEach(cate => {
//             const menuListItem = document.createElement('div');
//             menuListItem.classList.add('menu-item');
//             menuListItem.innerHTML = `
//                 <div class="title-menu">
//                     <a href="#" class="category-link" data-category-id="${cate._id}">${cate.name}</a>
//                 </div>
//                 <ul class="sub-menu">
//                     ${cate.items ? cate.items.map(item => `<li><a href="#">${item}</a></li>`).join('') : ''}
//                 </ul>
//             `;
//             categoryList.appendChild(menuListItem);
//         });

//         // Add click event listener to category links
//         const categoryLinks = categoryList.querySelectorAll('.category-link');
//         categoryLinks.forEach(categoryLink => {
//             categoryLink.addEventListener('click', async (event) => {
//                 event.preventDefault(); // Prevent default link behavior
//                 const categoryId = categoryLink.getAttribute('data-category-id');
//                 if (categoryId) {
//                     // Navigate to products.html with category ID as a query parameter
//                     window.location.href = `sanpham.html?category=${categoryId}`;
//                 }
//             });
//         });
//     } catch (error) {
//         console.error('Lỗi', error);
//     }
// }

// loadCate('.menu-list');

// async function loadCateSide(targetElementId: string): Promise<void> {
//     try {
//         const response = await fetch('http://localhost:3000/categories');
//         const data: Category[] = await response.json();

//         const categoryList = document.querySelector(targetElementId);
//         if (!categoryList) return;

//         // Xóa nội dung cũ trước khi cập nhật
//         categoryList.innerHTML = '';

//         // Thêm danh sách mục vào menu
//         const scrollbarItem = document.createElement('ul');
//         scrollbarItem.classList.add('scrollbar-item');

//         data.forEach(cate => {
//             const menuListItem = document.createElement('li');
//             menuListItem.classList.add('item');
//             menuListItem.innerHTML = `
//                 <a href="#" class="custcheck">
//                     <span class="name-check">${cate.name}</span>
//                     <span class="count-check">(${cate.items ? cate.items.length : 0})</span>
//                 </a>
//             `;
//             scrollbarItem.appendChild(menuListItem);
//         });

//         categoryList.appendChild(scrollbarItem);

//         // Add click event listener to category links
//         const categoryLinks = categoryList.querySelectorAll('.custcheck');
//         categoryLinks.forEach((categoryLink, index) => {
//             categoryLink.addEventListener('click', async (event) => {
//                 event.preventDefault(); // Prevent default link behavior
//                 const categoryId = data[index]._id;
//                 if (categoryId) {
//                     // Navigate to products.html with category ID as a query parameter
//                     window.location.href = `sanpham.html?category=${categoryId}`;
//                 }
//             });
//         });
//     } catch (error) {
//         console.error('Lỗi', error);
//     }
// }

// loadCateSide('#menu-side');
// // products.js

// // interface Product {
// //     _id: string;
// //     ma: string;
// //     name: string;
// //     image: string;
// //     price_now: number;
// //     price_sale: number;
// //     category_id: string;
// //     created_at: string;
// //     updated_at: string;
// // }

// async function loadProductsByCategory(): Promise<void> {
//     try {
//         const urlParams = new URLSearchParams(window.location.search);
//         const categoryId = urlParams.get('category');
//         if (!categoryId) {
//             console.error('Category ID not found in URL');
//             return;
//         }

//         const response = await fetch(`http://localhost:3000/products/cate/${categoryId}`);
//         const products: Product[] = await response.json();

//         const productsTableBody = document.getElementById('productListCate') as HTMLElement;
//         // Clear existing content
//         productsTableBody.innerHTML = '';

//         // Check if there are products
//         if (products.length === 0) {
//             productsTableBody.textContent = 'Chưa có sản phẩm.';
//             return;
//         }

//         // Populate table with products
//         products.forEach(item => {
//             const obj = JSON.stringify(item);
//             const productDiv = document.createElement('div');
//             productDiv.classList.add('col-md-3');
//             productDiv.innerHTML = `
//                 <div class="card border-success-subtle noi-bat">
//                     <div class="card__img">
//                         <a href="#"><img src="/asset/img/${item.image}" alt=""></a>
//                     </div>
//                     <div class="card-body text-center">
//                         <h5 class="card-title"><a href="">${item.name}</a></h5>
//                         <p class="card-price">
//                             <span class="price-cost">${item.price_now}</span>
//                             <span class="price-sale">${item.price_sale}</span>
//                         </p>
//                         <button class="btn-card_buy" onclick="addCart(${obj})">Mua Ngay</button>
//                         <button class="btn-card_view" onclick="showDetail(${obj})">Xem</button>
//                     </div>
//                 </div>
//             `;
//             productsTableBody.appendChild(productDiv);
//         });
//     } catch (error) {
//         console.error('Error loading products', error);
//     }
// }



// loadProductsByCategory();

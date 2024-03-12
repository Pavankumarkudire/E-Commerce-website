const productsAPI = [
    {
        id: 1,
        name: "Red T-shirt",
        price: 999,
        img: "./images/product-1.jpg",
    },
    {
        id: 2,
        name: "HRX shoe",
        price: 1499,
        img: "./images/product-2.jpg",
    },
    {
        id: 3,
        name: "Track Pant",
        price: 1499,
        img: "./images/product-3.jpg",
    },
    {
        id: 4,
        name: "Black T-shirt",
        price: 1999,
        img: "./images/product-4.jpg",
    },
    { id: 5, name: "Shoe", price: 3499, img: "./images/product-5.jpg" },
    {
        id: 6,
        name: "Puma Black t-Shirt",
        price: 599,
        img: "./images/product-6.jpg",
    },
    { id: 7, name: "Sacks", price: 699, img: "./images/product-7.jpg" },
    { id: 8, name: "Watch", price: 199, img: "./images/product-8.jpg" },
    { id: 9, name: "Watch", price: 299, img: "./images/product-9.jpg" },
    {
        id: 10,
        name: "Running Shoe",
        price: 499,
        img: "./images/product-10.jpg",
    },
    { id: 11, name: "Lofers", price: 999, img: "./images/product-11.jpg" },
    {
        id: 12,
        name: "Track Pant Black",
        price: 399,
        img: "./images/product-12.jpg",
    },
    {
        id: 13,
        name: "Smart Watch",
        price: 199,
        img: "./images/newproduct.jpg",
    },
    {
        id: 14,
        name: "Safari Bag",
        price: 299,
        img: "./images/newproduct-1.jpg",
    },
    { id: 15, name: "Shoe", price: 399, img: "./images/newproduct-2.jpg" },
    {
        id: 16,
        name: "Goggles",
        price: 599,
        img: "./images/newproduct-3.jpg",
    },
    {
        id: 17,
        name: "Dress",
        price: 599,
        img: "./images/newproduct-4.jpg",
    },
    {
        id: 18,
        name: "Dress",
        price: 599,
        img: "./images/newproduct-5.jpg",
    },
    {
        id: 19,
        name: "Goggles",
        price: 599,
        img: "./images/newproduct-3.jpg",
    },
];


  // document.addEventListener('DOMContentLoaded', function () {
    let productsHolder = document.getElementById("productsHolder");

    function addToCart(button) {
        const productId = button.dataset.productId;
        const selectedProduct = productsAPI.find(product => product.id == productId);


        if (selectedProduct) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingProduct = cart.find(item => item.id === selectedProduct.id);
            alert("Product is added to cart");
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                selectedProduct.quantity = 1;
                cart.push(selectedProduct);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    productsAPI.forEach((product) => {
        const productDiv = document.createElement("div");

        productDiv.innerHTML =`
        <div class="product-img">
            <img src="${product.img}" alt="${product.name}">
            <p class="productName">${product.name}</p>
            <p class="productPrice">₹${product.price}</p>
            <div class="cart-action">
                <input type="submit" value="Add to Cart" class="add-to-cart" data-product-id="${product.id}" onClick="addToCart(this)" />
            </div>
        </div>
    `;

        productsHolder.appendChild(productDiv);
    });
  

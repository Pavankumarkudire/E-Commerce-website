
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
];


let CategoryHolder = document.getElementById("CategoryHolder");

const newProducts = productsAPI.filter(product => product.img.match("newproduct"));
console.log("new", newProducts);

for (let i = 0; i < newProducts.length; i++) {
    let product = newProducts[i];

    let productsDiv = document.createElement("div")
    let productImage = document.createElement("img");

    productImage.src = product.img;
    productImage.alt = product.name;

    productsDiv.appendChild(productImage);

    productsDiv.addEventListener('click', function () {
        window.location.href = 'products.html';
    });

    productsDiv.innerHTML += `<div><button>${product.name}</button></div> `;

    CategoryHolder.appendChild(productsDiv);
}

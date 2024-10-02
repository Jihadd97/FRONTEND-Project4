// Array of products
let products = [
    { id: 1, name: "Uliptz Wireless Bluetooth Headphones", price: "$16", category: "Electronics", imageUrl: "images/WirelessHeadphones.jpg" },
    { id: 2, name: "Women Sneakers", price: "$49", category: "Fashion", imageUrl: "images/Sneakers.jpg" },
    { id: 3, name: "Dell Inspiron", price: "$485", category: "Computers", imageUrl: "images/Laptop.jpg" },
    { id: 4, name: "Samsung Galaxy A05s", price: "$165", category: "Mobile Phones", imageUrl: "images/Smartphone.jpg" },
    { id: 5, name: "AGPTEK Women Smart Watch", price: "$149", category: "Electronics", imageUrl: "images/smartwatch.jpg" },
    { id: 6, name: "Laptop Backpack", price: "$399", category: "Fashion", imageUrl: "images/Backpack.jpg" },
    { id: 7, name: "Apple iPhone 11", price: "$200", category: "Mobile Phones", imageUrl: "images/Smartphone2.jpg" },
    { id: 8, name: "HP 14 Laptop", price: "$169", category: "Computers", imageUrl: "images/Laptop2.jpg" },
    { id: 9, name: "Canon Mirrorless Camera", price: "$450", category: "Electronics", imageUrl: "images/camera.jpg" }
];

// Display products on the homepage
function displayProducts(filteredProducts = products) {
    let productList = document.querySelector('#product-list');
    productList.innerHTML = '';

    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="col-12 col-sm-6 col-md-4 mb-4">
                <div class="product_item">
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h4>${product.name}</h4>
                    <p>Price : ${product.price}</p>
                    <p>Category : ${product.category}</p>
                    <div class="button-container">
                        <button class="btn-cart" data-product-id="${product.id}" onclick="addToCart(${product.id})">
                        Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}
// Function to handle search
function handleSearch() {
    const filter = searchFilter.value;
    const query = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        if (filter === 'name') {
            return product.name.toLowerCase().startsWith(query);
        } else if (filter === 'category') {
            return product.category.toLowerCase().startsWith(query);
        }
    });

    displayProducts(filteredProducts);
}

// Event listeners
const searchFilter = document.getElementById('searchFilter');
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', handleSearch);
searchFilter.addEventListener('change', handleSearch);

// Handle Add to Cart
function addToCart(productId) {
    let selectedProduct = products.find(product => product.id === productId);

    // Check if products are already in the cart
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(selectedProduct);

    // Save the cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the button to reflect the "Added to Cart" state
    let button = document.querySelector(`.btn-cart[data-product-id="${productId}"]`);
    if (button) {
        button.innerHTML = "Added to Cart"; // Change the button text
        button.classList.add('added'); // Apply the added class for styling
        button.disabled = true; // Optionally disable the button after adding
    }
}



// Handle Favorite (Like)
function toggleFavorite(productId) {
    let favoriteItems = JSON.parse(localStorage.getItem('favoriteItems')) || [];
    const index = favoriteItems.indexOf(productId);

    if (index > -1) {
        // Product is already in favorites, remove it
        favoriteItems.splice(index, 1);
    } else {
        // Add product to favorites
        favoriteItems.push(productId);
    }

    // Save to localStorage
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));

    // Update UI
    const likeButton = document.querySelector(`.like-btn[onclick="toggleFavorite(${productId})"]`);
    if (likeButton) {
        likeButton.classList.toggle('liked');
    }
    displayProducts();
}

// Initialize
displayProducts();

// Logout functionality
document.querySelector("#logout-button").addEventListener("click", function () {
    // localStorage.clear();
    alert("Logged out successfully");
    window.location = "index.html";
});
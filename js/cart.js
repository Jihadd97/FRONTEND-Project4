let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let cartContainer = document.querySelector("#cart-items");
let totalPrice = document.querySelector("#total-price");

// Render cart items
function displayCartItems() {
    cartContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach(item => {
        cartContainer.innerHTML += `
            <div class="product_item">
                <img src="${item.imageUrl}" alt="${item.name}">
                <div class="product_desc">
                    <h3>${item.name}</h3>
                    <p>Color: ${item.color}</p>
                    <p>Price: $${item.price}</p>
                </div>
            </div>
        `;
        total += item.price;
    });

    totalPrice.textContent = total;
}

// Initialize cart
displayCartItems();


document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1", price: 29.99 },
        { id: 2, name: "Product 2", price: 14.99 },
        { id: 3, name: "Product 3", price: 9.99 },
    ]

    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const productList = document.getElementById("product-list")
    const cartItems = document.getElementById("cart-item")
    const emptyCartMessage = document.getElementById("empty-cart")
    const cartTotalMessage = document.getElementById("cart-total")
    const totalPriceMessage = document.getElementById("total-price")
    const checkoutBtn = document.getElementById("checkout-btn")

    products.forEach(product => {
        const productDiv = document.createElement('div')
        productDiv.classList.add("product")
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to Cart</button>
        `
        productList.appendChild(productDiv)
    })

    productList.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const productID = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productID);
            console.log(product);
            addToCart(product)
        }
    })



    function addToCart(product) {
        cart.push(product)
        saveCart();
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = ""
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add("hidden")
            cartTotalMessage.classList.remove("hidden")

            cart.forEach((item, index) => {
                totalPrice += item.price
                // console.log(totalPrice)

                const cartItem = document.createElement("div")
                cartItem.innerHTML = `
                    <span>${item.name} - $${item.price.toFixed(2)}</span>
                    <button data-index="${index}">Remove</button>
                `

                cartItem.classList.add("cartItem")

                cartItems.appendChild(cartItem);

                totalPriceMessage.textContent = `$${totalPrice}`
            })


        } else {
            emptyCartMessage.classList.remove("hidden")
            totalPriceMessage.textContent = `$0.00`
        }
    }

    checkoutBtn.addEventListener("click", () => {
        cart.length = 0;
        alert("Checkout successfully!")
        saveCart()
        renderCart();
    })

    cartItems.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const index = parseInt(e.target.getAttribute("data-index"));
            cart.splice(index, 1)
            saveCart()
            renderCart()
        }
    })

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart))
    }


    renderCart()

});
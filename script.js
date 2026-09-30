/* ==================================================
   NOVA STORE 2.0
   PURE JAVASCRIPT
================================================== */


/* ==================================================
   PRODUCT DATABASE
================================================== */

const products = [

    {
        id: 1,
        name: "Oversize T-Shirt",
        category: "fashion",
        price: 89000,
        oldPrice: 119000,
        rating: 4.9,
        sold: 120,
        icon: "👕",
        description:
            "T-shirt oversize dengan bahan nyaman untuk aktivitas sehari-hari."
    },

    {
        id: 2,
        name: "Premium Hoodie",
        category: "fashion",
        price: 159000,
        oldPrice: 199000,
        rating: 4.8,
        sold: 95,
        icon: "🧥",
        description:
            "Hoodie premium dengan desain minimalis dan nyaman digunakan."
    },

    {
        id: 3,
        name: "Basic Cargo Pants",
        category: "fashion",
        price: 179000,
        oldPrice: 229000,
        rating: 4.7,
        sold: 74,
        icon: "👖",
        description:
            "Celana cargo dengan desain modern dan cocok untuk gaya casual."
    },

    {
        id: 4,
        name: "Wireless Headphone",
        category: "elektronik",
        price: 249000,
        oldPrice: 329000,
        rating: 4.9,
        sold: 210,
        icon: "🎧",
        description:
            "Headphone wireless dengan desain modern untuk musik dan hiburan."
    },

    {
        id: 5,
        name: "Smart Watch Pro",
        category: "elektronik",
        price: 399000,
        oldPrice: 499000,
        rating: 4.8,
        sold: 156,
        icon: "⌚",
        description:
            "Smartwatch modern dengan tampilan stylish untuk aktivitas sehari-hari."
    },

    {
        id: 6,
        name: "Bluetooth Speaker",
        category: "elektronik",
        price: 179000,
        oldPrice: 249000,
        rating: 4.7,
        sold: 132,
        icon: "🔊",
        description:
            "Speaker portable dengan desain ringkas dan mudah dibawa."
    },

    {
        id: 7,
        name: "Urban Backpack",
        category: "aksesoris",
        price: 219000,
        oldPrice: 279000,
        rating: 4.9,
        sold: 88,
        icon: "🎒",
        description:
            "Backpack minimalis untuk sekolah, kuliah, dan aktivitas harian."
    },

    {
        id: 8,
        name: "Minimalist Watch",
        category: "aksesoris",
        price: 199000,
        oldPrice: 249000,
        rating: 4.8,
        sold: 61,
        icon: "⌚",
        description:
            "Jam tangan minimalis dengan desain elegan."
    },

    {
        id: 9,
        name: "Sling Bag",
        category: "aksesoris",
        price: 129000,
        oldPrice: 169000,
        rating: 4.6,
        sold: 105,
        icon: "👜",
        description:
            "Sling bag compact untuk membawa barang penting."
    },

    {
        id: 10,
        name: "Premium Cap",
        category: "aksesoris",
        price: 79000,
        oldPrice: 99000,
        rating: 4.7,
        sold: 143,
        icon: "🧢",
        description:
            "Topi casual dengan desain simpel dan mudah dipadukan."
    },

    {
        id: 11,
        name: "Street Sneakers",
        category: "sepatu",
        price: 299000,
        oldPrice: 399000,
        rating: 4.9,
        sold: 190,
        icon: "👟",
        description:
            "Sneakers streetwear dengan desain modern dan nyaman."
    },

    {
        id: 12,
        name: "Running Shoes",
        category: "sepatu",
        price: 329000,
        oldPrice: 449000,
        rating: 4.8,
        sold: 127,
        icon: "👟",
        description:
            "Sepatu olahraga ringan untuk aktivitas dan olahraga ringan."
    }

];


/* ==================================================
   STATE
================================================== */

let cart =
    JSON.parse(
        localStorage.getItem("nova_cart")
    ) || [];

let orders =
    JSON.parse(
        localStorage.getItem("nova_orders")
    ) || [];

let currentCategory = "all";

let searchText = "";

let discountValue = 0;

let shippingCost = 10000;


/* ==================================================
   DOM
================================================== */

const productGrid =
    document.getElementById("productGrid");

const productTotal =
    document.getElementById("productTotal");

const searchInput =
    document.getElementById("searchInput");

const sortSelect =
    document.getElementById("sortSelect");

const categories =
    document.querySelectorAll(".category");

const cartBtn =
    document.getElementById("cartBtn");

const cartPanel =
    document.getElementById("cartPanel");

const closeCart =
    document.getElementById("closeCart");

const overlay =
    document.getElementById("overlay");

const cartItems =
    document.getElementById("cartItems");

const emptyCart =
    document.getElementById("emptyCart");

const cartCount =
    document.getElementById("cartCount");

const wishlistCount =
    document.getElementById("wishlistCount");

const subtotal =
    document.getElementById("subtotal");

const discount =
    document.getElementById("discount");

const shipping =
    document.getElementById("shipping");

const grandTotal =
    document.getElementById("grandTotal");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const clearCartBtn =
    document.getElementById("clearCartBtn");

const couponInput =
    document.getElementById("couponInput");

const couponBtn =
    document.getElementById("couponBtn");

const couponMessage =
    document.getElementById("couponMessage");

const productModal =
    document.getElementById("productModal");

const productDetailContent =
    document.getElementById(
        "productDetailContent"
    );

const closeProduct =
    document.getElementById("closeProduct");

const checkoutModal =
    document.getElementById(
        "checkoutModal"
    );

const closeCheckout =
    document.getElementById(
        "closeCheckout"
    );

const checkoutForm =
    document.getElementById(
        "checkoutForm"
    );

const checkoutTotal =
    document.getElementById(
        "checkoutTotal"
    );

const shippingMethod =
    document.getElementById(
        "shippingMethod"
    );

const successModal =
    document.getElementById(
        "successModal"
    );

const successClose =
    document.getElementById(
        "successClose"
    );

const orderNumber =
    document.getElementById(
        "orderNumber"
    );

const historyBtn =
    document.getElementById(
        "historyBtn"
    );

const historyModal =
    document.getElementById(
        "historyModal"
    );

const closeHistory =
    document.getElementById(
        "closeHistory"
    );

const orderHistory =
    document.getElementById(
        "orderHistory"
    );

const toast =
    document.getElementById("toast");

const toastText =
    document.getElementById(
        "toastText"
    );

const toastIcon =
    document.getElementById(
        "toastIcon"
    );

const darkBtn =
    document.getElementById("darkBtn");

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

const flashGrid =
    document.getElementById(
        "flashGrid"
    );

const countdown =
    document.getElementById(
        "countdown"
    );


/* ==================================================
   RUPIAH
================================================== */

function rupiah(number) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(number);

}


/* ==================================================
   SAVE DATA
================================================== */

function saveCart() {

    localStorage.setItem(
        "nova_cart",
        JSON.stringify(cart)
    );

}


function saveOrders() {

    localStorage.setItem(
        "nova_orders",
        JSON.stringify(orders)
    );

}


/* ==================================================
   TOAST
================================================== */

let toastTimer;

function showToast(
    message,
    icon = "✓"
) {

    toastText.textContent =
        message;

    toastIcon.textContent =
        icon;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* ==================================================
   WISHLIST
================================================== */

function getWishlist() {

    return JSON.parse(
        localStorage.getItem(
            "nova_wishlist"
        )
    ) || [];

}


function saveWishlist(list) {

    localStorage.setItem(
        "nova_wishlist",
        JSON.stringify(list)
    );

    updateWishlistCount();

}


function isFavorite(id) {

    return getWishlist()
        .includes(id);

}


function toggleWishlist(id) {

    let list =
        getWishlist();

    if (list.includes(id)) {

        list =
            list.filter(
                item => item !== id
            );

        showToast(
            "Dihapus dari wishlist",
            "♡"
        );

    } else {

        list.push(id);

        showToast(
            "Ditambahkan ke wishlist",
            "♥"
        );

    }

    saveWishlist(list);

    renderProducts();

}


function updateWishlistCount() {

    wishlistCount.textContent =
        getWishlist().length;

}


/* ==================================================
   RENDER PRODUCTS
================================================== */

function renderProducts() {

    let result =
        products.filter(product => {

            const categoryOK =
                currentCategory === "all" ||
                product.category ===
                currentCategory;

            const searchOK =
                product.name
                    .toLowerCase()
                    .includes(
                        searchText
                            .toLowerCase()
                    );

            return categoryOK &&
                searchOK;

        });


    const sort =
        sortSelect.value;


    if (sort === "low") {

        result.sort(
            (a,b) => a.price - b.price
        );

    }

    if (sort === "high") {

        result.sort(
            (a,b) => b.price - a.price
        );

    }

    if (sort === "rating") {

        result.sort(
            (a,b) => b.rating - a.rating
        );

    }

    if (sort === "name") {

        result.sort(
            (a,b) =>
                a.name.localeCompare(
                    b.name
                )
        );

    }


    productGrid.innerHTML = "";

    productTotal.textContent =
        `${result.length} produk`;


    if (!result.length) {

        document
            .getElementById(
                "emptyProduct"
            )
            .classList.remove(
                "hidden"
            );

        return;

    }


    document
        .getElementById(
            "emptyProduct"
        )
        .classList.add(
            "hidden"
        );


    result.forEach(product => {

        const card =
            document.createElement("article");

        card.className =
            "product-card";


        const favorite =
            isFavorite(product.id);


        card.innerHTML = `

            <button
                class="product-favorite
                ${favorite ? "active" : ""}"
                onclick="
                    toggleWishlist(${product.id})
                "
            >
                ${favorite ? "♥" : "♡"}
            </button>

            <div
                class="product-image"
                onclick="
                    showProductDetail(${product.id})
                "
            >
                ${product.icon}
            </div>

            <div class="product-content">

                <div class="product-category">
                    ${product.category}
                </div>

                <h3 class="product-name">
                    ${product.name}
                </h3>

                <div class="rating">
                    ⭐
                    <span>${product.rating}</span>
                    · ${product.sold} terjual
                </div>

                <div class="price-row">

                    <strong class="price">
                        ${rupiah(product.price)}
                    </strong>

                    <button
                        class="add-button"
                        onclick="
                            addToCart(${product.id})
                        "
                    >
                        +
                    </button>

                </div>

            </div>
        `;


        productGrid.appendChild(card);

    });

}


/* ==================================================
   FLASH SALE
================================================== */

function renderFlashSale() {

    const saleProducts =
        products.slice(0, 4);


    flashGrid.innerHTML = "";


    saleProducts.forEach(product => {

        const salePrice =
            Math.round(
                product.price * .8
            );


        const card =
            document.createElement("div");

        card.className =
            "flash-card";


        card.innerHTML = `

            <span class="sale-tag">
                -20%
            </span>

            <div class="flash-image">
                ${product.icon}
            </div>

            <h3>${product.name}</h3>

            <p class="old-price">
                ${rupiah(product.price)}
            </p>

            <p class="sale-price">
                ${rupiah(salePrice)}
            </p>

            <button
                onclick="
                    addFlashProduct(${product.id})
                "
            >
                + Tambah ke Keranjang
            </button>

        `;


        flashGrid.appendChild(card);

    });

}


function addFlashProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1,
            salePrice:
                Math.round(
                    product.price * .8
                )
        });

    }


    saveCart();

    updateCart();

    openCart();

    showToast(
        "Produk flash sale ditambahkan",
        "🔥"
    );

}


/* ==================================================
   COUNTDOWN
================================================== */

let saleEnd =
    localStorage.getItem(
        "nova_sale_end"
    );


if (!saleEnd) {

    saleEnd =
        Date.now() +
        24 * 60 * 60 * 1000;

    localStorage.setItem(
        "nova_sale_end",
        saleEnd
    );

}


function updateCountdown() {

    let distance =
        Number(saleEnd) -
        Date.now();


    if (distance <= 0) {

        saleEnd =
            Date.now() +
            24 * 60 * 60 * 1000;

        localStorage.setItem(
            "nova_sale_end",
            saleEnd
        );

        distance =
            Number(saleEnd) -
            Date.now();

    }


    const hours =
        Math.floor(
            distance /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    countdown.textContent =
        `${String(hours).padStart(2,"0")}:
         ${String(minutes).padStart(2,"0")}:
         ${String(seconds).padStart(2,"0")}`;
}


setInterval(
    updateCountdown,
    1000
);

updateCountdown();


/* ==================================================
   ADD CART
================================================== */

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    saveCart();

    updateCart();

    showToast(
        `${product.name} ditambahkan`,
        "🛒"
    );

}


/* ==================================================
   UPDATE CART
================================================== */

function updateCart() {

    cartItems.innerHTML = "";

    let totalQuantity = 0;

    let total = 0;


    cart.forEach(item => {

        totalQuantity +=
            item.quantity;


        const price =
            item.salePrice ||
            item.price;


        total +=
            price * item.quantity;


        const div =
            document.createElement("div");

        div.className =
            "cart-item";


        div.innerHTML = `

            <div class="cart-image">
                ${item.icon}
            </div>

            <div>

                <div class="cart-name">
                    ${item.name}
                </div>

                <div class="cart-price">
                    ${rupiah(price)}
                </div>

                <div class="quantity">

                    <button
                        onclick="
                            changeQuantity(
                                ${item.id},
                                -1
                            )
                        "
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        onclick="
                            changeQuantity(
                                ${item.id},
                                1
                            )
                        "
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-item"
                onclick="
                    removeCart(${item.id})
                "
            >
                🗑️
            </button>

        `;


        cartItems.appendChild(div);

    });


    cartCount.textContent =
        totalQuantity;


    if (cart.length === 0) {

        emptyCart.style.display =
            "flex";

    } else {

        emptyCart.style.display =
            "none";

    }


    updateSummary(total);

}


/* ==================================================
   SUMMARY
================================================== */

function updateSummary(total) {

    let shippingValue =
        cart.length
            ? shippingCost
            : 0;


    let finalDiscount =
        Math.min(
            discountValue,
            total
        );


    const final =
        Math.max(
            0,
            total -
            finalDiscount +
            shippingValue
        );


    subtotal.textContent =
        rupiah(total);

    discount.textContent =
        `-${rupiah(finalDiscount)}`;

    shipping.textContent =
        rupiah(shippingValue);

    grandTotal.textContent =
        rupiah(final);


    checkoutTotal.textContent =
        rupiah(final);

}


/* ==================================================
   QUANTITY
================================================== */

function changeQuantity(
    id,
    amount
) {

    const item =
        cart.find(
            item => item.id === id
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }


    saveCart();

    updateCart();

}


/* ==================================================
   REMOVE
================================================== */

function removeCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );


    saveCart();

    updateCart();

    showToast(
        "Produk dihapus",
        "🗑️"
    );

}


/* ==================================================
   CLEAR
================================================== */

clearCartBtn.addEventListener(
    "click",
    () => {

        if (!cart.length) return;


        if (
            confirm(
                "Kosongkan semua keranjang?"
            )
        ) {

            cart = [];

            discountValue = 0;

            saveCart();

            updateCart();

            showToast(
                "Keranjang dikosongkan",
                "✓"
            );

        }

    }
);


/* ==================================================
   COUPON
================================================== */

couponBtn.addEventListener(
    "click",
    () => {

        const code =
            couponInput.value
                .trim()
                .toUpperCase();


        if (!cart.length) {

            couponMessage.textContent =
                "Tambahkan produk terlebih dahulu.";

            return;

        }


        if (code === "NOVA10") {

            let total = 0;

            cart.forEach(item => {

                total +=
                    (item.salePrice ||
                    item.price) *
                    item.quantity;

            });


            discountValue =
                Math.round(
                    total * .10
                );


            couponMessage.textContent =
                "✓ Voucher NOVA10 berhasil digunakan.";

            couponMessage.style.color =
                "green";


            updateCart();


            showToast(
                "Voucher 10% aktif",
                "🎟️"
            );

        } else if (
            code === "HEMAT20"
        ) {

            discountValue = 20000;


            couponMessage.textContent =
                "✓ Potongan Rp20.000 berhasil.";

            couponMessage.style.color =
                "green";


            updateCart();


        } else {

            discountValue = 0;


            couponMessage.textContent =
                "Kode voucher tidak valid.";

            couponMessage.style.color =
                "red";


            updateCart();

        }

    }
);


/* ==================================================
   CART PANEL
================================================== */

function openCart() {

    cartPanel.classList.add(
        "open"
    );

    overlay.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


function closeCartPanel() {

    cartPanel.classList.remove(
        "open"
    );

    overlay.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


cartBtn.addEventListener(
    "click",
    openCart
);


closeCart.addEventListener(
    "click",
    closeCartPanel
);


overlay.addEventListener(
    "click",
    closeCartPanel
);


/* ==================================================
   SEARCH
================================================== */

searchInput.addEventListener(
    "input",
    event => {

        searchText =
            event.target.value;

        renderProducts();

    }
);


/* ==================================================
   SORT
================================================== */

sortSelect.addEventListener(
    "change",
    renderProducts
);


/* ==================================================
   CATEGORY
================================================== */

categories.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            categories.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            button.classList.add(
                "active"
            );


            currentCategory =
                button.dataset.category;


            renderProducts();

        }
    );

});


/* ==================================================
   PRODUCT DETAIL
================================================== */

function showProductDetail(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    productDetailContent.innerHTML = `

        <div class="product-detail-content">

            <div class="detail-image">
                ${product.icon}
            </div>

            <div class="detail-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <h2>
                    ${product.name}
                </h2>

                <div class="detail-rating">
                    ⭐ ${product.rating}
                    · ${product.sold} terjual
                </div>

                <div class="detail-price">
                    ${rupiah(product.price)}
                </div>

                <p class="detail-description">
                    ${product.description}
                </p>

                <button
                    class="btn-primary full"
                    onclick="
                        addToCart(${product.id});
                        closeProductModal();
                    "
                >
                    🛒 Tambahkan ke Keranjang
                </button>

            </div>

        </div>

    `;


    productModal.classList.add(
        "show"
    );

}


function closeProductModal() {

    productModal.classList.remove(
        "show"
    );

}


closeProduct.addEventListener(
    "click",
    closeProductModal
);


/* ==================================================
   CHECKOUT
================================================== */

checkoutBtn.addEventListener(
    "click",
    () => {

        if (!cart.length) {

            showToast(
                "Keranjang masih kosong",
                "🛒"
            );

            return;

        }


        checkoutModal.classList.add(
            "show"
        );

        updateCheckoutTotal();

    }
);


function updateCheckoutTotal() {

    let total = 0;


    cart.forEach(item => {

        total +=
            (item.salePrice ||
            item.price) *
            item.quantity;

    });


    const final =
        Math.max(
            0,
            total -
            Math.min(
                discountValue,
                total
            ) +
            Number(shippingMethod.value)
        );


    checkoutTotal.textContent =
        rupiah(final);

}


shippingMethod.addEventListener(
    "change",
    () => {

        shippingCost =
            Number(
                shippingMethod.value
            );

        updateCheckoutTotal();

        updateCart();

    }
);


closeCheckout.addEventListener(
    "click",
    () => {

        checkoutModal.classList.remove(
            "show"
        );

    }
);


/* ==================================================
   SUBMIT ORDER
================================================== */

checkoutForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        if (!cart.length) return;


        const name =
            document.getElementById(
                "customerName"
            ).value.trim();


        const phone =
            document.getElementById(
                "customerPhone"
            ).value.trim();


        const address =
            document.getElementById(
                "customerAddress"
            ).value.trim();


        const payment =
            document.getElementById(
                "paymentMethod"
            ).value;


        const courier =
            shippingMethod.options[
                shippingMethod.selectedIndex
            ].text;


        let total = 0;


        cart.forEach(item => {

            total +=
                (item.salePrice ||
                item.price) *
                item.quantity;

        });


        const finalDiscount =
            Math.min(
                discountValue,
                total
            );


        const finalTotal =
            total -
            finalDiscount +
            shippingCost;


        const orderId =
            "NOVA-" +
            Date.now()
                .toString()
                .slice(-8);


        const order = {

            id: orderId,

            date:
                new Date()
                    .toLocaleString(
                        "id-ID"
                    ),

            name,

            phone,

            address,

            payment,

            courier,

            items:
                cart.map(item => ({
                    name: item.name,
                    quantity: item.quantity
                })),

            total: finalTotal,

            status: "Diproses"

        };


        orders.unshift(order);

        saveOrders();


        orderNumber.textContent =
            orderId;


        cart = [];

        discountValue = 0;

        saveCart();

        updateCart();


        checkoutForm.reset();


        checkoutModal.classList.remove(
            "show"
        );

        closeCartPanel();


        successModal.classList.add(
            "show"
        );


        showToast(
            "Pesanan berhasil dibuat",
            "✓"
        );

    }
);


/* ==================================================
   SUCCESS
================================================== */

successClose.addEventListener(
    "click",
    () => {

        successModal.classList.remove(
            "show"
        );

    }
);


/* ==================================================
   ORDER HISTORY
================================================== */

historyBtn.addEventListener(
    "click",
    () => {

        renderHistory();

        historyModal.classList.add(
            "show"
        );

    }
);


closeHistory.addEventListener(
    "click",
    () => {

        historyModal.classList.remove(
            "show"
        );

    }
);


function renderHistory() {

    orderHistory.innerHTML = "";


    if (!orders.length) {

        orderHistory.innerHTML = `

            <div class="empty-state">
                <div>📦</div>

                <h3>
                    Belum ada pesanan
                </h3>

                <p>
                    Pesanan yang kamu buat
                    akan muncul di sini.
                </p>
            </div>

        `;

        return;

    }


    orders.forEach(order => {

        const div =
            document.createElement("div");

        div.className =
            "order-card";


        const items =
            order.items
                .map(
                    item =>
                        `${item.name} × ${item.quantity}`
                )
                .join(", ");


        div.innerHTML = `

            <div class="order-card-head">

                <div>
                    <b>${order.id}</b>

                    <br>

                    <small>
                        ${order.date}
                    </small>
                </div>

                <span class="order-status">
                    ${order.status}
                </span>

            </div>

            <div class="order-items">
                ${items}
            </div>

            <div class="order-total">

                <span>Total</span>

                <b>
                    ${rupiah(order.total)}
                </b>

            </div>

        `;


        orderHistory.appendChild(div);

    });

}


/* ==================================================
   DARK MODE
================================================== */

const savedTheme =
    localStorage.getItem(
        "nova_theme"
    );


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark"
    );

    darkBtn.textContent = "☀️";

}


darkBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );


        const isDark =
            document.body.classList.contains(
                "dark"
            );


        localStorage.setItem(
            "nova_theme",
            isDark
                ? "dark"
                : "light"
        );


        darkBtn.textContent =
            isDark ? "☀️" : "🌙";

    }
);


/* ==================================================
   MOBILE MENU
================================================== */

menuBtn.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "show"
        );

    }
);


document
    .querySelectorAll(
        "#navMenu a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "show"
                );

            }
        );

    });


/* ==================================================
   INITIALIZE
================================================== */

renderProducts();

renderFlashSale();

updateCart();

updateWishlistCount();

updateCountdown();
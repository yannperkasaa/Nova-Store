// =====================================================
// NOVA STORE
// JavaScript versi baru
// =====================================================


// =====================================================
// DATA PRODUK
// =====================================================

const PRODUCTS = [

    {
        id: 1,
        name: "Nova Hoodie",
        category: "Fashion",
        price: 149000,
        oldPrice: 199000,
        rating: 4.9,
        sold: 320,
        icon: "🧥",
        description:
            "Hoodie nyaman dengan desain modern."
    },

    {
        id: 2,
        name: "Nova Sneakers",
        category: "Fashion",
        price: 299000,
        oldPrice: 399000,
        rating: 4.8,
        sold: 270,
        icon: "👟",
        description:
            "Sneakers casual untuk aktivitas sehari-hari."
    },

    {
        id: 3,
        name: "Smart Watch",
        category: "Elektronik",
        price: 399000,
        oldPrice: 499000,
        rating: 4.7,
        sold: 215,
        icon: "⌚",
        description:
            "Smart watch modern dengan berbagai fitur."
    },

    {
        id: 4,
        name: "Wireless Earbuds",
        category: "Elektronik",
        price: 249000,
        oldPrice: 329000,
        rating: 4.8,
        sold: 450,
        icon: "🎧",
        description:
            "Earbuds wireless dengan suara jernih."
    },

    {
        id: 5,
        name: "Nova Backpack",
        category: "Fashion",
        price: 189000,
        oldPrice: 249000,
        rating: 4.9,
        sold: 190,
        icon: "🎒",
        description:
            "Tas stylish untuk sekolah dan aktivitas."
    },

    {
        id: 6,
        name: "Sunglasses",
        category: "Aksesoris",
        price: 99000,
        oldPrice: 149000,
        rating: 4.6,
        sold: 175,
        icon: "🕶️",
        description:
            "Kacamata stylish dengan desain minimalis."
    },

    {
        id: 7,
        name: "Mechanical Keyboard",
        category: "Elektronik",
        price: 499000,
        oldPrice: 599000,
        rating: 4.9,
        sold: 160,
        icon: "⌨️",
        description:
            "Keyboard mechanical untuk gaming dan kerja."
    },

    {
        id: 8,
        name: "Desk Lamp",
        category: "Lifestyle",
        price: 129000,
        oldPrice: 179000,
        rating: 4.7,
        sold: 140,
        icon: "💡",
        description:
            "Lampu meja minimalis untuk belajar."
    },

    {
        id: 9,
        name: "Coffee Tumbler",
        category: "Lifestyle",
        price: 119000,
        oldPrice: 159000,
        rating: 4.8,
        sold: 260,
        icon: "🥤",
        description:
            "Tumbler praktis untuk minuman favorit."
    },

    {
        id: 10,
        name: "Phone Case",
        category: "Aksesoris",
        price: 79000,
        oldPrice: 99000,
        rating: 4.6,
        sold: 510,
        icon: "📱",
        description:
            "Case HP stylish dan ringan."
    },

    {
        id: 11,
        name: "Gaming Mouse",
        category: "Elektronik",
        price: 199000,
        oldPrice: 259000,
        rating: 4.8,
        sold: 310,
        icon: "🖱️",
        description:
            "Mouse gaming responsif dengan desain keren."
    },

    {
        id: 12,
        name: "Minimal Wallet",
        category: "Aksesoris",
        price: 89000,
        oldPrice: 129000,
        rating: 4.7,
        sold: 230,
        icon: "👛",
        description:
            "Dompet minimalis dan praktis."
    }

];


// =====================================================
// DATABASE LOCAL
// =====================================================

function getData(key, fallback) {

    try {

        const data =
            localStorage.getItem(key);

        if (!data) {
            return fallback;
        }

        return JSON.parse(data);

    } catch (error) {

        console.log(
            "Data localStorage rusak:",
            key
        );

        return fallback;
    }
}


let users =
    getData("nova_users_v2", []);


let currentUser =
    getData("nova_user_v2", null);


let carts =
    getData("nova_carts_v2", {});


let wishlists =
    getData("nova_wishlists_v2", {});


let orders =
    getData("nova_orders_v2", []);


let discount = 0;

let currentPaymentOrder = null;

let authMode = "login";


// =====================================================
// SAVE DATABASE
// =====================================================

function saveDatabase() {

    localStorage.setItem(
        "nova_users_v2",
        JSON.stringify(users)
    );

    localStorage.setItem(
        "nova_user_v2",
        JSON.stringify(currentUser)
    );

    localStorage.setItem(
        "nova_carts_v2",
        JSON.stringify(carts)
    );

    localStorage.setItem(
        "nova_wishlists_v2",
        JSON.stringify(wishlists)
    );

    localStorage.setItem(
        "nova_orders_v2",
        JSON.stringify(orders)
    );
}


// =====================================================
// UTILITAS
// =====================================================

function rupiah(value) {

    return new Intl.NumberFormat(
        "id-ID",
        {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }
    ).format(Number(value) || 0);
}


function createId(prefix) {

    return (
        prefix +
        Date.now() +
        Math.floor(
            Math.random() * 1000
        )
    );
}


function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add("show");

    clearTimeout(
        window.toastTimeout
    );

    window.toastTimeout =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);
}


// =====================================================
// MODAL
// =====================================================

function openModal(id) {

    const element =
        document.getElementById(id);

    if (element) {

        element.classList.add("active");
    }
}


function closeModal(id) {

    const element =
        document.getElementById(id);

    if (element) {

        element.classList.remove("active");
    }
}


// =====================================================
// LOGIN
// =====================================================

function openLogin() {

    openModal("authModal");
}


function toggleAuth() {

    authMode =
        authMode === "login"
            ? "register"
            : "login";


    const title =
        document.getElementById(
            "authTitle"
        );

    const button =
        document.getElementById(
            "authButton"
        );

    const name =
        document.getElementById(
            "authName"
        );

    const switchText =
        document.getElementById(
            "authSwitch"
        );


    if (authMode === "register") {

        title.textContent =
            "Daftar Akun";

        button.textContent =
            "Daftar";

        name.style.display =
            "block";

        switchText.innerHTML =
            'Sudah punya akun? <b>Login</b>';

    } else {

        title.textContent =
            "Login";

        button.textContent =
            "Login";

        name.style.display =
            "none";

        switchText.innerHTML =
            'Belum punya akun? <b>Daftar</b>';
    }
}


function submitAuth() {

    const name =
        document.getElementById(
            "authName"
        ).value.trim();

    const email =
        document.getElementById(
            "authEmail"
        ).value.trim()
         .toLowerCase();

    const password =
        document.getElementById(
            "authPassword"
        ).value;


    if (!email || !password) {

        showToast(
            "Email dan password wajib diisi."
        );

        return;
    }


    if (authMode === "register") {

        if (!name) {

            showToast(
                "Nama wajib diisi."
            );

            return;
        }


        const exists =
            users.some(
                user =>
                    user.email === email
            );


        if (exists) {

            showToast(
                "Email sudah terdaftar."
            );

            return;
        }


        const user = {

            id:
                createId("USER"),

            name:
                name,

            email:
                email,

            password:
                password

        };


        users.push(user);


        currentUser = {

            id:
                user.id,

            name:
                user.name,

            email:
                user.email

        };


        saveDatabase();

        closeModal("authModal");

        clearAuth();

        showToast(
            "Registrasi berhasil 🎉"
        );


    } else {

        const user =
            users.find(
                item =>
                    item.email === email &&
                    item.password === password
            );


        if (!user) {

            showToast(
                "Email atau password salah."
            );

            return;
        }


        currentUser = {

            id:
                user.id,

            name:
                user.name,

            email:
                user.email

        };


        saveDatabase();

        closeModal("authModal");

        clearAuth();

        showToast(
            "Login berhasil 👋"
        );
    }


    updateEverything();
}


function clearAuth() {

    document.getElementById(
        "authName"
    ).value = "";

    document.getElementById(
        "authEmail"
    ).value = "";

    document.getElementById(
        "authPassword"
    ).value = "";
}


function logout() {

    currentUser = null;

    saveDatabase();

    closeModal("accountModal");

    showToast(
        "Berhasil keluar dari akun."
    );

    updateEverything();
}


function openAccount() {

    if (!currentUser) {

        openLogin();

        return;
    }


    document.getElementById(
        "accountName"
    ).textContent =
        currentUser.name;


    document.getElementById(
        "accountEmail"
    ).textContent =
        currentUser.email;


    openModal(
        "accountModal"
    );
}


// =====================================================
// USER KEY
// =====================================================

function userKey() {

    if (!currentUser) {

        return "guest";
    }

    return String(
        currentUser.id
    );
}


// =====================================================
// CART
// =====================================================

function getCart() {

    const key =
        userKey();


    if (
        !Array.isArray(
            carts[key]
        )
    ) {

        carts[key] = [];
    }


    return carts[key];
}


function saveCart(cart) {

    carts[userKey()] =
        cart;

    saveDatabase();
}


function requireLogin() {

    if (!currentUser) {

        showToast(
            "Silakan login terlebih dahulu."
        );

        openLogin();

        return false;
    }

    return true;
}


function addToCart(productId) {

    if (!requireLogin()) {
        return;
    }


    const product =
        PRODUCTS.find(
            item =>
                item.id === productId
        );


    if (!product) {
        return;
    }


    const cart =
        getCart();


    const existing =
        cart.find(
            item =>
                item.id === productId
        );


    if (existing) {

        existing.qty += 1;

    } else {

        cart.push({

            id:
                productId,

            qty:
                1

        });
    }


    saveCart(cart);

    updateEverything();


    showToast(
        product.name +
        " ditambahkan ke keranjang 🛒"
    );
}


function changeQuantity(
    productId,
    amount
) {

    const cart =
        getCart();


    const item =
        cart.find(
            product =>
                product.id === productId
        );


    if (!item) {
        return;
    }


    item.qty += amount;


    if (item.qty <= 0) {

        const index =
            cart.indexOf(item);

        cart.splice(
            index,
            1
        );
    }


    saveCart(cart);

    updateEverything();
}


function deleteCartItem(
    productId
) {

    const cart =
        getCart();


    const newCart =
        cart.filter(
            item =>
                item.id !== productId
        );


    saveCart(newCart);

    updateEverything();


    showToast(
        "Produk dihapus."
    );
}


function cartTotal() {

    const cart =
        getCart();


    let total = 0;


    cart.forEach(item => {

        const product =
            PRODUCTS.find(
                p =>
                    p.id === item.id
            );


        if (
            product &&
            Number.isFinite(
                Number(item.qty)
            )
        ) {

            total +=
                product.price *
                Number(item.qty);
        }

    });


    return total;
}


function openCart() {

    renderCart();

    openModal(
        "cartDrawer"
    );
}


function renderCart() {

    const container =
        document.getElementById(
            "cartList"
        );


    const cart =
        getCart();


    if (
        !cart.length
    ) {

        container.innerHTML = `
            <div class="empty">
                🛒
                <br><br>
                Keranjang masih kosong.
            </div>
        `;

    } else {

        container.innerHTML =
            cart.map(item => {

                const product =
                    PRODUCTS.find(
                        p =>
                            p.id === item.id
                    );


                if (!product) {
                    return "";
                }


                return `

                    <div class="cart-item">

                        <div class="cart-icon">
                            ${product.icon}
                        </div>

                        <div>

                            <b>
                                ${product.name}
                            </b>

                            <p>
                                ${rupiah(product.price)}
                            </p>

                            <div class="quantity">

                                <button
                                    onclick="
                                    changeQuantity(
                                        ${product.id},
                                        -1
                                    )"
                                >
                                    −
                                </button>

                                <span>
                                    ${item.qty}
                                </span>

                                <button
                                    onclick="
                                    changeQuantity(
                                        ${product.id},
                                        1
                                    )"
                                >
                                    +
                                </button>

                            </div>

                        </div>

                        <button
                            onclick="
                            deleteCartItem(
                                ${product.id}
                            )"
                        >
                            🗑️
                        </button>

                    </div>

                `;

            }).join("");
    }


    document.getElementById(
        "cartSubtotal"
    ).textContent =
        rupiah(cartTotal());
}


// =====================================================
// PRODUCT
// =====================================================

function renderProducts() {

    const grid =
        document.getElementById(
            "productGrid"
        );


    const search =
        document.getElementById(
            "searchInput"
        ).value
         .toLowerCase()
         .trim();


    const category =
        document.getElementById(
            "categoryFilter"
        ).value;


    const sort =
        document.getElementById(
            "sortFilter"
        ).value;


    let list =
        PRODUCTS.filter(product => {

            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(search);


            const categoryMatch =
                category === "all" ||
                product.category === category;


            return (
                searchMatch &&
                categoryMatch
            );

        });


    if (sort === "cheap") {

        list.sort(
            (a,b) =>
                a.price - b.price
        );

    } else if (
        sort === "expensive"
    ) {

        list.sort(
            (a,b) =>
                b.price - a.price
        );

    } else if (
        sort === "rating"
    ) {

        list.sort(
            (a,b) =>
                b.rating - a.rating
        );

    } else if (
        sort === "sold"
    ) {

        list.sort(
            (a,b) =>
                b.sold - a.sold
        );
    }


    if (!list.length) {

        grid.innerHTML = `
            <div class="empty">
                Produk tidak ditemukan.
            </div>
        `;

        return;
    }


    grid.innerHTML =
        list.map(product => {

            const liked =
                getWishlist().includes(
                    product.id
                );


            return `

                <div class="product-card">

                    <div
                        class="product-image"
                        onclick="
                        openProduct(
                            ${product.id}
                        )"
                    >
                        ${product.icon}
                    </div>

                    <div class="product-info">

                        <span class="category">
                            ${product.category}
                        </span>

                        <h3>
                            ${product.name}
                        </h3>

                        <div class="rating">
                            ⭐ ${product.rating}
                            · ${product.sold} terjual
                        </div>

                        <div class="price">

                            ${rupiah(product.price)}

                            <span class="old-price">
                                ${rupiah(product.oldPrice)}
                            </span>

                        </div>

                        <div class="product-actions">

                            <button
                                onclick="
                                addToCart(
                                    ${product.id}
                                )"
                            >
                                🛒 Tambah
                            </button>

                            <button
                                onclick="
                                toggleWishlist(
                                    ${product.id}
                                )"
                            >
                                ${
                                    liked
                                    ? "♥"
                                    : "♡"
                                }
                            </button>

                        </div>

                    </div>

                </div>

            `;

        }).join("");
}


function openProduct(productId) {

    const product =
        PRODUCTS.find(
            item =>
                item.id === productId
        );


    if (!product) {
        return;
    }


    document.getElementById(
        "productDetail"
    ).innerHTML = `

        <div class="product-image">
            ${product.icon}
        </div>

        <br>

        <span class="category">
            ${product.category}
        </span>

        <h2>
            ${product.name}
        </h2>

        <p>
            ⭐ ${product.rating}
            · ${product.sold} terjual
        </p>

        <br>

        <h2>
            ${rupiah(product.price)}
        </h2>

        <br>

        <p class="muted">
            ${product.description}
        </p>

        <button
            class="btn-primary full"
            onclick="
            addToCart(${product.id});
            closeModal('productModal');
            "
        >
            🛒 Tambahkan ke Keranjang
        </button>

    `;


    openModal(
        "productModal"
    );
}


// =====================================================
// WISHLIST
// =====================================================

function getWishlist() {

    const key =
        userKey();


    if (
        !Array.isArray(
            wishlists[key]
        )
    ) {

        wishlists[key] = [];
    }


    return wishlists[key];
}


function toggleWishlist(
    productId
) {

    if (!requireLogin()) {
        return;
    }


    const list =
        getWishlist();


    const index =
        list.indexOf(
            productId
        );


    if (index >= 0) {

        list.splice(
            index,
            1
        );

        showToast(
            "Dihapus dari wishlist."
        );

    } else {

        list.push(
            productId
        );

        showToast(
            "Ditambahkan ke wishlist ❤️"
        );
    }


    wishlists[userKey()] =
        list;


    saveDatabase();

    updateEverything();
}


function openWishlist() {

    if (!requireLogin()) {
        return;
    }


    const list =
        getWishlist();


    const container =
        document.getElementById(
            "wishlistList"
        );


    if (!list.length) {

        container.innerHTML = `
            <div class="empty">
                ❤️
                <br><br>
                Wishlist masih kosong.
            </div>
        `;

    } else {

        container.innerHTML =
            list.map(id => {

                const product =
                    PRODUCTS.find(
                        p =>
                            p.id === id
                    );


                if (!product) {
                    return "";
                }


                return `

                    <div class="wishlist-item">

                        <div>

                            <b>
                                ${product.icon}
                                ${product.name}
                            </b>

                            <p>
                                ${rupiah(
                                    product.price
                                )}
                            </p>

                        </div>

                        <button
                            onclick="
                            addToCart(
                                ${product.id}
                            )"
                        >
                            🛒
                        </button>

                    </div>

                `;

            }).join("");
    }


    openModal(
        "wishlistModal"
    );
}


// =====================================================
// VOUCHER
// =====================================================

function applyVoucher() {

    const input =
        document.getElementById(
            "voucherInput"
        );


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (code === "NOVA10") {

        discount = 0.10;

        showToast(
            "Voucher NOVA10 aktif 🎉"
        );

    } else if (
        code === "NOVA20"
    ) {

        discount = 0.20;

        showToast(
            "Voucher NOVA20 aktif 🎉"
        );

    } else {

        discount = 0;

        showToast(
            "Kode voucher tidak valid."
        );
    }


    updateCheckout();
}


// =====================================================
// CHECKOUT
// =====================================================

function openCheckout() {

    if (!requireLogin()) {
        return;
    }


    const cart =
        getCart();


    if (!cart.length) {

        showToast(
            "Keranjang masih kosong."
        );

        return;
    }


    document.getElementById(
        "customerName"
    ).value =
        currentUser.name;


    document.getElementById(
        "customerAddress"
    ).value = "";


    discount =
        0;


    document.getElementById(
        "voucherInput"
    ).value = "";


    updateCheckout();


    closeModal(
        "cartDrawer"
    );


    openModal(
        "checkoutModal"
    );
}


function updateCheckout() {

    const subtotal =
        cartTotal();


    const shipping =
        Number(
            document.getElementById(
                "shipping"
            )?.value || 10000
        );


    const discountValue =
        subtotal * discount;


    const total =
        subtotal -
        discountValue +
        shipping;


    const subtotalElement =
        document.getElementById(
            "checkoutSubtotal"
        );


    const shippingElement =
        document.getElementById(
            "checkoutShipping"
        );


    const discountElement =
        document.getElementById(
            "checkoutDiscount"
        );


    const totalElement =
        document.getElementById(
            "checkoutTotal"
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            rupiah(subtotal);
    }


    if (shippingElement) {

        shippingElement.textContent =
            rupiah(shipping);
    }


    if (discountElement) {

        discountElement.textContent =
            "- " +
            rupiah(discountValue);
    }


    if (totalElement) {

        totalElement.textContent =
            rupiah(total);
    }
}


// =====================================================
// BUAT PESANAN
// =====================================================

function createOrder() {

    try {

        // 1. Pastikan login
        if (!currentUser) {

            showToast(
                "Silakan login terlebih dahulu."
            );

            closeModal(
                "checkoutModal"
            );

            openLogin();

            return;
        }


        // 2. Ambil keranjang
        const cart =
            getCart();


        if (!cart.length) {

            showToast(
                "Keranjang masih kosong."
            );

            return;
        }


        // 3. Ambil form
        const name =
            document.getElementById(
                "customerName"
            ).value.trim();


        const address =
            document.getElementById(
                "customerAddress"
            ).value.trim();


        const shipping =
            Number(
                document.getElementById(
                    "shipping"
                ).value
            );


        const payment =
            document.getElementById(
                "paymentMethod"
            ).value;


        // 4. Validasi
        if (!name) {

            showToast(
                "Nama penerima wajib diisi."
            );

            return;
        }


        if (!address) {

            showToast(
                "Alamat lengkap wajib diisi."
            );

            return;
        }


        if (
            !Number.isFinite(shipping)
        ) {

            showToast(
                "Pengiriman tidak valid."
            );

            return;
        }


        // 5. Ambil produk valid
        const items = [];


        cart.forEach(
            cartItem => {

                const product =
                    PRODUCTS.find(
                        p =>
                            p.id ===
                            Number(
                                cartItem.id
                            )
                    );


                if (!product) {
                    return;
                }


                const quantity =
                    Number(
                        cartItem.qty
                    );


                if (
                    !Number.isFinite(
                        quantity
                    ) ||
                    quantity <= 0
                ) {
                    return;
                }


                items.push({

                    id:
                        product.id,

                    name:
                        product.name,

                    icon:
                        product.icon,

                    price:
                        product.price,

                    qty:
                        quantity

                });

            }
        );


        // 6. Pastikan ada produk
        if (!items.length) {

            showToast(
                "Produk dalam keranjang tidak valid."
            );

            return;
        }


        // 7. Hitung subtotal
        let subtotal = 0;


        items.forEach(
            item => {

                subtotal +=
                    item.price *
                    item.qty;

            }
        );


        // 8. Hitung diskon
        const discountAmount =
            subtotal * discount;


        // 9. Hitung total
        const total =
            subtotal -
            discountAmount +
            shipping;


        // 10. Buat order
        const order = {

            id:
                createId("NOVA"),

            userId:
                currentUser.id,

            customerName:
                name,

            address:
                address,

            items:
                items,

            subtotal:
                subtotal,

            discount:
                discountAmount,

            shipping:
                shipping,

            total:
                total,

            payment:
                payment,

            status:
                payment === "COD"
                    ? "Diproses"
                    : "Menunggu Pembayaran",

            date:
                new Date()
                    .toLocaleString(
                        "id-ID"
                    )

        };


        // 11. Pastikan orders array
        if (
            !Array.isArray(orders)
        ) {

            orders = [];
        }


        // 12. Simpan order
        orders.unshift(
            order
        );


        // 13. Kosongkan cart
        carts[userKey()] =
            [];


        // 14. Reset voucher
        discount =
            0;


        // 15. Simpan database
        saveDatabase();


        // 16. Tutup checkout
        closeModal(
            "checkoutModal"
        );


        // 17. Refresh
        updateEverything();


        // 18. COD
        if (
            payment === "COD"
        ) {

            showToast(
                "Pesanan berhasil dibuat 🎉"
            );


            setTimeout(
                () => {

                    showOrders();

                },
                700
            );


            return;
        }


        // 19. Pembayaran
        currentPaymentOrder =
            order;


        showToast(
            "Pesanan berhasil dibuat."
        );


        setTimeout(
            () => {

                openPayment(
                    order
                );

            },
            600
        );


    } catch (error) {

        console.error(
            "CREATE ORDER ERROR:",
            error
        );


        showToast(
            "Terjadi kesalahan saat membuat pesanan."
        );
    }
}


// =====================================================
// PAYMENT
// =====================================================

function openPayment(order) {

    if (!order) {
        return;
    }


    currentPaymentOrder =
        order;


    let html = "";


    if (
        order.payment ===
        "QRIS"
    ) {

        html = `

            <div class="payment-box">

                <div class="payment-icon">
                    ▣
                </div>

                <h3>
                    QRIS NOVA STORE
                </h3>

                <p>
                    Scan QRIS demo untuk pembayaran.
                </p>

                <br>

                <strong>
                    ${rupiah(
                        order.total
                    )}
                </strong>

            </div>

        `;

    } else if (
        order.payment ===
        "BANK"
    ) {

        html = `

            <div class="payment-box">

                <div class="payment-icon">
                    🏦
                </div>

                <h3>
                    Transfer Bank
                </h3>

                <br>

                <p>
                    Bank Nova Store
                </p>

                <h3>
                    1234 5678 9012
                </h3>

                <p>
                    a.n. Nova Store
                </p>

                <br>

                <strong>
                    ${rupiah(
                        order.total
                    )}
                </strong>

            </div>

        `;

    } else if (
        order.payment ===
        "EWALLET"
    ) {

        html = `

            <div class="payment-box">

                <div class="payment-icon">
                    📱
                </div>

                <h3>
                    E-Wallet
                </h3>

                <p>
                    NOVA WALLET
                </p>

                <br>

                <strong>
                    ${rupiah(
                        order.total
                    )}
                </strong>

            </div>

        `;
    }


    document.getElementById(
        "paymentContent"
    ).innerHTML = `

        <p>
            Nomor Pesanan:
        </p>

        <strong>
            ${order.id}
        </strong>

        ${html}

    `;


    openModal(
        "paymentModal"
    );
}


function finishPayment() {

    if (
        !currentPaymentOrder
    ) {

        showToast(
            "Pesanan tidak ditemukan."
        );

        return;
    }


    const order =
        orders.find(
            item =>
                item.id ===
                currentPaymentOrder.id
        );


    if (!order) {

        showToast(
            "Pesanan tidak ditemukan."
        );

        return;
    }


    order.status =
        "Dibayar";


    saveDatabase();


    closeModal(
        "paymentModal"
    );


    updateEverything();


    showToast(
        "Pembayaran berhasil 🎉"
    );


    setTimeout(
        () => {

            showOrders();

        },
        700
    );
}


// =====================================================
// PESANAN
// =====================================================

function showOrders() {

    closeModal(
        "accountModal"
    );

    closeModal(
        "cartDrawer"
    );


    if (!currentUser) {

        openLogin();

        return;
    }


    renderOrders();


    document.getElementById(
        "ordersSection"
    ).scrollIntoView({
        behavior:
            "smooth"
    });
}


function renderOrders() {

    const container =
        document.getElementById(
            "ordersList"
        );


    if (!currentUser) {

        container.innerHTML = `
            <div class="empty">
                Silakan login terlebih dahulu.
            </div>
        `;

        return;
    }


    const myOrders =
        orders.filter(
            order =>
                String(
                    order.userId
                ) ===
                String(
                    currentUser.id
                )
        );


    if (!myOrders.length) {

        container.innerHTML = `
            <div class="empty">
                📦
                <br><br>
                Belum ada pesanan.
            </div>
        `;

        return;
    }


    container.innerHTML =
        myOrders.map(order => {

            const items =
                order.items
                    .map(
                        item => `

                            <div class="order-item">

                                ${item.icon}
                                ${item.name}

                                × ${item.qty}

                                -
                                ${rupiah(
                                    item.price *
                                    item.qty
                                )}

                            </div>

                        `
                    )
                    .join("");


            let payButton = "";


            if (
                order.status ===
                "Menunggu Pembayaran"
            ) {

                payButton = `

                    <button
                        class="btn-primary full"
                        onclick="
                        payExistingOrder(
                            '${order.id}'
                        )"
                    >
                        💳 Bayar Sekarang
                    </button>

                `;
            }


            return `

                <div class="order-card">

                    <div class="order-header">

                        <div>

                            <b>
                                ${order.id}
                            </b>

                            <br>

                            <small>
                                ${order.date}
                            </small>

                        </div>

                        <div class="status">
                            ${order.status}
                        </div>

                    </div>

                    <br>

                    ${items}

                    <br>

                    <p>
                        Pembayaran:
                        <b>
                            ${order.payment}
                        </b>
                    </p>

                    <br>

                    <p>
                        Ongkir:
                        ${rupiah(
                            order.shipping
                        )}
                    </p>

                    <div class="order-total">

                        Total:
                        ${rupiah(
                            order.total
                        )}

                    </div>

                    ${payButton}

                </div>

            `;

        }).join("");
}


function payExistingOrder(
    orderId
) {

    const order =
        orders.find(
            item =>
                item.id === orderId
        );


    if (!order) {

        showToast(
            "Pesanan tidak ditemukan."
        );

        return;
    }


    openPayment(
        order
    );
}


// =====================================================
// CUSTOMER SERVICE
// =====================================================

function openCS() {

    openModal(
        "csModal"
    );
}


function addChat(
    text,
    type
) {

    const box =
        document.getElementById(
            "chatBox"
        );


    const message =
        document.createElement(
            "div"
        );


    message.className =
        "chat " +
        type;


    message.textContent =
        text;


    box.appendChild(
        message
    );


    box.scrollTop =
        box.scrollHeight;
}


function sendChat() {

    const input =
        document.getElementById(
            "chatInput"
        );


    const text =
        input.value.trim();


    if (!text) {
        return;
    }


    addChat(
        text,
        "user"
    );


    input.value =
        "";


    setTimeout(
        () => {

            const lower =
                text.toLowerCase();


            if (
                lower.includes(
                    "bayar"
                )
            ) {

                addChat(
                    "Pembayaran tersedia melalui QRIS, Transfer Bank, E-Wallet, atau COD.",
                    "bot"
                );

            } else if (
                lower.includes(
                    "pesanan"
                )
            ) {

                addChat(
                    "Kamu dapat melihat pesanan melalui menu Pesanan Saya.",
                    "bot"
                );

            } else if (
                lower.includes(
                    "kirim"
                )
            ) {

                addChat(
                    "Kami menyediakan Reguler, Express, dan Same Day.",
                    "bot"
                );

            } else {

                addChat(
                    "Terima kasih. CS Nova Store siap membantu kamu.",
                    "bot"
                );
            }

        },
        600
    );
}


function quickCS(
    type
) {

    if (type === "cara") {

        addChat(
            "Cara belanja: pilih produk → Tambah ke Keranjang → Checkout → isi alamat → pilih pembayaran → Buat Pesanan.",
            "bot"
        );

    } else if (
        type === "pesanan"
    ) {

        addChat(
            "Buka bagian Pesanan Saya untuk melihat status pesanan.",
            "bot"
        );

    } else if (
        type === "bayar"
    ) {

        addChat(
            "Pembayaran tersedia melalui QRIS, Transfer Bank, E-Wallet, dan COD.",
            "bot"
        );

    } else if (
        type === "kirim"
    ) {

        addChat(
            "Pilihan pengiriman: Reguler Rp10.000, Express Rp20.000, dan Same Day Rp30.000.",
            "bot"
        );
    }
}


function openWhatsApp() {

    // GANTI NOMOR INI DENGAN NOMOR WHATSAPP CS TOKO
    const phone =
        "6281234567890";


    const message =
        encodeURIComponent(
            "Halo Nova Store, saya ingin bertanya tentang produk/pesanan."
        );


    window.open(
        "https://wa.me/" +
        phone +
        "?text=" +
        message,
        "_blank"
    );
}


// =====================================================
// DARK MODE
// =====================================================

function toggleDarkMode() {

    document.body.classList.toggle(
        "dark"
    );


    const isDark =
        document.body.classList.contains(
            "dark"
        );


    localStorage.setItem(
        "nova_dark_v2",
        isDark
    );
}


function loadDarkMode() {

    const isDark =
        localStorage.getItem(
            "nova_dark_v2"
        ) === "true";


    if (isDark) {

        document.body.classList.add(
            "dark"
        );
    }
}


// =====================================================
// NAVIGASI
// =====================================================

function goHome() {

    window.scrollTo({

        top:
            0,

        behavior:
            "smooth"

    });
}


function scrollProducts() {

    document.getElementById(
        "productsSection"
    ).scrollIntoView({

        behavior:
            "smooth"

    });
}


// =====================================================
// FLASH SALE
// =====================================================

function startTimer() {

    let seconds =
        8 * 60 * 60;


    function updateTimer() {

        const hours =
            Math.floor(
                seconds /
                3600
            );


        const minutes =
            Math.floor(
                (seconds % 3600) /
                60
            );


        const secs =
            seconds % 60;


        document.getElementById(
            "hours"
        ).textContent =
            String(hours)
                .padStart(2,"0");


        document.getElementById(
            "minutes"
        ).textContent =
            String(minutes)
                .padStart(2,"0");


        document.getElementById(
            "seconds"
        ).textContent =
            String(secs)
                .padStart(2,"0");


        seconds--;


        if (seconds < 0) {

            seconds =
                8 * 60 * 60;
        }
    }


    updateTimer();

    setInterval(
        updateTimer,
        1000
    );
}


// =====================================================
// UPDATE SEMUA
// =====================================================

function updateEverything() {

    renderProducts();

    renderCart();

    renderOrders();


    const cart =
        getCart();


    let cartCount = 0;


    cart.forEach(
        item => {

            cartCount +=
                Number(
                    item.qty
                ) || 0;

        }
    );


    document.getElementById(
        "cartCount"
    ).textContent =
        cartCount;


    document.getElementById(
        "wishlistCount"
    ).textContent =
        getWishlist().length;
}


// =====================================================
// INIT
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Search
        document.getElementById(
            "searchInput"
        ).addEventListener(
            "input",
            renderProducts
        );


        // Category
        document.getElementById(
            "categoryFilter"
        ).addEventListener(
            "change",
            renderProducts
        );


        // Sorting
        document.getElementById(
            "sortFilter"
        ).addEventListener(
            "change",
            renderProducts
        );


        // Ongkir
        document.getElementById(
            "shipping"
        ).addEventListener(
            "change",
            updateCheckout
        );


        // Payment
        document.getElementById(
            "paymentMethod"
        ).addEventListener(
            "change",
            updateCheckout
        );


        // Chat Enter
        document.getElementById(
            "chatInput"
        ).addEventListener(
            "keydown",
            function(event) {

                if (
                    event.key === "Enter"
                ) {

                    sendChat();
                }

            }
        );


        loadDarkMode();

        updateEverything();

        startTimer();

    }
);
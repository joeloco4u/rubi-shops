// =====================================================
// RUBI.SHOPS - JavaScript (Versión Corregida con Imágenes)
// =====================================================

// =====================================================
// PRODUCT DATA
// =====================================================
const products = [
     {
    id: 1,
        name: "Vestido Beige",
        category: "vestidos-mujer",
        price: 30.00,
        // Enrutamiento para el ID 1
        image: "assets/vestidos 30$/vestido-beige.jpeg", 
        description: "Hermoso vestido beige con diseño elegante. Tela suave y cómoda, ideal para ocasiones especiales. Corte ajustado que realza la figura. Disponible en varias tallas.",
        sizes: ["S", "M", "L"],
        badge: "Nuevo"
     },
       
    {
       id: 2,
        name: "Vestido Brillante Negro",
        category: "vestidos-mujer",
        price: 30.00,
        // Enrutamiento para el ID 2
        image: "assets/vestidos 30$/vestido-brillonegro.jpeg", 
        description: "Vestido brillante en negro con diseño elegante. Tela de alta calidad y corte ajustado. Ideal para ocasiones especiales.",
        sizes: ["S"],
        badge: "Nuevo"
    },
    {
        id: 3,
        name: "Vestido Brillante Rosa",
        category: "vestidos-mujer",
        price: 30.00,
        // Enrutamiento para el ID 3
        image: "assets/vestidos 30$/vestido-brillowhiterose.jpeg", 
        description: "Vestido brillante en rosa con diseño elegante. Tela de alta calidad y corte ajustado. Ideal para ocasiones especiales.",
        sizes: [ "XS"],
        badge: "Oferta Especial"
    },
    {
       id: 4,
        name: "Vestido Negro Casual",
        category: "vestidos-mujer",
        price: 30.00,
         // Enrutamiento para el ID 4
        image: "assets/vestidos 30$/vestido-negrocasual.jpeg", 
        description: "Vestido negro casual con diseño elegante. Tela de alta calidad y corte ajustado. Ideal para ocasiones especiales.",
        sizes: ["XS"],
        
    },
    {
    id: 5,
        name: "Vestido Negro Elegante",
        category: "vestidos-mujer",
        price: 30.00,
         // Enrutamiento para el ID 5
        image: "assets/vestidos 30$/vestido-negroelegante.jpeg", 
        description: "Vestido negro elegante con diseño sofisticado. Tela de alta calidad y corte ajustado. Ideal para ocasiones especiales.",
        sizes: ["XS", "S", "M", "L"],
    
       
    },
    {
        id: 6,
        name: "Vestido Plateado Elegante",
        category: "vestidos-mujer",
        price: 30,
        description: "Vestido plateado elegante con diseño brillante. Tela de alta calidad y corte ajustado. Ideal para ocasiones especiales.",
        sizes: ["S"],
        badge: "Exclusivo",
        image: "assets/vestidos 30$/vestido-plateadoelegante.jpeg"
    },
    {
        id: 7,
        name: "Vestido Rojo Corto",
        category: "vestidos-mujer",
        price: 30,
        description: "Vestido rojo corto con diseño elegante. Tela de alta calidad y corte ajustado. Ideal para ocasiones especiales.",
        sizes: ["S"],
        badge: "",
        image: "assets/vestidos 30$/vestido-rojo.jpeg"
    },
    {
        id: 8,
        name: "Conjunto Niña Princess",
        category: "vestidos-nina",
        price: 20.00,
        description: "Conjunto infantil con falda y top coordinados. Tela suave y cómoda para niñas. Perfecto para fiestas y eventos familiares.",
        sizes: ["2-4", "4-6", "6-8", "8-10"],
        badge: "Nuevo",
        image: "assets/vestidos niña/vestido-niña1.jpg"
    },
    {
        id: 9,
        name: "Vestido Niña Azul Floral",
        category: "vestidos-nina",
        price: 18.99,
        description: "Vestido infantil con floral print. Volantes delicados y colores pastel. Telas suaves sin irritaciones..",
        sizes: ["2-4", "4-6", "6-8", "8-10"],
        badge: "Oferta",
        image: "assets/vestidos niña/vestido-niña2.jpg"
    },
    {
        id: 10,
        name: "Vestido Niña Blanco Floral",
        category: "vestidos-nina",
        price: 30.00,
        description: "Vestido infantil blanco con estampado floral. Diseño elegante con volantes y detalles delicados. Ideal para eventos especiales y sesiones de fotos.",
        sizes: ["2-4", "4-6", "6-8", "8-10"],
        badge: null,
        image: "assets/vestidos niña/vestido-niña3.jpg"
    },
    {
        id: 11,
        name: "Conjunto Niña Lila",
        category: "vestidos-nina",
        price: 59.99,
        description: "Vestido lila con diseño elegante. Tela de alta calidad y corte ajustado. Ideal para ocasiones especiales.",
        sizes: ["2-4", "4-6", "6-8", "8-10"],
        badge: "Oferta",
        image: "assets/vestidos niña/vestido-niña4.jpg"
    }
];

// =====================================================
// STATE
// =====================================================
let currentPage = 'home';
let currentFilter = 'all';
let cart = [];
let selectedProduct = null;
let selectedSize = null;

// =====================================================
// DOM ELEMENTS
// =====================================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const overlay = document.getElementById('overlay');
const featuredGrid = document.getElementById('featuredGrid');
const shopGrid = document.getElementById('shopGrid');
const productDetail = document.getElementById('productDetail');
const contactForm = document.getElementById('contactForm');

// =====================================================
// NAVBAR SCROLL EFFECT
// =====================================================
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// =====================================================
// MOBILE MENU
// =====================================================
if (navToggle) {
    navToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
if (overlay) overlay.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
    if(mobileMenu) mobileMenu.classList.remove('active');
    if(overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
}

// =====================================================
// NAVIGATION (SPA)
// =====================================================
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        navigateTo(page);
    });
});

function navigateTo(page) {
    closeMobileMenu();
    
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    const navLink = document.querySelector(`.nav-link[data-page="${page}"]`);
    if (navLink) {
        navLink.classList.add('active');
    }
    
    currentPage = page;
    window.scrollTo(0, 0);
}

// =====================================================
// RENDER PRODUCTS
// =====================================================
function renderFeaturedProducts() {
    if (!featuredGrid) return;
    const featured = products.slice(0, 4);
    featuredGrid.innerHTML = featured.map(product => createProductCard(product)).join('');
    
    featuredGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = parseInt(card.dataset.id);
            openProductDetail(productId);
        });
    });
}

function renderShopProducts(filter = 'all') {
    if (!shopGrid) return;
    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    shopGrid.innerHTML = filtered.map(product => createProductCard(product)).join('');
    
    shopGrid.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const productId = parseInt(card.dataset.id);
            openProductDetail(productId);
        });
    });
}

function createProductCard(product) {
    const badgeHTML = product.badge 
        ? `<span class="product-badge">${product.badge}</span>` 
        : '';
    
    const sizesHTML = product.sizes.map(size => 
        `<span class="product-size">${size}</span>`
    ).join('');
    
    return `
        <div class="product-card" data-id="${product.id}">
            ${badgeHTML}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" class="product-img-render">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-sizes">${sizesHTML}</div>
            </div>
        </div>
    `;
}

// =====================================================
// PRODUCT DETAIL
// =====================================================
function openProductDetail(productId) {
    selectedProduct = products.find(p => p.id === productId);
    selectedSize = null;
    
    if (!selectedProduct || !productDetail) return;
    
    const sizesHTML = selectedProduct.sizes.map(size => 
        `<span class="product-detail-size" data-size="${size}">${size}</span>`
    ).join('');
    
    const categoryLabel = selectedProduct.category === 'vestidos-mujer' ? 'Vestidos Mujer' : 'Vestidos Niña';
    const whatsappLink = `https://wa.me/584246295209?text=${encodeURIComponent(`Hola, me interesa el producto: ${selectedProduct.name} - $${selectedProduct.price}`)}`;
    
    productDetail.innerHTML = `
        <div class="product-detail-image">
            <img src="${selectedProduct.image}" alt="${selectedProduct.name}" class="product-img-detail">
        </div>
        <div class="product-detail-info">
            <p class="product-detail-category">${categoryLabel}</p>
            <h1 class="product-detail-name">${selectedProduct.name}</h1>
            <p class="product-detail-price">$${selectedProduct.price.toFixed(2)}</p>
            <p class="product-detail-description">${selectedProduct.description}</p>
            
            <div class="product-detail-sizes">
                <h4>Selecciona tu talla</h4>
                <div class="product-detail-sizes-grid" id="sizesGrid">
                    ${sizesHTML}
                </div>
            </div>
            
            <button class="btn-add-cart" id="btnAddCart">Agregar al Carrito</button>
            <a href="${whatsappLink}" target="_blank" class="btn-whatsapp">
                <span>💬</span> Contactar por WhatsApp
            </a>
            <a href="#" class="btn-back" data-page="shop">← Volver al Catálogo</a>
        </div>
    `;
    
    document.querySelectorAll('.product-detail-size').forEach(sizeEl => {
        sizeEl.addEventListener('click', () => {
            document.querySelectorAll('.product-detail-size').forEach(s => {
                s.classList.remove('selected');
            });
            sizeEl.classList.add('selected');
            selectedSize = sizeEl.dataset.size;
        });
    });
    
    const btnAddCart = document.getElementById('btnAddCart');
    if (btnAddCart) {
        btnAddCart.addEventListener('click', () => {
            if (!selectedSize) {
                alert('Por favor selecciona una talla');
                return;
            }
            addToCart(selectedProduct, selectedSize);
        });
    }
    
    const btnBack = document.querySelector('.btn-back');
    if (btnBack) {
        btnBack.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('shop');
        });
    }
    
    navigateTo('product');
    window.scrollTo(0, 0);
}

// =====================================================
// CART
// =====================================================
function addToCart(product, size) {
    const cartItem = {
        product: product,
        size: size,
        quantity: 1
    };
    
    cart.push(cartItem);
    updateCartUI();
    openCart();
}

function updateCartUI() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
        if (cartTotal) cartTotal.textContent = '$0';
        return;
    }
    
    let totalValue = 0;
    cartItemsEl.innerHTML = cart.map((item, index) => {
        totalValue += item.product.price;
        return `
            <div class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4>${item.product.name}</h4>
                    <p>Talla: ${item.size}</p>
                    <p class="cart-item-price">$${item.product.price.toFixed(2)}</p>
                </div>
                <button class="cart-item-remove" data-index="${index}">&times;</button>
            </div>
        `;
    }).join('');
    
    if (cartTotal) cartTotal.textContent = `$${totalValue.toFixed(2)}`;
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            cart.splice(index, 1);
            updateCartUI();
        });
    });
}

function openCart() {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar) sidebar.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

const cartCloseBtn = document.getElementById('cartClose');
if (cartCloseBtn) {
    cartCloseBtn.addEventListener('click', () => {
        const sidebar = document.getElementById('cartSidebar');
        if (sidebar) sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// =====================================================
// FILTERS
// =====================================================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');
        
        currentFilter = btn.dataset.filter;
        renderShopProducts(currentFilter);
    });
});

// =====================================================
// CATEGORIES
// =====================================================
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
        if (filterBtn) {
            filterBtn.classList.add('active');
        }
        
        currentFilter = category;
        navigateTo('shop');
        
        setTimeout(() => {
            renderShopProducts(currentFilter);
        }, 100);
    });
});

// =====================================================
// CONTACT FORM
// =====================================================
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}

// =====================================================
// INIT
// =====================================================
function init() {
    renderFeaturedProducts();
    renderShopProducts();
    
    const homeLink = document.querySelector('.nav-link[data-page="home"]');
    if (homeLink) homeLink.classList.add('active');
}

init();
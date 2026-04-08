// =====================================================
// RUBI.SHOPS - JavaScript
// =====================================================

// =====================================================
// PRODUCT DATA
// =====================================================
const products = [
    {
        id: 1,
        name: "Vestido Elegante Noir",
        category: "vestidos-mujer",
        price: 249.99,
        description: "Vestido de cocktail en tela satinada con corte ajustado. Perfecto para eventos formales y cenas elegantes. Cuello V pronunciado con espalda descubierta.",
        sizes: ["XS", "S", "M", "L"],
        badge: "Nuevo",
        emoji: "👗"
    },
    {
        id: 2,
        name: "Vestido Fiesta Rosa",
        category: "vestidos-mujer",
        price: 189.99,
        description: "Vestido festivo en tonalidades vibrantes. Escote en V con cintura ceñida y falda voluminosa. Ideal para celebraciones y ocasiones especiales.",
        sizes: ["XS", "S", "M", "L", "XL"],
        badge: "Best Seller",
        emoji: "👗"
    },
    {
        id: 3,
        name: "Vestido Casual Verde",
        category: "vestidos-mujer",
        price: 159.99,
        description: "Vestido casual de diario en color esmeralda. Tela transpirable con corte fluido. Perfecto para el día a día con estilo.",
        sizes: ["XS", "S", "M", "L"],
        badge: null,
        emoji: "👗"
    },
    {
        id: 4,
        name: "Vestido Rojo Passion",
        category: "vestidos-mujer",
        price: 299.99,
        description: "Vestido de noche en rojo intenso. Gasa con aplicaciones de encaje. Largo hasta el suelo con cola sutil. Para ocasiones memorables.",
        sizes: ["XS", "S", "M", "L"],
        badge: "Premium",
        emoji: "👗"
    },
    {
        id: 5,
        name: "Vestido Blanco Pure",
        category: "vestidos-mujer",
        price: 219.99,
        description: "Vestido blanco minimalista en algodón orgánico. Corte recto con detalles enrollados. Versatilidad para cualquier ocasión.",
        sizes: ["XS", "S", "M", "L", "XL"],
        badge: null,
        emoji: "👗"
    },
    {
        id: 6,
        name: "Vestido Noche Negro",
        category: "vestidos-mujer",
        price: 349.99,
        description: "Vestido de gala en negro absoluto. Encaje francés con transparencias. Talla大了. Perfecto para cenas de gala y eventos formales.",
        sizes: ["XS", "S", "M", "L"],
        badge: "Exclusive",
        emoji: "👗"
    },
    {
        id: 7,
        name: "Vestido Azul Cielo",
        category: "vestidos-mujer",
        price: 179.99,
        description: "Vestido fresco en azul pastel. Tela vaporosa ideal para bodas y eventos diurnos. Fluidez y elegancia en cada movimiento.",
        sizes: ["XS", "S", "M", "L", "XL"],
        badge: null,
        emoji: "👗"
    },
    {
        id: 8,
        name: "Conjunto Niña Princess",
        category: "vestidos-nina",
        price: 89.99,
        description: "Conjunto infantil con falda y top coordinados. Tela suave y cómoda para niñas. Perfecto para fiestas y eventos familiares.",
        sizes: ["2-4", "4-6", "6-8", "8-10"],
        badge: "Nuevo",
        emoji: "👧"
    },
    {
        id: 9,
        name: "Vestido Niña Flower",
        category: "vestidos-nina",
        price: 69.99,
        description: "Vestido infantil con floral print. Volantes delicados y colores pastel. Telas suaves sin irritaciones. Ideal para primavera y verano.",
        sizes: ["2-4", "4-6", "6-8", "8-10"],
        badge: null,
        emoji: "👧"
    },
    {
        id: 10,
        name: "Vestido Niña Party",
        category: "vestidos-nina",
        price: 79.99,
        description: "Vestido de fiesta infantil con purpurina. Brilla bajo la luz. Tela suave con forro cómodo. La favorita de las pequeñas.",
        sizes: ["2-4", "4-6", "6-8", "8-10"],
        badge: null,
        emoji: "👧"
    },
    {
        id: 11,
        name: "Conjunto Niña Summer",
        category: "vestidos-nina",
        price: 59.99,
        description: "Conjunto verano con short y top. Tela ligera y transpirable. Ideal para días calurosos. Estilo y comodidad para las niñas.",
        sizes: ["2-4", "4-6", "6-8", "8-10"],
        badge: "Oferta",
        emoji: "👧"
    },
    {
        id: 12,
        name: "Vestido Niña Cute",
        category: "vestidos-nina",
        price: 74.99,
        description: "Vestido adorable con lacitos y colores suaves. Perfecto para fotografías y eventos especiales. Cómodo para jugar y brillar.",
        sizes: ["2-4", "4-6", "6-8", "8-10"],
        badge: null,
        emoji: "👧"
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
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =====================================================
// MOBILE MENU
// =====================================================
navToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
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
                <div class="product-image-placeholder">${product.emoji}</div>
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
    
    if (!selectedProduct) return;
    
    const sizesHTML = selectedProduct.sizes.map(size => 
        `<span class="product-detail-size" data-size="${size}">${size}</span>`
    ).join('');
    
    const categoryLabel = selectedProduct.category === 'vestidos-mujer' ? 'Vestidos Mujer' : 'Vestidos Niña';
    const whatsappLink = `https://wa.me/1234567890?text=${encodeURIComponent(`Hola, me interesa el producto: ${selectedProduct.name} - $${selectedProduct.price}`)}`;
    
    productDetail.innerHTML = `
        <div class="product-detail-image">
            <div class="product-detail-emoji">${selectedProduct.emoji}</div>
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
    
    document.getElementById('btnAddCart').addEventListener('click', () => {
        if (!selectedSize) {
            alert('Por favor selecciona una talla');
            return;
        }
        addToCart(selectedProduct, selectedSize);
    });
    
    document.querySelector('.btn-back').addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('shop');
    });
    
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
    
    document.getElementById('cartSidebar').classList.add('active');
    overlay.classList.add('active');
}

function updateCartUI() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
        cartTotal.textContent = '$0';
        return;
    }
    
    let total = 0;
    cartItemsEl.innerHTML = cart.map((item, index) => {
        total += item.product.price;
        return `
            <div class="cart-item">
                <div class="cart-item-emoji">${item.product.emoji}</div>
                <div class="cart-item-info">
                    <h4>${item.product.name}</h4>
                    <p>Talla: ${item.size}</p>
                    <p class="cart-item-price">$${item.product.price.toFixed(2)}</p>
                </div>
                <button class="cart-item-remove" data-index="${index}">&times;</button>
            </div>
        `;
    }).join('');
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            cart.splice(index, 1);
            updateCartUI();
        });
    });
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

document.getElementById('cartClose').addEventListener('click', () => {
    document.getElementById('cartSidebar').classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});

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
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
});

// =====================================================
// PRODUCT IMAGE PLACEHOLDER STYLE
// =====================================================
const style = document.createElement('style');
style.textContent = `
    .product-detail-emoji {
        font-size: 150px;
    }
    
    .cart-item {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px 0;
        border-bottom: 1px solid var(--color-gray);
    }
    
    .cart-item-emoji {
        font-size: 40px;
    }
    
    .cart-item-info {
        flex: 1;
    }
    
    .cart-item-info h4 {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 5px;
    }
    
    .cart-item-info p {
        font-size: 12px;
        color: var(--color-gray-medium);
    }
    
    .cart-item-price {
        font-weight: 700;
        color: var(--color-pink) !important;
    }
    
    .cart-item-remove {
        font-size: 24px;
        color: var(--color-gray-medium);
        transition: var(--transition-base);
    }
    
    .cart-item-remove:hover {
        color: var(--color-red);
    }
`;
document.head.appendChild(style);

// =====================================================
// INIT
// =====================================================
function init() {
    renderFeaturedProducts();
    renderShopProducts();
    
    document.querySelector('.nav-link[data-page="home"]').classList.add('active');
}

init();

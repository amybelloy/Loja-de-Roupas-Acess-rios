/**
 * Core Components for Élégance
 */

import products from './data.js';

// --- UTILITIES ---
const getCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.reduce((total, item) => total + item.quantity, 0);
};

const getFavoritesCount = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.length;
};

// --- COMPONENTS ---

export const renderHeader = () => {
    const header = document.createElement('header');
    header.className = 'main-header';
    header.innerHTML = `
        <div class="top-bar" style="background: var(--black); color: var(--white); font-size: 10px; height: 35px; display: flex; align-items: center; justify-content: center; letter-spacing: 0.15em; text-transform: uppercase;">
            FRETE GRÁTIS EM COMPRAS ACIMA DE R$ 299 | USE O CUPOM MODA10
        </div>
        <nav class="navbar">
            <div class="container flex" style="justify-content: space-between; height: 100px; padding: 0;">
                <!-- Logo Left-Aligned for this version to match reference precisely -->
                <div class="header-left">
                    <a href="index.html" class="logo">ÉLÉGANCE</a>
                </div>
                
                <ul class="nav-links flex" style="gap: 30px;">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="produtos.html">PRODUTOS</a></li>
                    <li><a href="categorias.html">CATEGORIAS</a></li>
                    <li><a href="sobre.html">SOBRE</a></li>
                    <li><a href="contato.html">CONTATO</a></li>
                </ul>

                <div class="nav-icons flex" style="gap: 20px;">
                    <button class="icon-btn search-trigger"><i class="fas fa-search"></i></button>
                    <a href="#" class="icon-link"><i class="far fa-user"></i></a>
                    <a href="favoritos.html" class="icon-link relative">
                        <i class="far fa-heart"></i>
                        <span class="badge" id="favBadge">${getFavoritesCount()}</span>
                    </a>
                    <a href="carrinho.html" class="icon-link relative">
                        <i class="fas fa-shopping-bag"></i>
                        <span class="badge" id="cartBadge">${getCartCount()}</span>
                    </a>
                </div>
            </div>
        </nav>
    `;
    document.body.prepend(header);
};

export const renderFooter = () => {
    const footer = document.createElement('footer');
    footer.className = 'main-footer section-padding';
    footer.style.backgroundColor = '#111';
    footer.style.color = '#fff';
    
    footer.innerHTML = `
        <div class="container grid grid-4">
            <div>
                <h3 class="logo" style="margin-bottom: 25px; font-size: 1.8rem;">ÉLÉGANCE</h3>
                <p style="font-size: 13px; color: #999; line-height: 1.8;">Moda com elegância e sofisticação. Peças selecionadas para quem busca estilo e qualidade.</p>
                <div class="social-links flex" style="margin-top: 30px; gap: 20px;">
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-envelope"></i></a>
                </div>
            </div>
            <div>
                <h4 class="heading" style="margin-bottom: 25px; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;">INSTITUCIONAL</h4>
                <ul style="font-size: 13px; line-height: 2.8; color: #999;">
                    <li><a href="sobre.html">Sobre Nós</a></li>
                    <li><a href="contato.html">Contato</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Termos de Uso</a></li>
                </ul>
            </div>
            <div>
                <h4 class="heading" style="margin-bottom: 25px; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;">AJUDA</h4>
                <ul style="font-size: 13px; line-height: 2.8; color: #999;">
                    <li><a href="#">Central de Ajuda</a></li>
                    <li><a href="#">Trocas e Devoluções</a></li>
                    <li><a href="#">Formas de Pagamento</a></li>
                    <li><a href="#">Rastreio de Pedido</a></li>
                </ul>
            </div>
            <div>
                <h4 class="heading" style="margin-bottom: 25px; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase;">CONTATO</h4>
                <ul style="font-size: 13px; line-height: 2.5; color: #999;">
                    <li class="flex" style="gap: 10px; margin-bottom: 10px;">
                        <i class="fas fa-map-marker-alt" style="color: var(--accent-color);"></i>
                        <span>Rua da Moda, 123 - São Paulo</span>
                    </li>
                    <li class="flex" style="gap: 10px; margin-bottom: 10px;">
                        <i class="fas fa-phone-alt" style="color: var(--accent-color);"></i>
                        <span>(11) 99999-9999</span>
                    </li>
                    <li class="flex" style="gap: 10px; margin-bottom: 10px;">
                        <i class="fas fa-envelope" style="color: var(--accent-color);"></i>
                        <span>contato@elegance.com.br</span>
                    </li>
                    <li class="flex" style="gap: 10px;">
                        <i class="fas fa-clock" style="color: var(--accent-color);"></i>
                        <span>Seg-Sex: 9h às 18h</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container" style="border-top: 1px solid #222; margin-top: 60px; padding-top: 30px; text-align: center; font-size: 11px; color: #666; letter-spacing: 0.05em;">
            © 2026 ÉLÉGANCE. Todos os direitos reservados.
        </div>
    `;
    document.body.appendChild(footer);
};

export const createProductCard = (product) => {
    return `
        <div class="product-card" data-id="${product.id}" style="transition: var(--transition-slow);">
            <div class="product-image-wrapper relative overflow-hidden" style="background: var(--grey-100);">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 420px; object-fit: cover; transition: transform 0.8s ease;">
                ${product.promo ? `<span class="badge-discount" style="position: absolute; top: 15px; left: 15px; background: #e74c3c; color: #fff; padding: 4px 8px; font-size: 10px; font-weight: 700;">-25%</span>` : ''}
                <button class="btn-fav" style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.9); border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm);">
                    <i class="${isFavorited(product.id) ? 'fas' : 'far'} fa-heart" style="font-size: 14px;"></i>
                </button>
                <div class="product-actions" style="position: absolute; bottom: 0; left: 0; width: 100%; transform: translateY(100%); transition: var(--transition-slow); background: rgba(0,0,0,0.8);">
                    <button class="btn-add-cart" style="width: 100%; color: #fff; padding: 15px; font-size: 11px; font-weight: 600; letter-spacing: 0.1em; background: transparent;">ADICIONAR AO CARRINHO</button>
                </div>
            </div>
            <div class="product-info" style="padding: 20px 0;">
                <span style="font-size: 10px; text-transform: uppercase; color: #999; letter-spacing: 0.1em; display: block; margin-bottom: 5px;">${product.category}</span>
                <h3 style="font-size: 16px; margin-bottom: 8px; font-family: var(--font-heading); color: #222;">${product.name}</h3>
                <div class="rating" style="font-size: 10px; color: #f1c40f; margin-bottom: 10px;">
                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                    <span style="color: #999; margin-left: 5px;">(122)</span>
                </div>
                <div class="flex" style="gap: 12px; align-items: baseline;">
                    <span style="font-weight: 700; font-size: 16px;">R$ ${product.price.toFixed(2)}</span>
                    ${product.oldPrice ? `<span style="text-decoration: line-through; color: #bbb; font-size: 13px;">R$ ${product.oldPrice.toFixed(2)}</span>` : ''}
                </div>
            </div>
        </div>
    `;
};

const isFavorited = (id) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some(fav => fav.id === id);
};

export const updateBadges = () => {
    const cartBadge = document.getElementById('cartBadge');
    const favBadge = document.getElementById('favBadge');
    if (cartBadge) cartBadge.innerText = getCartCount();
    if (favBadge) favBadge.innerText = getFavoritesCount();
};

// Global styles for product card interactions
const style = document.createElement('style');
style.textContent = `
    .product-card:hover .product-image-wrapper img { transform: scale(1.05); }
    .product-card:hover .product-actions { transform: translateY(0); }
    .nav-icons button { background: none; border: none; cursor: pointer; padding: 0; }
    .user-menu:hover .dropdown { display: block !important; }
`;
document.head.appendChild(style);

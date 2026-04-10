/**
 * Cart Manager - LocalStorage Implementation
 */
import { updateBadges } from './components.js';

export const addToCart = (product, quantity = 1) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingIndex = cart.findIndex(item => item.id === product.id);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadges();
    showToast(`${product.name} adicionado ao carrinho!`);
};

export const removeFromCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateBadges();
};

export const updateQuantity = (productId, delta) => {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const index = cart.findIndex(item => item.id === productId);
    
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateBadges();
    }
};

const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    toast.style = `
        position: fixed; bottom: 20px; right: 20px;
        background: var(--black); color: var(--white);
        padding: 15px 25px; border-radius: 4px; z-index: 1000;
        box-shadow: var(--shadow-lg); font-size: 14px;
        animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = '0.5s';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
};

// Add styles for toast animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);

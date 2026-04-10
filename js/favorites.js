/**
 * Favorites Manager - LocalStorage Implementation
 */
import { updateBadges } from './components.js';

export const toggleFavorite = (product) => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.findIndex(item => item.id === product.id);

    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(product);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateBadges();
};

export const isFavorited = (productId) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some(item => item.id === productId);
};

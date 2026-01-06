import { initDrawer } from './modules/drawer.js';

document.addEventListener('DOMContentLoaded', () => {
    try {
        initDrawer(); 
    } catch (error) {
        console.error('❌ Error initializing scripts.:', error);
    }
});
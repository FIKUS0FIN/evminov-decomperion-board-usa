/**
 * Reactive Shopping Cart Store (Vanilla ES6 Pub/Sub)
 */

class CartStore {
  constructor() {
    this.items = [];
    this.listeners = new Set();
    this.isDrawerOpen = false;
    this.loadFromStorage();
  }

  loadFromStorage() {
    try {
      const saved = localStorage.getItem('evminov_cart_v1');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    } catch {
      this.items = [];
    }
  }

  saveToStorage() {
    try {
      localStorage.setItem('evminov_cart_v1', JSON.stringify(this.items));
    } catch {
      // ignore
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.getState());
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.saveToStorage();
    const state = this.getState();
    this.listeners.forEach((fn) => fn(state));
  }

  getState() {
    const subtotal = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
    const klarnaPayment = subtotal > 0 ? (subtotal / 4).toFixed(2) : '0.00';
    
    return {
      items: [...this.items],
      subtotal,
      count,
      klarnaPayment,
      isDrawerOpen: this.isDrawerOpen,
    };
  }

  addItem(product, options = {}) {
    const finish = options.finish || 'Natural Pine';
    const shippingSpeed = options.shippingSpeed || 'fast-us'; // 'fast-us' or 'direct-ua'
    const effectivePrice = options.price !== undefined
      ? options.price
      : (shippingSpeed === 'fast-us' && product.fastPrice ? product.fastPrice : product.basePrice);
    
    const cartItemId = `${product.id}-${finish}-${shippingSpeed}`;
    const existingIndex = this.items.findIndex((item) => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
      this.items[existingIndex].quantity += 1;
    } else {
      this.items.push({
        cartItemId,
        productId: product.id,
        name: product.name,
        price: effectivePrice,
        basePrice: product.basePrice,
        fastPrice: product.fastPrice,
        image: product.image,
        finish,
        shippingSpeed,
        shippingLabel: options.shippingLabel || (shippingSpeed === 'fast-us' ? 'Fast 2-4 Day (Burbank, CA)' : 'Direct 2-3 Wk (Ukraine)'),
        quantity: 1,
      });
    }

    this.isDrawerOpen = true;
    this.notify();
  }

  removeItem(cartItemId) {
    this.items = this.items.filter((item) => item.cartItemId !== cartItemId);
    this.notify();
  }

  updateQuantity(cartItemId, delta) {
    const index = this.items.findIndex((item) => item.cartItemId === cartItemId);
    if (index > -1) {
      this.items[index].quantity += delta;
      if (this.items[index].quantity <= 0) {
        this.items.splice(index, 1);
      }
      this.notify();
    }
  }

  openDrawer() {
    this.isDrawerOpen = true;
    this.notify();
  }

  closeDrawer() {
    this.isDrawerOpen = false;
    this.notify();
  }

  clearCart() {
    this.items = [];
    this.notify();
  }
}

export const cartStore = new CartStore();

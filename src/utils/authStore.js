/**
 * Customer Account & Patient Portal Reactive Store (Pub/Sub)
 * Supports 1-Click Demo Login for Kostya Evminov / Test Patient
 */

const DEMO_USER = {
  id: 'usr_kostya_01',
  name: 'Kostya Evminov',
  role: 'Verified Patient & Method Specialist',
  email: 'kostya@evminov.com',
  phone: '+1 (818) 555-7746',
  address: '7539 Claybeck Ave, Burbank, CA 91505',
  memberSince: 'September 2026',
  serialNumber: 'EVM-2026-US-8921',
  modelName: 'Evminov Spine Decompression Board™ (Standard 3-Section)',
  finish: 'Natural Carpathian Pine',
  warrantyStatus: 'Active (10-Year Frame Warranty — Expires Sept 2036)',
  savedAngle: 18,
  savedWeight: 185,
  targetPullForce: 48,
  condition: 'Lumbar Disc Herniation (L4-S1) & Gym Recovery',
  courseProgress: {
    currentDay: 4,
    totalDays: 30,
    completedLessonIds: ['day-1', 'day-2', 'day-3'],
    streakDays: 4,
  },
  products: [
    {
      id: 'prod-01',
      name: 'Evminov Spine Decompression Board™ (Standard 3-Section)',
      serialNumber: 'EVM-2026-US-8921',
      status: 'Registered & Active',
      warranty: '10-Year Full Structural Warranty (Expires Sept 2036)',
      finish: 'Natural Carpathian Pine',
      capacity: '210 lbs (95 kg) • Up to 6\'4"',
      specs: '3-Section folding, 2.4" wall depth, aircraft-grade alloy carriage',
      purchaseDate: 'September 14, 2026',
      registrationStatus: 'Official Evminov Spine Registry',
    },
    {
      id: 'prod-02',
      name: 'Patented Glisson Cervical Traction System',
      serialNumber: 'GL-4491-US',
      status: 'Registered & Active',
      warranty: '3-Year Medical Fabric & Hardware Warranty',
      finish: 'Medical Grade Canvas',
      capacity: 'C1-C7 cervical lordosis decompression',
      specs: 'Memory foam anatomical chin-occipital sling with quick-latch carabiner',
      purchaseDate: 'September 14, 2026',
      registrationStatus: 'Included with Equipment Set',
    }
  ],
  subscriptions: [
    {
      id: 'sub-01',
      name: 'Evminov Clinical Video Masterclass & PT Check-ins',
      status: 'Active',
      cadence: 'Annual Membership (Complimentary with Board)',
      price: '$0.00 / yr ($199 Value, Waived)',
      nextBilling: 'September 14, 2027',
      paymentMethod: 'Visa ending in 4242',
      description: 'Full access to 30-day progressive clinical spine video library, doctor intake review, and protocol adjustments.',
    },
    {
      id: 'sub-02',
      name: 'Glisson Loop Comfort Pads & Hygiene Straps Auto-Replenish',
      status: 'Active',
      cadence: 'Every 6 Months',
      price: '$24.00',
      nextBilling: 'March 14, 2027',
      paymentMethod: 'Apple Pay (Visa •••• 4242)',
      description: 'Hospital-grade sanitizable organic cotton liners and replacement high-tensile safety suspension straps.',
    }
  ],
  paymentMethods: [
    {
      id: 'pm-01',
      type: 'Apple Pay',
      brand: 'Visa',
      last4: '4242',
      expiry: '08/28',
      isDefault: true,
      billingAddress: '7539 Claybeck Ave, Burbank, CA 91505',
    },
    {
      id: 'pm-02',
      type: 'Credit Card',
      brand: 'Mastercard',
      last4: '8812',
      expiry: '11/29',
      isDefault: false,
      billingAddress: '7539 Claybeck Ave, Burbank, CA 91505',
    }
  ],
  billingHistory: [
    {
      id: 'INV-88412',
      date: 'September 14, 2026',
      amount: 660,
      description: 'Evminov Pro-Traction Board (Standard) + Glisson Loop System',
      status: 'Paid (Authorized)',
      paymentMethod: 'Apple Pay (Visa •••• 4242)',
      receiptType: 'Itemized DME Medical Receipt (HCPCS E0941 / CPT 97012)',
    }
  ],
  messages: [
    {
      id: 'msg-01',
      sender: 'clinic',
      author: 'Dr. Olena Kravchenko, PT',
      role: 'Chief Spine Rehabilitation Specialist',
      time: 'Sept 14, 2026 • 10:30 AM',
      text: 'Hello Kostya! Welcome to the Evminov US Spine Recovery Program. Based on your initial clinical intake for lumbar disc unloading (L4-S1), your prescribed starting inclination is 18°. Please complete Phase 1 video lessons before attempting higher angles.',
    },
    {
      id: 'msg-02',
      sender: 'patient',
      author: 'Kostya Evminov',
      role: 'Patient',
      time: 'Sept 15, 2026 • 2:15 PM',
      text: 'Thanks Dr. Olena! The board arrived via UPS Ground from Burbank in 2 days. The wood stud mounting was very straightforward. I just completed Day 3 of the video routine and felt immediate decompression relief.',
    },
    {
      id: 'msg-03',
      sender: 'clinic',
      author: 'Dr. Olena Kravchenko, PT',
      role: 'Chief Spine Rehabilitation Specialist',
      time: 'Sept 15, 2026 • 4:45 PM',
      text: 'Glad to hear that, Kostya! At 18°, you achieve approximately 48-52 lbs of net physiological axial traction with -110 mmHg disc vacuum. Keep up the consistent 12-minute daily sessions. Let us know if you need any adjustments.',
    }
  ],
  orders: [
    {
      orderId: 'EV-88412',
      date: 'September 14, 2026',
      status: 'In Transit via UPS Ground',
      upsTracking: '1Z9999999999999999',
      estimatedDelivery: 'September 19, 2026',
      facility: 'Burbank Logistics Hub, CA',
      items: [
        { name: 'Evminov Spine Decompression Board (Standard)', finish: 'Natural Carpathian Pine', price: 595, quantity: 1 },
        { name: 'Patented Glisson Cervical Traction Loop', finish: 'Medical Grade Canvas', price: 65, quantity: 1 }
      ],
      total: 660,
      paymentMethod: 'Stripe Secure (Apple Pay — Visa •••• 4242)',
      currentStep: 2, // 0: Order Placed, 1: Burbank CA Sorted, 2: In Transit, 3: Out for Delivery
    }
  ]
};

class AuthStore {
  constructor() {
    this.user = null;
    this.isPortalOpen = false;
    this.activeTab = 'orders'; // 'orders', 'course', 'biometrics', 'documents'
    this.listeners = new Set();
    this.loadFromStorage();
  }

  loadFromStorage() {
    try {
      if (typeof localStorage !== 'undefined') {
        const storedUser = localStorage.getItem('evminov_auth_user');
        if (storedUser) {
          this.user = JSON.parse(storedUser);
        }
      }
    } catch {
      this.user = null;
    }
  }

  saveToStorage() {
    try {
      if (typeof localStorage !== 'undefined') {
        if (this.user) {
          localStorage.setItem('evminov_auth_user', JSON.stringify(this.user));
        } else {
          localStorage.removeItem('evminov_auth_user');
        }
      }
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
    return {
      user: this.user ? { ...this.user } : null,
      isLoggedIn: Boolean(this.user),
      isPortalOpen: this.isPortalOpen,
      activeTab: this.activeTab,
    };
  }

  loginAsDemo() {
    this.user = JSON.parse(JSON.stringify(DEMO_USER));
    this.isPortalOpen = true;
    this.activeTab = 'orders';
    this.notify();
    return this.user;
  }

  login(email) {
    this.user = {
      ...DEMO_USER,
      name: email.split('@')[0].toUpperCase() + ' (Patient)',
      email: email.trim(),
    };
    this.isPortalOpen = true;
    this.notify();
    return this.user;
  }

  logout() {
    this.user = null;
    this.isPortalOpen = false;
    this.notify();
  }

  openPortal(tab = 'orders') {
    this.activeTab = tab;
    this.isPortalOpen = true;
    this.notify();
  }

  closePortal() {
    this.isPortalOpen = false;
    this.notify();
  }

  setActiveTab(tab) {
    this.activeTab = tab;
    this.notify();
  }

  addOrder(orderData) {
    if (!this.user) {
      // auto-provision patient account if ordered as guest
      this.user = {
        ...DEMO_USER,
        name: orderData.customerName || 'Patient',
        email: orderData.customerEmail || 'patient@evminovusa.com',
        orders: []
      };
    }

    const newOrder = {
      orderId: orderData.orderId,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Order Dispatched — In Transit via UPS Ground',
      upsTracking: orderData.upsTracking,
      estimatedDelivery: orderData.deliveryDate,
      facility: 'Burbank Logistics Hub, CA',
      items: orderData.items || [],
      total: orderData.total || 450,
      paymentMethod: 'Stripe Authorized Payment',
      currentStep: 1,
    };

    this.user.orders.unshift(newOrder);
    this.notify();
  }

  toggleLessonComplete(lessonId) {
    if (!this.user || !this.user.courseProgress) return;
    const completed = this.user.courseProgress.completedLessonIds;
    const idx = completed.indexOf(lessonId);
    if (idx > -1) {
      completed.splice(idx, 1);
    } else {
      completed.push(lessonId);
    }
    this.notify();
  }

  updateSubscriptionStatus(subId, newStatus) {
    if (!this.user || !this.user.subscriptions) return;
    const sub = this.user.subscriptions.find((s) => s.id === subId);
    if (sub) {
      sub.status = newStatus;
      this.notify();
    }
  }

  addPaymentMethod(cardData) {
    if (!this.user) return;
    if (!this.user.paymentMethods) this.user.paymentMethods = [];
    const newPm = {
      id: `pm-${Date.now()}`,
      type: 'Credit Card',
      brand: cardData.brand || 'Visa',
      last4: cardData.last4 || '1234',
      expiry: cardData.expiry || '12/28',
      isDefault: Boolean(cardData.isDefault),
      billingAddress: cardData.billingAddress || this.user.address,
    };
    if (newPm.isDefault) {
      this.user.paymentMethods.forEach((p) => (p.isDefault = false));
    }
    this.user.paymentMethods.push(newPm);
    this.notify();
  }

  removePaymentMethod(pmId) {
    if (!this.user || !this.user.paymentMethods) return;
    this.user.paymentMethods = this.user.paymentMethods.filter((p) => p.id !== pmId);
    if (this.user.paymentMethods.length > 0 && !this.user.paymentMethods.some((p) => p.isDefault)) {
      this.user.paymentMethods[0].isDefault = true;
    }
    this.notify();
  }

  setDefaultPaymentMethod(pmId) {
    if (!this.user || !this.user.paymentMethods) return;
    this.user.paymentMethods.forEach((p) => {
      p.isDefault = p.id === pmId;
    });
    this.notify();
  }

  sendMessage(text) {
    if (!this.user || !text.trim()) return;
    if (!this.user.messages) this.user.messages = [];

    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'patient',
      author: this.user.name,
      role: 'Verified Patient',
      time: 'Just now',
      text: text.trim(),
    };
    this.user.messages.push(userMsg);
    this.notify();

    // Simulate direct clinical response from physical therapy team
    setTimeout(() => {
      if (!this.user || !this.user.messages) return;
      const clinicReply = {
        id: `msg-rep-${Date.now()}`,
        sender: 'clinic',
        author: 'Dr. Olena Kravchenko, PT',
        role: 'Chief Spine Rehabilitation Specialist',
        time: 'Just now',
        text: `Thank you for your message, ${this.user.name.split(' ')[0]}! Our clinical team has logged your feedback. Continue maintaining your prescribed ${this.user.savedAngle || 18}° traction incline and reach out anytime if pain shifts.`,
      };
      this.user.messages.push(clinicReply);
      this.notify();
    }, 1200);
  }

  saveBiometrics(savedAngle, savedWeight) {
    if (!this.user) return;
    if (savedAngle) this.user.savedAngle = Number(savedAngle);
    if (savedWeight) this.user.savedWeight = Number(savedWeight);
    this.notify();
  }

  registerProduct(productData) {
    if (!this.user) return;
    if (!this.user.products) this.user.products = [];
    const newProd = {
      id: `prod-${Date.now()}`,
      name: productData.name || 'Evminov Spine Decompression Board™',
      serialNumber: productData.serialNumber || `EVM-2026-US-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Registered & Active',
      warranty: '10-Year Full Structural Warranty',
      finish: productData.finish || 'Natural Carpathian Pine',
      capacity: productData.capacity || 'Up to 210 lbs',
      specs: productData.specs || 'Official Evminov Spine Registry',
      purchaseDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      registrationStatus: 'Official Evminov Spine Registry',
    };
    this.user.products.push(newProd);
    this.notify();
  }
}

export const authStore = new AuthStore();

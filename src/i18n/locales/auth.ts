import { Locale } from "@/i18n/types";

export interface AuthUiCopy {
  signInTab: string;
  registerTab: string;
  continueWithGoogle: string;
  orWithEmail: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  passwordLabel: string;
  passwordHint: string;
  signInButton: string;
  registerButton: string;
  signingIn: string;
  creatingAccount: string;
  portalTitle: string;
  portalSubtitle: string;
  orderTitle: string;
  orderSubtitle: string;
  adminTitle: string;
  adminSubtitle: string;
  signedInAs: string;
  signOut: string;
  adminPanelBtn: string;
  loadingSession: string;
  myOrdersHeading: string;
  myOrdersSub: string;
  noOrdersYet: string;
  placeFirstOrder: string;
  trackingLabel: string;
  totalLabel: string;
  statuses: Record<string, string>;
}

export const AUTH_UI_COPY: Record<Locale, AuthUiCopy> = {
  en: {
    signInTab: "Sign In",
    registerTab: "Create Account",
    continueWithGoogle: "Continue with Google",
    orWithEmail: "or with email & password",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "John Miller",
    emailLabel: "Email Address",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Phone (optional)",
    phonePlaceholder: "+1 (747) 234-5678",
    passwordLabel: "Password",
    passwordHint: "Minimum 8 characters",
    signInButton: "Sign In",
    registerButton: "Create Account & Continue",
    signingIn: "Signing in...",
    creatingAccount: "Creating account...",
    portalTitle: "Sign In to Evminov Patient Portal",
    portalSubtitle:
      "Access your saved spine protocols, live order tracking, warranty registration, and HSA/FSA documentation.",
    orderTitle: "Sign In Required Before Checkout",
    orderSubtitle:
      "Sign in with Google or create an account to lock your reservation, track shipping from Glendale, CA, and unlock your Patient Portal.",
    adminTitle: "Evminov Operations Admin Sign In",
    adminSubtitle:
      "Restricted access for authorized Evminov USA administrators.",
    signedInAs: "Signed in as",
    signOut: "Sign Out",
    adminPanelBtn: "Admin Panel",
    loadingSession: "Checking your session...",
    myOrdersHeading: "My Orders & Live Status",
    myOrdersSub: "Real-time updates from our Glendale, CA fulfillment hub.",
    noOrdersYet: "No orders linked to this account yet.",
    placeFirstOrder: "Configure & Order a Board",
    trackingLabel: "Tracking",
    totalLabel: "Total",
    statuses: {
      new: "New Reservation",
      confirmed: "Confirmed",
      paid: "Paid",
      in_production: "Preparing Dispatch",
      shipped: "Shipped",
      delivered: "Delivered",
      cancelled: "Cancelled",
    },
  },
  es: {
    signInTab: "Iniciar Sesión",
    registerTab: "Crear Cuenta",
    continueWithGoogle: "Continuar con Google",
    orWithEmail: "o con correo y contraseña",
    fullNameLabel: "Nombre Completo",
    fullNamePlaceholder: "Carlos Méndez",
    emailLabel: "Correo Electrónico",
    emailPlaceholder: "tu@correo.com",
    phoneLabel: "Teléfono (opcional)",
    phonePlaceholder: "+1 (305) 234-5678",
    passwordLabel: "Contraseña",
    passwordHint: "Mínimo 8 caracteres",
    signInButton: "Iniciar Sesión",
    registerButton: "Crear Cuenta y Continuar",
    signingIn: "Iniciando sesión...",
    creatingAccount: "Creando cuenta...",
    portalTitle: "Inicia Sesión en el Portal del Paciente Evminov",
    portalSubtitle:
      "Accede a tus protocolos espinales, seguimiento de pedidos en vivo, garantía de 10 años y documentos HSA/FSA.",
    orderTitle: "Inicia Sesión Antes de Confirmar tu Pedido",
    orderSubtitle:
      "Inicia sesión con Google o crea una cuenta para guardar tu reserva, seguir el envío desde Glendale, CA y acceder a tu Portal.",
    adminTitle: "Acceso de Administración Evminov",
    adminSubtitle: "Acceso restringido para administradores autorizados.",
    signedInAs: "Conectado como",
    signOut: "Cerrar Sesión",
    adminPanelBtn: "Panel Admin",
    loadingSession: "Verificando tu sesión...",
    myOrdersHeading: "Mis Pedidos y Estado en Vivo",
    myOrdersSub: "Actualizaciones en tiempo real desde nuestro centro en Glendale, CA.",
    noOrdersYet: "Aún no hay pedidos vinculados a esta cuenta.",
    placeFirstOrder: "Configurar y Pedir Tabla",
    trackingLabel: "Seguimiento",
    totalLabel: "Total",
    statuses: {
      new: "Nueva Reserva",
      confirmed: "Confirmado",
      paid: "Pagado",
      in_production: "Preparando Envío",
      shipped: "Enviado",
      delivered: "Entregado",
      cancelled: "Cancelado",
    },
  },
  fr: {
    signInTab: "Connexion",
    registerTab: "Créer un Compte",
    continueWithGoogle: "Continuer avec Google",
    orWithEmail: "ou avec e-mail et mot de passe",
    fullNameLabel: "Nom Complet",
    fullNamePlaceholder: "Marc Tremblay",
    emailLabel: "Adresse E-mail",
    emailPlaceholder: "vous@exemple.com",
    phoneLabel: "Téléphone (facultatif)",
    phonePlaceholder: "+1 (514) 234-5678",
    passwordLabel: "Mot de Passe",
    passwordHint: "Minimum 8 caractères",
    signInButton: "Se Connecter",
    registerButton: "Créer un Compte et Continuer",
    signingIn: "Connexion...",
    creatingAccount: "Création du compte...",
    portalTitle: "Connexion au Portail Patient Evminov",
    portalSubtitle:
      "Accédez à vos protocoles vertébraux, suivi de commande en direct, garantie 10 ans et justificatifs.",
    orderTitle: "Connexion Requise Avant Commande",
    orderSubtitle:
      "Connectez-vous avec Google ou créez un compte pour valider votre réservation, suivre l'expédition et ouvrir votre Portail.",
    adminTitle: "Administration Evminov",
    adminSubtitle: "Accès réservé aux administrateurs autorisés.",
    signedInAs: "Connecté en tant que",
    signOut: "Déconnexion",
    adminPanelBtn: "Admin",
    loadingSession: "Vérification de votre session...",
    myOrdersHeading: "Mes Commandes & Statut en Direct",
    myOrdersSub: "Mises à jour en temps réel depuis notre centre de Glendale, CA.",
    noOrdersYet: "Aucune commande liée à ce compte pour l'instant.",
    placeFirstOrder: "Configurer et Commander",
    trackingLabel: "Suivi",
    totalLabel: "Total",
    statuses: {
      new: "Nouvelle Réservation",
      confirmed: "Confirmée",
      paid: "Payée",
      in_production: "Préparation",
      shipped: "Expédiée",
      delivered: "Livrée",
      cancelled: "Annulée",
    },
  },
  uk: {
    signInTab: "Увійти",
    registerTab: "Реєстрація",
    continueWithGoogle: "Увійти через Google",
    orWithEmail: "або через email та пароль",
    fullNameLabel: "Ім'я та прізвище",
    fullNamePlaceholder: "Олександр Коваленко",
    emailLabel: "Електронна пошта",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Телефон (необов'язково)",
    phonePlaceholder: "+1 (747) 234-5678",
    passwordLabel: "Пароль",
    passwordHint: "Мінімум 8 символів",
    signInButton: "Увійти",
    registerButton: "Створити акаунт і продовжити",
    signingIn: "Вхід...",
    creatingAccount: "Створення акаунта...",
    portalTitle: "Вхід у Портал Пацієнта Євмінова",
    portalSubtitle:
      "Доступ до ваших протоколів, живого статусу замовлень, реєстрації 10-річної гарантії та документів HSA/FSA.",
    orderTitle: "Увійдіть перед оформленням замовлення",
    orderSubtitle:
      "Увійдіть через Google або створіть акаунт, щоб зафіксувати бронювання, відстежувати доставку з Glendale, CA та відкрити Портал.",
    adminTitle: "Вхід в Адмін-кабінет Evminov",
    adminSubtitle: "Доступ лише для авторизованих адміністраторів.",
    signedInAs: "Ви увійшли як",
    signOut: "Вийти",
    adminPanelBtn: "Адмін-кабінет",
    loadingSession: "Перевіряємо сесію...",
    myOrdersHeading: "Мої замовлення та статус",
    myOrdersSub: "Актуальний статус від нашого хабу в Glendale, CA.",
    noOrdersYet: "У цьому акаунті ще немає замовлень.",
    placeFirstOrder: "Підібрати та замовити дошку",
    trackingLabel: "Трекінг",
    totalLabel: "Сума",
    statuses: {
      new: "Нове замовлення",
      confirmed: "Підтверджено",
      paid: "Оплачено",
      in_production: "Готується до відправки",
      shipped: "Відправлено",
      delivered: "Доставлено",
      cancelled: "Скасовано",
    },
  },
  ru: {
    signInTab: "Войти",
    registerTab: "Регистрация",
    continueWithGoogle: "Войти через Google",
    orWithEmail: "или через email и пароль",
    fullNameLabel: "Имя и фамилия",
    fullNamePlaceholder: "Алексей Смирнов",
    emailLabel: "Электронная почта",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Телефон (необязательно)",
    phonePlaceholder: "+1 (747) 234-5678",
    passwordLabel: "Пароль",
    passwordHint: "Минимум 8 символов",
    signInButton: "Войти",
    registerButton: "Создать аккаунт и продолжить",
    signingIn: "Вход...",
    creatingAccount: "Создание аккаунта...",
    portalTitle: "Вход в Портал Пациента Евминова",
    portalSubtitle:
      "Доступ к вашим протоколам, статусам заказов, регистрации 10-летней гарантии и документам HSA/FSA.",
    orderTitle: "Войдите перед оформлением заказа",
    orderSubtitle:
      "Войдите через Google или создайте аккаунт, чтобы закрепить бронь, отслеживать доставку из Glendale, CA и открыть Портал.",
    adminTitle: "Вход в Админ-кабинет Evminov",
    adminSubtitle: "Доступ только для авторизованных администраторов.",
    signedInAs: "Вы вошли как",
    signOut: "Выйти",
    adminPanelBtn: "Админ-кабинет",
    loadingSession: "Проверяем сессию...",
    myOrdersHeading: "Мои заказы и статус",
    myOrdersSub: "Актуальные обновления от нашего хаба в Glendale, CA.",
    noOrdersYet: "В этом аккаунте пока нет заказов.",
    placeFirstOrder: "Выбрать и заказать доску",
    trackingLabel: "Трекинг",
    totalLabel: "Сумма",
    statuses: {
      new: "Новый заказ",
      confirmed: "Подтверждён",
      paid: "Оплачен",
      in_production: "Готовится к отправке",
      shipped: "Отправлен",
      delivered: "Доставлен",
      cancelled: "Отменён",
    },
  },
};

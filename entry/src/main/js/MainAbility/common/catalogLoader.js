var listeners = [];
var _catalog = null;
var _catalogLoading = false;

function bytesToString(bytes) {
  if (!bytes) {
    return '';
  }
  var result = '';
  for (var i = 0; i < bytes.length; i++) {
    result += String.fromCharCode(bytes[i]);
  }
  return result;
}

function parseRawJson(bytes) {
  var text = bytesToString(bytes);
  if (!text) {
    return [];
  }
  return JSON.parse(text);
}

function defaultPromotions(products) {
  var ids = [];
  if (products?.length) {
    for (var i = 0; i < products.length && ids.length < 3; i++) {
      ids.push(products[i].id);
    }
  }
  while (ids.length < 3) {
    ids.push(ids.length + 1);
  }
  return [
    {
      id: 1,
      title: 'Winter Warm Deals',
      subtitle: 'Up to 55% off heating gear',
      tag: 'FLASH SALE',
      image: '/common/assets/banner1.png',
      productId: ids[0],
      backgroundColor: '#FF6B00'
    },
    {
      id: 2,
      title: 'Smart Home Essentials',
      subtitle: 'Top rated electronics & gadgets',
      tag: 'HOT PICKS',
      image: '/common/assets/banner2.png',
      productId: ids[1],
      backgroundColor: '#FF6B00'
    },
    {
      id: 3,
      title: 'Kitchen Must-Haves',
      subtitle: 'Limited stock - order now!',
      tag: 'LIMITED TIME',
      image: '/common/assets/banner3.png',
      productId: ids[2],
      backgroundColor: '#45B7D1'
    }
  ];
}

function buildCatalog(products, categories, subcategories, comments,
  promotions, tags, productTags, productImages, discountedProducts) {
  var safeProducts = products || [];
  return {
    products: safeProducts,
    categories: categories || [],
    subcategories: subcategories || [],
    comments: comments || [],
    promotions: promotions || defaultPromotions(safeProducts),
    tags: tags || [],
    productTags: productTags || [],
    productImages: productImages || [],
    discountedProducts: discountedProducts || []
  };
}

function getFallbackCatalog() {
  var categories = [
    { name: 'Wearables' },
    { name: 'Home' },
    { name: 'Kitchen' },
    { name: 'Fitness' }
  ];

  var subcategories = [
    { name: 'Smart Watches', categoryId: 'Wearables', isHot: 1 },
    { name: 'Earbuds', categoryId: 'Wearables', isHot: 0 },
    { name: 'Smart Home', categoryId: 'Home', isHot: 1 },
    { name: 'Lighting', categoryId: 'Home', isHot: 0 },
    { name: 'Cookware', categoryId: 'Kitchen', isHot: 1 },
    { name: 'Coffee', categoryId: 'Kitchen', isHot: 0 },
    { name: 'Training', categoryId: 'Fitness', isHot: 1 },
    { name: 'Recovery', categoryId: 'Fitness', isHot: 0 }
  ];

  var products = [
    {
      id: 1,
      title: 'Pulse Pro Smart Watch',
      price: 129.99,
      rrp: 159.99,
      discountRate: 18,
      starScore: 4.7,
      voteCount: 1240,
      supplierId: 'Nova Gear',
      subCategoryId: 'Smart Watches',
      soldCount: 3250,
      monthlySalesIncrease: 18,
      hasFreeShipping: true,
      hasFastestDelivery: true,
      isAlmostSoldOut: false,
      isAboutToBeExhausted: false,
      isNewArrival: true
    },
    {
      id: 2,
      title: 'EchoLite Wireless Earbuds',
      price: 89.5,
      rrp: 109.0,
      discountRate: 18,
      starScore: 4.5,
      voteCount: 860,
      supplierId: 'SoundLab',
      subCategoryId: 'Earbuds',
      soldCount: 2140,
      monthlySalesIncrease: 12,
      hasFreeShipping: true,
      hasFastestDelivery: false,
      isAlmostSoldOut: false,
      isAboutToBeExhausted: true,
      isNewArrival: false
    },
    {
      id: 3,
      title: 'Aura Smart Lamp',
      price: 45.0,
      rrp: 59.0,
      discountRate: 24,
      starScore: 4.3,
      voteCount: 430,
      supplierId: 'Luma Home',
      subCategoryId: 'Lighting',
      soldCount: 980,
      monthlySalesIncrease: 9,
      hasFreeShipping: false,
      hasFastestDelivery: true,
      isAlmostSoldOut: false,
      isAboutToBeExhausted: false,
      isNewArrival: true
    },
    {
      id: 4,
      title: 'HomeSense Air Monitor',
      price: 74.99,
      rrp: 89.99,
      discountRate: 16,
      starScore: 4.4,
      voteCount: 510,
      supplierId: 'HomeSense',
      subCategoryId: 'Smart Home',
      soldCount: 1220,
      monthlySalesIncrease: 14,
      hasFreeShipping: true,
      hasFastestDelivery: false,
      isAlmostSoldOut: true,
      isAboutToBeExhausted: false,
      isNewArrival: false
    },
    {
      id: 5,
      title: 'Ceramic Chef Pan Set',
      price: 68.0,
      rrp: 92.0,
      discountRate: 26,
      starScore: 4.6,
      voteCount: 670,
      supplierId: 'KitchenPro',
      subCategoryId: 'Cookware',
      soldCount: 1760,
      monthlySalesIncrease: 11,
      hasFreeShipping: true,
      hasFastestDelivery: false,
      isAlmostSoldOut: false,
      isAboutToBeExhausted: false,
      isNewArrival: true
    },
    {
      id: 6,
      title: 'BrewMate Coffee Grinder',
      price: 55.5,
      rrp: 72.0,
      discountRate: 23,
      starScore: 4.2,
      voteCount: 320,
      supplierId: 'BrewMate',
      subCategoryId: 'Coffee',
      soldCount: 540,
      monthlySalesIncrease: 8,
      hasFreeShipping: false,
      hasFastestDelivery: true,
      isAlmostSoldOut: false,
      isAboutToBeExhausted: true,
      isNewArrival: false
    },
    {
      id: 7,
      title: 'StrideFit Resistance Kit',
      price: 38.0,
      rrp: 49.0,
      discountRate: 22,
      starScore: 4.1,
      voteCount: 210,
      supplierId: 'StrideFit',
      subCategoryId: 'Training',
      soldCount: 640,
      monthlySalesIncrease: 10,
      hasFreeShipping: false,
      hasFastestDelivery: false,
      isAlmostSoldOut: false,
      isAboutToBeExhausted: false,
      isNewArrival: true
    },
    {
      id: 8,
      title: 'Recovery Foam Roller',
      price: 24.99,
      rrp: 32.0,
      discountRate: 21,
      starScore: 4.0,
      voteCount: 180,
      supplierId: 'CoreFlex',
      subCategoryId: 'Recovery',
      soldCount: 420,
      monthlySalesIncrease: 7,
      hasFreeShipping: true,
      hasFastestDelivery: false,
      isAlmostSoldOut: false,
      isAboutToBeExhausted: false,
      isNewArrival: false
    }
  ];

  var comments = [
    { id: 1, productId: 1, userNameSurname: 'Aylin K.', comment: 'Super comfy and fast setup.' },
    { id: 2, productId: 1, userNameSurname: 'Can T.', comment: 'Battery lasts all week.' },
    { id: 3, productId: 2, userNameSurname: 'Mert G.', comment: 'Great sound for workouts.' },
    { id: 4, productId: 4, userNameSurname: 'Elif S.', comment: 'Clean, minimal design.' }
  ];

  return buildCatalog(products, categories, subcategories, comments, null, [], [], [], []);
}

function notifyListeners(catalog) {
  var pending = listeners.slice();
  listeners = [];
  for (var i = 0; i < pending.length; i++) {
    try {
      pending[i](catalog);
    } catch (e) {
      // ignore callback errors
    }
  }
}

export function ensureCatalogLoaded(callback) {
  if (_catalog) {
    if (callback) {
      callback(_catalog);
    }
    return true;
  }
  if (callback) {
    listeners.push(callback);
  }
  if (_catalogLoading) {
    return false;
  }
  _catalogLoading = true;
  _catalog = getFallbackCatalog();
  _catalogLoading = false;
  notifyListeners(_catalog);
  return true;
}

export function getCatalog() {
  if (!_catalog) {
    ensureCatalogLoaded();
  }
  return _catalog;
}

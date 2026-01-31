/**
 * data.js - Complete Product Catalog Module
 * HarmonyOS Lite Wearable E-Commerce Application
 * Contains all product data, categories, subcategories, comments, and promotions
 * No @ohos imports - pure JavaScript for Lite Wearable compatibility
 */

// ============================================================
// PRODUCTS - Full catalog of 100 products with shortened titles
// ============================================================
const PRODUCTS = [
  {id:6,
title:'Stainless Steel Kitchen Sink Strainer',
soldCount:2935,
monthlySalesIncrease:17,
discountRate:7,
subCategoryId:'Home Appliances',
rrp:-1,
price:1.2,
hasFreeShipping:false,
hasFastestDelivery:false,
supplierId:'Advanced Quality',
isAboutToBeExhausted:false,
isAlmostSoldOut:false,
imageIndex:0,
isNewArrival:true,
starScore:4.2,
voteCount:654},
  {id:7,
title:'LED Induction Sensor Light Rechargeable',
soldCount:12345,
monthlySalesIncrease:-1,
discountRate:4,
subCategoryId:'Home Appliances',
rrp:1.99,
price:2.15,
hasFreeShipping:true,
hasFastestDelivery:true,
supplierId:'LEYUN HOME AND LIVING',
isAboutToBeExhausted:true,
isAlmostSoldOut:false,
imageIndex:0,
isNewArrival:false,
starScore:2.8,
voteCount:234}
];

// ============================================================
// CATEGORIES - All 13 main product categories
// ============================================================
const CATEGORIES = [
  {name:'Appliances'},
  {name:'Automotive'},
  {name:'Business, Industry & Science'},
  {name:'Electronics'},
  {name:'Home & Kitchen'},
  {name:'Kids` Fashion'},
  {name:'Toys & Games'},
  {name:'Men`s Shoes'},
  {name:'Men\'s Clothing'},
  {name:'Office & School Supplies'},
  {name:'Smart Home'},
  {name:'Sport`s & Outdoors'},
  {name:'Tools & Home Improvement'}
];

// ============================================================
// SUBCATEGORIES - All 44 subcategories with category mapping
// ============================================================
const SUBCATEGORIES = [
  {name:'Heating Equipment', categoryId:'Appliances', filePath:'appliances/heatingequipment.jpg', isHot:1},
  {name:'Home Appliances', categoryId:'Appliances', filePath:'appliances/homeappliances.jpg', isHot:0},
  {name:'Juicers & Food Processors', categoryId:'Appliances', filePath:'appliances/juicersfoodprocessors.jpg', isHot:0},
  {name:'Car Stickers', categoryId:'Automotive', filePath:'automotive/carstickers.png', isHot:0},
  {name:'Car Storage & Organizers', categoryId:'Automotive', filePath:'automotive/carstorageorganizers.jpg', isHot:1},
  {name:'Motorcycles', categoryId:'Automotive', filePath:'automotive/motorcycles.jpeg', isHot:0},
  {name:'3D Printers & Accessories', categoryId:'Business, Industry & Science', filePath:'businessindustryscience/threedprintersaccessories.png', isHot:0},
  {name:'Fasteners', categoryId:'Business, Industry & Science', filePath:'businessindustryscience/fasteners.png', isHot:0},
  {name:'Food Service Equipment & Supplies', categoryId:'Business, Industry & Science', filePath:'businessindustryscience/foodserviceequipmentsupplies.jpg', isHot:1},
  {name:'Hand Tools', categoryId:'Business, Industry & Science', filePath:'businessindustryscience/handtools.png', isHot:0},
  {name:'Power Tools', categoryId:'Business, Industry & Science', filePath:'businessindustryscience/powertools.jpg', isHot:0},
  {name:'Professional Medical Supplies', categoryId:'Business, Industry & Science', filePath:'businessindustryscience/professionalmedicalsupplies.jpg', isHot:1},
  {name:'Science Education', categoryId:'Business, Industry & Science', filePath:'businessindustryscience/scienceeducation.png', isHot:0},
  {name:'Compuiter Components', categoryId:'Electronics', filePath:'electronics/computercomponents.jpg', isHot:0},
  {name:'Keyboards, Mice & Accessories', categoryId:'Electronics', filePath:'electronics/keyboardsmiceaccessories.jpg', isHot:0},
  {name:'Video Games', categoryId:'Electronics', filePath:'electronics/videogames.jpg', isHot:1},
  {name:'Computer Accessories', categoryId:'Electronics', filePath:'electronics/computeraccessories.jpg', isHot:0},
  {name:'Bath', categoryId:'Home & Kitchen', filePath:'homekitchen/bath.jpg', isHot:0},
  {name:'Bedding', categoryId:'Home & Kitchen', filePath:'homekitchen/bedding.jpg', isHot:0},
  {name:'Coffee, Tea & Espresso', categoryId:'Home & Kitchen', filePath:'homekitchen/coffeeteaespresso.jpg', isHot:1},
  {name:'Furniture', categoryId:'Home & Kitchen', filePath:'homekitchen/furniture.jpg', isHot:0},
  {name:'Kitchen Storage & Organization', categoryId:'Home & Kitchen', filePath:'homekitchen/kitchenstorageorganization.jpg', isHot:0},
  {name:'Baby Sets', categoryId:'Kids` Fashion', filePath:'kidsfashion/babysets.jpg', isHot:0},
  {name:'Electronic Toys', categoryId:'Toys & Games', filePath:'toysgames/electronictoys.jpg', isHot:0},
  {name:'Vehicles', categoryId:'Toys & Games', filePath:'toysgames/vehicles.jpeg', isHot:0},
  {name:'Men`s Sandals', categoryId:'Men`s Shoes', filePath:'mensshoes/menssandals.png', isHot:1},
  {name:'Men`s Slippers', categoryId:'Men`s Shoes', filePath:'mensshoes/mensslippers.png', isHot:0},
  {name:'Men`s Snow Boots', categoryId:'Men`s Shoes', filePath:'mensshoes/menssnowboots.png', isHot:1},
  {name:'Men`s Jackets & Coats', categoryId:'Men\'s Clothing', filePath:'mensclothing/mensjacketcoats.png', isHot:0},
  {name:'Men`s Sweaters', categoryId:'Men\'s Clothing', filePath:'mensclothing/menssweaters.jpg', isHot:0},
  {name:'Men`s T-Shirts', categoryId:'Men\'s Clothing', filePath:'mensclothing/menstshirts.png', isHot:0},
  {name:'Chairs & Sofas', categoryId:'Office & School Supplies', filePath:'officeschoolsupplies/chairssofas.png', isHot:0},
  {name:'Office Electronics', categoryId:'Office & School Supplies', filePath:'officeschoolsupplies/officeelectronics.png', isHot:0},
  {name:'Office Lighting', categoryId:'Office & School Supplies', filePath:'officeschoolsupplies/officelighting.png', isHot:0},
  {name:'Home Entertainment', categoryId:'Smart Home', filePath:'smarthome/homeentertainment.png', isHot:0},
  {name:'Smart Devices', categoryId:'Smart Home', filePath:'smarthome/smartdevices.png', isHot:1},
  {name:'Smartwatch & Accessories', categoryId:'Smart Home', filePath:'smarthome/smartwatchaccessories.png', isHot:0},
  {name:'WIFI & Networking', categoryId:'Smart Home', filePath:'smarthome/wifinetworking.png', isHot:0},
  {name:'Climbing & Survival Tools', categoryId:'Sport`s & Outdoors', filePath:'sportsoutdoors/climbingsurvivaltools.png', isHot:0},
  {name:'Fishing', categoryId:'Sport`s & Outdoors', filePath:'sportsoutdoors/fishing.png', isHot:0},
  {name:'Picnic & Camp Kitchen', categoryId:'Sport`s & Outdoors', filePath:'sportsoutdoors/picniccampkitchen.png', isHot:0},
  {name:'Sports', categoryId:'Sport`s & Outdoors', filePath:'sportsoutdoors/sports.jpg', isHot:1},
  {name:'Swimming, Diving & Water Sports', categoryId:'Sport`s & Outdoors', filePath:'sportsoutdoors/swimmingdivingwatersports.jpg', isHot:0},
  {name:'Electrical', categoryId:'Tools & Home Improvement', filePath:'toolshomeimprovement/electrical.png', isHot:0},
  {name:'Hand Tools', categoryId:'Tools & Home Improvement', filePath:'toolshomeimprovement/handtools.png', isHot:0},
  {name:'Hardware', categoryId:'Tools & Home Improvement', filePath:'toolshomeimprovement/hardware.png', isHot:1},
  {name:'Kitchen Fixtures', categoryId:'Tools & Home Improvement', filePath:'toolshomeimprovement/kitchenfixtures.png', isHot:0}
];

// ============================================================
// COMMENTS - Customer reviews for products
// ============================================================
const COMMENTS = [
  {id:1, comment:'A fantastic product! Exactly what I wanted', userNameSurname:'Eleanor Johnson', productId:1},
  {id:2, comment:'Turned out much better than I expected I would definitely recommend it', userNameSurname:'George Williams', productId:2},
  {id:3, comment:'Very good performance for the price', userNameSurname:'Isabella Brown', productId:3},
  {id:4, comment:'Very easy and practical to use', userNameSurname:'Oliver Davis', productId:4},
  {id:5, comment:'Thank you for the fast shipping and careful packaging', userNameSurname:'Sophia Miller', productId:5},
  {id:7, comment:'It would have been perfect if it was a bit larger', userNameSurname:'Ava Moore', productId:7},
  {id:8, comment:'The material feels high quality and sturdy', userNameSurname:'Noah Taylor', productId:8},
  {id:10, comment:'This is the product I\'ve been looking for a long time', userNameSurname:'James Thomas', productId:10},
  {id:11, comment:'Excellent value for money', userNameSurname:'Mia Jackson', productId:1},
  {id:13, comment:'Ideal for daily use', userNameSurname:'Charlotte Harris', productId:3},
  {id:16, comment:'The sound quality is even better than I expected', userNameSurname:'Daniel Walker', productId:6},
  {id:17, comment:'The design is very stylish and modern', userNameSurname:'Harper Hall', productId:7},
  {id:18, comment:'The battery life seems a bit short', userNameSurname:'Henry Allen', productId:8},
  {id:19, comment:'I really like the texture', userNameSurname:'Ella Young', productId:9},
  {id:24, comment:'Very comfortable to wear', userNameSurname:'Andrew Adams', productId:14},
  {id:25, comment:'Easy to clean and maintain', userNameSurname:'Lily Carter', productId:15},
  {id:26, comment:'Fast delivery and well-protected', userNameSurname:'Ryan Mitchell', productId:16},
  {id:27, comment:'The instructions could have been clearer', userNameSurname:'Grace Roberts', productId:17},
  {id:28, comment:'Looks exactly like the picture online', userNameSurname:'David Phillips', productId:18},
  {id:30, comment:'I use it every day and it\'s still going strong', userNameSurname:'Joseph Evans', productId:20},
  {id:31, comment:'A solid and reliable product', userNameSurname:'Scarlett Turner', productId:21},
  {id:32, comment:'The best purchase I\'ve made this year', userNameSurname:'Jackson Parker', productId:22},
  {id:34, comment:'Good quality for the price', userNameSurname:'Gabriel Stewart', productId:24},
  {id:35, comment:'Met my expectations perfectly', userNameSurname:'Aubrey Morris', productId:25},
  {id:36, comment:'Stylish and functional', userNameSurname:'Owen Cook', productId:26},
  {id:37, comment:'A great addition to my collection', userNameSurname:'Layla James', productId:27},
  {id:38, comment:'Easy to assemble and use', userNameSurname:'Caleb Reed', productId:28},
  {id:39, comment:'Very happy with the purchase', userNameSurname:'Hazel Bailey', productId:29},
  {id:40, comment:'Would recommend to anyone looking for this type of product', userNameSurname:'Carter Price', productId:30},
  {id:41, comment:'Excellent performance', userNameSurname:'Skylar Bennett', productId:31},
  {id:42, comment:'Looks great and works well', userNameSurname:'Ryan Murphy', productId:32},
  {id:43, comment:'A fantastic value', userNameSurname:'Addison Ward', productId:33},
  {id:44, comment:'No complaints whatsoever', userNameSurname:'Lucas Fisher', productId:34},
  {id:45, comment:'Very pleased with the quality', userNameSurname:'Savannah Howard', productId:35},
  {id:46, comment:'A must-have item!', userNameSurname:'Isaac Wood', productId:36},
  {id:47, comment:'Simple to use and effective', userNameSurname:'Grace Martin', productId:37},
  {id:48, comment:'Arrived quickly and in perfect condition', userNameSurname:'Owen Sanders', productId:38},
  {id:49, comment:'Love the design and functionality', userNameSurname:'Chloe Ross', productId:39},
  {id:50, comment:'Definitely worth the money', userNameSurname:'Elijah Powell', productId:40},
  {id:51, comment:'High-quality materials used', userNameSurname:'Natalie Long', productId:41},
  {id:52, comment:'A very useful product', userNameSurname:'Julian Barnes', productId:42},
  {id:53, comment:'Easy to handle and store', userNameSurname:'Stella Gray', productId:43},
  {id:54, comment:'Great for beginners', userNameSurname:'Aaron Baker', productId:44},
  {id:55, comment:'Very durable and long-lasting', userNameSurname:'Ellie Cooper', productId:45},
  {id:56, comment:'A good investment', userNameSurname:'Anthony Hayes', productId:46},
  {id:57, comment:'Exactly what I needed', userNameSurname:'Victoria Perry', productId:47},
  {id:58, comment:'Very happy with the features', userNameSurname:'Adam Powell', productId:48},
  {id:59, comment:'A reliable and trustworthy product', userNameSurname:'Scarlett Simmons', productId:49},
  {id:60, comment:'Would definitely buy from this seller again', userNameSurname:'Jackson Coleman', productId:50},
  {id:61, comment:'Super easy to set up', userNameSurname:'Avery Murphy', productId:51},
  {id:62, comment:'Looks even better in person', userNameSurname:'Gabriel Stewart', productId:52},
  {id:63, comment:'A great product for the price', userNameSurname:'Aubrey Long', productId:53},
  {id:64, comment:'Very satisfied with its performance', userNameSurname:'Owen Barnes', productId:54},
  {id:65, comment:'Highly recommend it to everyone', userNameSurname:'Layla Gray', productId:55},
  {id:66, comment:'A quality product that delivers', userNameSurname:'Caleb Baker', productId:56},
  {id:68, comment:'Fast shipping and great communication', userNameSurname:'Carter Hayes', productId:58},
  {id:69, comment:'Love the way it feels', userNameSurname:'Skylar Perry', productId:59},
  {id:70, comment:'A very good buy', userNameSurname:'Ryan Powell', productId:60},
  {id:71, comment:'Sturdy and well-built', userNameSurname:'Addison Simmons', productId:61},
  {id:72, comment:'The best one I\'ve owned', userNameSurname:'Lucas Coleman', productId:62},
  {id:73, comment:'Simple yet effective', userNameSurname:'Savannah Murphy', productId:63},
  {id:74, comment:'Great for everyday use', userNameSurname:'Isaac Stewart', productId:64},
  {id:75, comment:'Excellent customer support', userNameSurname:'Grace Long', productId:65},
  {id:76, comment:'A fantastic addition to my home', userNameSurname:'Owen Barnes', productId:66},
  {id:77, comment:'Easy to operate', userNameSurname:'Chloe Gray', productId:67},
  {id:78, comment:'Arrived on time and as expected', userNameSurname:'Elijah Baker', productId:68},
  {id:79, comment:'Love the color and style', userNameSurname:'Natalie Cooper', productId:69},
  {id:80, comment:'Definitely a great purchase', userNameSurname:'Julian Hayes', productId:70},
  {id:81, comment:'Well worth the price', userNameSurname:'Stella Perry', productId:71},
  {id:82, comment:'A reliable and efficient product', userNameSurname:'Aaron Powell', productId:72},
  {id:83, comment:'Easy to carry around', userNameSurname:'Ellie Simmons', productId:73},
  {id:84, comment:'Perfect for my needs', userNameSurname:'Anthony Coleman', productId:74},
  {id:85, comment:'Very happy with the overall experience', userNameSurname:'Victoria Murphy', productId:75}

];

// ============================================================
// PROMOTIONS - Flash sale banners
// ============================================================
const PROMOTIONS = [
  {
    id: 1,
    title: 'Winter Warm Deals',
    subtitle: 'Up to 55% off heating gear',
    tag: 'FLASH SALE',
    image: '/common/assets/banner1.png',
    productId: 1,
    backgroundColor: '#FF6B00'
  },
  {
    id: 2,
    title: 'Smart Home Essentials',
    subtitle: 'Top rated electronics & gadgets',
    tag: 'HOT PICKS',
    image: '/common/assets/banner2.png',
    productId: 49,
    backgroundColor: '#FF6B00'
  },
  {
    id: 3,
    title: 'Kitchen Must-Haves',
    subtitle: 'Limited stock - order now!',
    tag: 'LIMITED TIME',
    image: '/common/assets/banner3.png',
    productId: 9,
    backgroundColor: '#45B7D1'
  }
];

function ensureCatalog() {
  if (!globalThis.__catalog) {
    globalThis.__catalog = {
      products: PRODUCTS,
      categories: CATEGORIES,
      subcategories: SUBCATEGORIES,
      comments: COMMENTS,
      promotions: PROMOTIONS
    };
  }
  return globalThis.__catalog;
}

export function initCatalog() {
  return ensureCatalog();
}

// ============================================================
// EXPORTED FUNCTIONS
// ============================================================

/**
 * Get all products
 * @returns {Array} Full product list
 */
export function getProducts() {
  return PRODUCTS;
}

/**
 * Get all categories
 * @returns {Array} Category list
 */
export function getCategories() {
  return CATEGORIES;
}

/**
 * Get all subcategories
 * @returns {Array} Subcategory list
 */
export function getSubcategories() {
  return SUBCATEGORIES;
}

/**
 * Get subcategories filtered by category name
 * @param {string} categoryName - The category name to filter by
 * @returns {Array} Filtered subcategories
 */
export function getSubcategoriesByCategory(categoryName) {
  if (!categoryName) {
    return SUBCATEGORIES;
  }
  return SUBCATEGORIES.filter(function(sub) {
    return sub.categoryId === categoryName;
  });
}

/**
 * Get products filtered by subcategory name
 * @param {string} subcategoryName - The subcategory name to filter by
 * @returns {Array} Filtered products
 */
export function getProductsBySubcategory(subcategoryName) {
  if (!subcategoryName) {
    return PRODUCTS;
  }
  return PRODUCTS.filter(function(product) {
    return product.subCategoryId === subcategoryName;
  });
}

/**
 * Get products filtered by category name (matches through subcategories)
 * @param {string} categoryName - The category name to filter by
 * @returns {Array} Filtered products
 */
export function getProductsByCategory(categoryName) {
  if (!categoryName) {
    return PRODUCTS;
  }
  var subcategoryNames = SUBCATEGORIES
    .filter(function(sub) { return sub.categoryId === categoryName; })
    .map(function(sub) { return sub.name; });

  return PRODUCTS.filter(function(product) {
    return subcategoryNames.includes(product.subCategoryId);
  });
}

/**
 * Get a single product by ID
 * @param {number} id - The product ID
 * @returns {Object|undefined} The product or undefined
 */
export function getProductById(id) {
  var numId = typeof id === 'string' ? parseInt(id, 10) : id;
  return PRODUCTS.find(function(product) {
    return product.id === numId;
  });
}

/**
 * Get all products with a discount
 * @returns {Array} Products with discountRate > 0
 */
export function getDiscountedProducts() {
  return PRODUCTS.filter(function(product) {
    return product.discountRate > 0;
  });
}

/**
 * Get comments for a specific product
 * @param {number} productId - The product ID
 * @returns {Array} Comments for the product
 */
export function getCommentsByProductId(productId) {
  var numId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
  return COMMENTS.filter(function(comment) {
    return comment.productId === numId;
  });
}

/**
 * Search products by query string (searches title and supplier)
 * @param {string} query - The search query
 * @returns {Array} Matching products
 */
export function searchProducts(query) {
  if (!query || query.trim().length === 0) {
    return [];
  }
  var lowerQuery = query.toLowerCase().trim();
  return PRODUCTS.filter(function(product) {
    var titleMatch = product.title.toLowerCase().includes(lowerQuery);
    var supplierMatch = product.supplierId.toLowerCase().includes(lowerQuery);
    var categoryMatch = product.subCategoryId.toLowerCase().includes(lowerQuery);
    return titleMatch || supplierMatch || categoryMatch;
  });
}

/**
 * Get the image path for a product
 * @param {number} productId - The product ID
 * @param {number} imageIndex - The image index (default 0)
 * @returns {string} The image path
 */
export function getProductImagePath(productId, imageIndex) {
  var idx = imageIndex || 0;
  return `/common/assets/products/product_` + productId + `_` + idx + `.png`;
}

/**
 * Format a price value for display
 * @param {number} price - The price value
 * @returns {string} Formatted price string
 */
export function formatPrice(price) {
  if (price === undefined || price === null || price < 0) {
    return '--';
  }
  return `$` + price.toFixed(2);
}

/**
 * Format a star rating for display on wearable
 * @param {number} score - The star score (1-5)
 * @returns {string} Formatted rating string
 */
export function formatRating(score) {
  if (!score || score <= 0) {
    return '0.0';
  }
  return score.toFixed(1);
}

/**
 * Get recommended products (high rating, high sales)
 * @param {number} limit - Maximum number of products to return
 * @returns {Array} Recommended products sorted by score and sales
 */
export function getRecommendedProducts(limit) {
  var maxCount = limit || 10;
  var sorted = PRODUCTS.slice().sort(function(a, b) {
    var scoreA = (a.starScore * 0.6) + (Math.min(a.soldCount, 50000) / 50000 * 0.4);
    var scoreB = (b.starScore * 0.6) + (Math.min(b.soldCount, 50000) / 50000 * 0.4);
    return scoreB - scoreA;
  });
  return sorted.slice(0, maxCount);
}

/**
 * Get promotional banners
 * @returns {Array} Promotions array
 */
export function getPromotions() {
  return PROMOTIONS;
}

/**
 * Get new arrival products
 * @returns {Array} Products marked as new arrivals
 */
export function getNewArrivals() {
  return PRODUCTS.filter(function(product) {
    return product.isNewArrival === true;
  });
}

/**
 * Get products that are almost sold out
 * @returns {Array} Products marked as almost sold out
 */
export function getAlmostSoldOut() {
  return PRODUCTS.filter(function(product) {
    return product.isAlmostSoldOut === true;
  });
}

/**
 * Get products with free shipping
 * @returns {Array} Products with free shipping
 */
export function getFreeShippingProducts() {
  return PRODUCTS.filter(function(product) {
    return product.hasFreeShipping === true;
  });
}

/**
 * Get the total number of products
 * @returns {number} Product count
 */
export function getProductCount() {
  return PRODUCTS.length;
}

/**
 * Get the total number of categories
 * @returns {number} Category count
 */
export function getCategoryCount() {
  return CATEGORIES.length;
}

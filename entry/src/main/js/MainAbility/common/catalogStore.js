// Catalog store reads catalog data from module scope.
// Keeps page JS small by avoiding direct imports of the full catalog.

import { ensureCatalogLoaded, getCatalog as getLoadedCatalog } from './catalogLoader';

function getCatalog() {
  ensureCatalogLoaded();
  var catalog = getLoadedCatalog();
  if (!catalog) {
    return {
      products: [],
      categories: [],
      subcategories: [],
      comments: [],
      promotions: [],
      tags: [],
      productTags: [],
      productImages: [],
      discountedProducts: []
    };
  }
  return catalog;
}

export function getProducts() {
  return getCatalog().products;
}

export function getProductCount() {
  return getCatalog().products.length;
}

export function getCategories() {
  return getCatalog().categories;
}

export function getSubcategories() {
  return getCatalog().subcategories;
}

export function getPromotions() {
  return getCatalog().promotions;
}

export function getTags() {
  return getCatalog().tags;
}

export function getProductTags() {
  return getCatalog().productTags;
}

export function getProductImages() {
  return getCatalog().productImages;
}

export function getDiscountedProducts() {
  return getCatalog().discountedProducts;
}

export function getTagsForProduct(productId) {
  var numId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
  var productTags = getCatalog().productTags;
  if (!productTags || productTags.length === 0) {
    return [];
  }
  var tags = getCatalog().tags;
  var tagMap = {};
  for (var t = 0; t < tags.length; t++) {
    if (tags[t]?.id) {
      tagMap[tags[t].id] = tags[t].id;
    }
  }
  var result = [];
  for (var i = 0; i < productTags.length; i++) {
    if (productTags[i].productId === numId) {
      var tagId = productTags[i].tagId;
      if (tagId) {
        result.push(tagMap[tagId] || tagId);
      }
    }
  }
  return result;
}

export function getProductImagesById(productId) {
  var numId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
  var images = getCatalog().productImages;
  for (var i = 0; i < images.length; i++) {
    if (images[i].productId === numId) {
      return images[i].images || [];
    }
  }
  return [];
}

export function getSubcategoriesByCategory(categoryName) {
  var subcategories = getCatalog().subcategories;
  if (!categoryName) {
    return subcategories;
  }
  return subcategories.filter(function(sub) {
    return sub.categoryId === categoryName;
  });
}

export function getProductsBySubcategory(subcategoryName) {
  var products = getCatalog().products;
  if (!subcategoryName) {
    return products;
  }
  return products.filter(function(product) {
    return product.subCategoryId === subcategoryName;
  });
}

export function getProductsByCategory(categoryName) {
  var products = getCatalog().products;
  if (!categoryName) {
    return products;
  }
  var subcategoryNames = getCatalog().subcategories
    .filter(function(sub) { return sub.categoryId === categoryName; })
    .map(function(sub) { return sub.name; });

  return products.filter(function(product) {
    return subcategoryNames.indexOf(product.subCategoryId) !== -1;
  });
}

export function getProductById(id) {
  var products = getCatalog().products;
  var numId = typeof id === 'string' ? parseInt(id, 10) : id;
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === numId) {
      return products[i];
    }
  }
  return undefined;
}

export function getCommentsByProductId(productId) {
  var comments = getCatalog().comments;
  var numId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
  return comments.filter(function(comment) {
    return comment.productId === numId;
  });
}

export function getProductImagePath(productId, imageIndex) {
  var idx = imageIndex || 1;
  return `/resources/rawfile/images/products/` + productId + `/` + idx + `.png`;
}

export function formatPrice(price) {
  if (price === undefined || price === null || price < 0) {
    return '--';
  }
  return `$` + price.toFixed(2);
}

export function formatRating(score) {
  if (!score || score <= 0) {
    return '0.0';
  }
  return score.toFixed(1);
}

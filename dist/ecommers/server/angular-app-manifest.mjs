
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PY35PZW5.js",
      "chunk-LFC7O3KD.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2WMAMZF6.js",
      "chunk-LFC7O3KD.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-DWH5EWY4.js",
      "chunk-LFC7O3KD.js"
    ],
    "route": "/Forgot-Password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DXGAIPXX.js",
      "chunk-C25PNMAC.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QCMRR7IH.js"
    ],
    "route": "/brands"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-SEC2KH3U.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DQRA7TRY.js"
    ],
    "route": "/categories"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FEFMSHMX.js"
    ],
    "route": "/allorders"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PF6MXGQE.js",
      "chunk-LFC7O3KD.js"
    ],
    "route": "/checkout/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RW7ETVSW.js",
      "chunk-C25PNMAC.js"
    ],
    "route": "/details/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XDBQUO3N.js",
      "chunk-C25PNMAC.js"
    ],
    "route": "/products"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B6XMEQB6.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9554, hash: '7e4c93ce8002eb5d3c1c51e2726a44087347003acb3ac88973f8fbc5189fa3a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1478, hash: '095a7a7743f6f592a52dea05d8e31a42d8c3efbb27d724762489c2823c3d2f49', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 10404, hash: '8ae13d0ee0a1bcb2ff8c53bbdaa2d572493e36e2a48ca7a841d3684bf99d374c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 10352, hash: '6d0e3df1ccab1b105fb4826c91c8b3808fc2f8bee16c0122fb52e148c2451b33', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 10352, hash: '26123efb88e473d91b69d997bed3f04df88bc7c382a6190e2a141221f8e7473d', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 10352, hash: 'a0749c85544f24689cf412d4827f73049e365fa95b9c9af93a86afa17a965e01', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 10404, hash: '0c9f3a7fdee0926bb7cb1b39fe34fa3cb22c1bb75260d22a1a86de04299cb239', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 10352, hash: 'be7bdd24a5aaf9abe9e0fa19bf7dcbfbb4945610fd2c6e164fd5e6e9b36b7b6e', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'styles-PKZ7PYZZ.css': {size: 366142, hash: 'hfxgI2ZYI/g', text: () => import('./assets-chunks/styles-PKZ7PYZZ_css.mjs').then(m => m.default)}
  },
};

import { $ } from './utils.js';
import { ProductList } from './components/productList.js';
import { Carousel } from './components/carousel.js';
require('../sass/style.sass');

const CAROUSEL_LINE_NUMBER = 15;

const init = () => {
  const productMoreArea = $('.product-more-area');
  const productList = new ProductList();

  const carousel = new Carousel(CAROUSEL_LINE_NUMBER);

  carousel.init();
  productList.init();

  productMoreArea.addEventListener('click', () => {
    productList.addNewProductLine();
  });
};

init();

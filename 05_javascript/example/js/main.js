import Hamburger from './src/hamburger.js';
import Query from './src/query.js';

const hamburgerNode = document.querySelector('.hamburger');
const hamburger = new Hamburger(hamburgerNode);

const priceButton = document.querySelector('.price__button');
const urlQuery = 'https://httpbin.org/status/200';
const query = new Query(urlQuery);
query.sendQuery(priceButton);

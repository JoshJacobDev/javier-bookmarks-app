import $ from 'jquery';
import api from './api';
import 'normalize.css';
import './index.css';
import store from './store.js';

import shoppingList from './shopping-list';
api.createItem('Pears');

api.getItems()
  .then(res => res.json())
  .then((items) => {
    console.log(items)
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
  });

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      return api.updateItem(item.id, { name: 'foobar' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));
const main = function () {
  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

import React from 'react';

import './App.css';
import { Cart } from './features/cart/Cart';
import { CurrencyFilter } from './features/currencyFilter/CurrencyFilter';
import { Header } from './features/header/header';
import { Inventory } from './features/inventory/Inventory';
import { SearchTerm } from './features/searchTerm/SearchTerm';

export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
    <Header />
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      /> 
      <SearchTerm
      searchTerm={state.searchTerm}
      dispatch={dispatch}
      />
      <Inventory
        // inventory={state.inventory}
        inventory={getFilteredItems(state.inventory, 
        state.searchTerm)}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      <Cart 
      cart={state.cart}
      currencyFilter={state.currencyFilter}
      dispatch={dispatch}
      />
    </div>
  );
};


function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
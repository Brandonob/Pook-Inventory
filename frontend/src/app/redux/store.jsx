import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import cartsReducer from './slices/cartsSlice';
import productsReducer from './slices/productsSlice';
import databaseReducer from './slices/databaseSlice';
import purchaseReducer from './slices/purchaseSlice';
import { localStorageMiddleware } from './middleware/localStorageMiddleware';

// Load cart state from localStorage
const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cartState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const cartState = loadCartState();

export const store = configureStore({
  reducer: {
    users: usersReducer,
    carts: cartsReducer,
    products: productsReducer,
    database: databaseReducer,
    purchases: purchaseReducer,
    },
  preloadedState: {
    carts: {
      ...cartState,
      allCarts: [], // Initialize empty array for allCarts
      loading: false,
      error: null,
    }
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(localStorageMiddleware),
  });

export default store;

import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '../app/redux/calculator.slice';
import themeReducer from '../app/redux/theme.slice';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  theme: themeReducer
});

const persistConfig = {
  key: 'root',
  storage
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: composeWithDevTools
});

export const persistor = persistStore(store);
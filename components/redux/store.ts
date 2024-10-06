import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import SagaData from './saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Disable this middleware in development mode
        ignoredActions: ['persist/PERSIST'],
        // If necessary, also ignore other actions or paths
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(SagaData);

const persistor = persistStore(store);

export {store, persistor}; // Ensure both are exported

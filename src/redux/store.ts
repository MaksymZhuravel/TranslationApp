import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {translateApi} from '~redux/translate/translate';

const store = configureStore({
  reducer: {
    [translateApi.reducerPath]: translateApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(translateApi.middleware),
});

setupListeners(store.dispatch);

export default store;

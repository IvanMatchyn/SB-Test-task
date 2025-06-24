import { persistReducer, persistStore } from 'redux-persist';
import { PersistPartial } from 'redux-persist/lib/persistReducer';
import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import { wrappedStorage } from '../storage/persistStorage.ts';
import { rootReducer } from './reducers.ts';

const whitelist: string[] = [
  // Add reducer's name that should be in whitelist of persistStore
];

const persistConfig = {
  key: 'tc-storage',
  storage: wrappedStorage,
  whitelist,
};

const wrappedRootReducer = (
  state: ReturnType<typeof rootReducer> | undefined,
  action: PayloadAction,
): ReturnType<typeof rootReducer> => {
  // if (action.type === logoutAction.type && state) {
  //   const persistedState = whitelist?.reduce(
  //     (acc: Record<string, object>, key) => {
  //       if (state?.[key]) {
  //         acc[key] = state?.[key];
  //       }
  //       return acc;
  //     },
  //     {} as Partial<RootState>,
  //   );
  //
  //   return rootReducer(persistedState as typeof state, action);
  // }

  return rootReducer(state, action);
};

const persistedReducer = persistReducer(
  persistConfig,
  wrappedRootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,

});

export type RootState = ReturnType<typeof store.getState> & PersistPartial;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { rootReducer } from './rootReducer';
import { rootApi } from '../shared/api/rootApi';

export const appStore = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat([rootApi.middleware]),
	devTools: import.meta.env.DEV,
});

export type AppRootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

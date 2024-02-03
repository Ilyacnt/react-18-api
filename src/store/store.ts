import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rootApi } from '../api/rootApi';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
	[rootApi.reducerPath]: rootApi.reducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat([rootApi.middleware]),
	devTools: import.meta.env.DEV,
});

export type AppRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;

import { combineReducers } from '@reduxjs/toolkit/react';

import { rootApi } from '@/shared/api/rootApi';

export const rootReducer = combineReducers({
	[rootApi.reducerPath]: rootApi.reducer,
});

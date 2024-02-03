import { combineReducers } from '@reduxjs/toolkit/react';

import { sessionSlice } from '@/entities/session/model/session-slice';
import { ESliceName } from '@/shared/api/constants';
import { rootApi } from '@/shared/api/root-api';

export const rootReducer = combineReducers({
	[ESliceName.ROOT_API]: rootApi.reducer,
	[ESliceName.SESSION_SLICE]: sessionSlice.reducer,
});

import { createSlice } from '@reduxjs/toolkit';

import { sessionApi } from '../api/session-api';
import { ESliceName } from '@/shared/api/constants';

type SessionSliceState = {
	isAuthorized: boolean;
	accessToken?: string;
	userId?: number;
};

// TODO: Make auth
const initialState: SessionSliceState = {
	userId: 1,
	isAuthorized: true,
};

export const sessionSlice = createSlice({
	name: ESliceName.SESSION_SLICE,
	initialState,
	reducers: {
		clearSessionData: state => {
			state.accessToken = undefined;
			state.userId = undefined;
			state.isAuthorized = false;
		},
	},
	extraReducers: builder => {
		builder.addMatcher(sessionApi.endpoints.login.matchFulfilled, (state: SessionSliceState, { payload }) => {
			console.log('matched fulfilld');

			state.isAuthorized = true;
			state.userId = payload.userId;
			state.accessToken = payload.accessToken;
		});
		builder.addMatcher(sessionApi.endpoints.login.matchRejected, () => {
			console.log('match rejected');
		});
	},
});

export const { clearSessionData } = sessionSlice.actions;

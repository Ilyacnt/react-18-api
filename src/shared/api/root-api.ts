import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL, ESliceName } from './constants';

export const rootApi = createApi({
	reducerPath: ESliceName.ROOT_API,
	baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
	endpoints: () => ({}),
});

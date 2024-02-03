const API = 'api';
const API_VERSION = 'v1';

export const API_BASE_URL = `${import.meta.env.VITE_API_BASE}/${API}/${API_VERSION}`;

export enum EMethodHTTP {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
}

export enum ESliceName {
	ROOT_API = 'ROOT_API',
	POST_API = 'POST_API',

	SESSION_SLICE = 'SESSION_SLICE',
}

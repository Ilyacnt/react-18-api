declare global {
	/**
	 * Custom utility types
	 */
	export type Nullable<T> = T | null;
	export type Nullish<T> = T | null | undefined | void;

	/**
	 * Shared kernel
	 */

	/**
	 * ⚠️ FSD
	 *
	 * Its hack way to export redux infering types from @/app
	 * and use it in @/shared/model/hooks.ts
	 */

	declare type AppRootState = import('../src/app/app-store').AppRootState;
	declare type AppDispatch = import('../src/app/app-store').AppDispatch;
}

export {};

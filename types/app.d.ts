declare global {
	/**
	 * Shared kernel
	 */

	/**
	 * ⚠️ FSD
	 *
	 * Its hack way to export redux infering types from @/app
	 * and use it in @/shared/model/hooks.ts
	 */

	declare type AppRootState = import('../src/app/appStore').AppRootState;
	declare type AppDispatch = import('../src/app/appStore').AppDispatch;
}

export {};

import { ReactNode, createContext, useEffect, useState } from 'react';

import { EThemeApp } from './types';

type TThemeProviderState = {
	theme: EThemeApp;
	setTheme: (theme: EThemeApp) => void;
};

const initialState: TThemeProviderState = {
	theme: EThemeApp.SYSTEM,
	setTheme: () => null,
};

export const ThemeProviderContext = createContext<TThemeProviderState>(initialState);

type TThemeProviderProps = {
	children: ReactNode;
	defaultTheme?: EThemeApp;
	storageKey?: string;
};

export function ThemeProvider({
	children,
	defaultTheme = EThemeApp.SYSTEM,
	storageKey = 'ui-theme',
	...props
}: TThemeProviderProps) {
	const [theme, setTheme] = useState<EThemeApp>(
		() => (localStorage.getItem(storageKey) as EThemeApp) || defaultTheme,
	);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(EThemeApp.LIGHT, EThemeApp.DARK);

		if (theme === EThemeApp.SYSTEM) {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? EThemeApp.DARK
				: EThemeApp.LIGHT;

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	const value = {
		theme,
		setTheme: (theme: EThemeApp) => {
			localStorage.setItem(storageKey, theme);
			setTheme(theme);
		},
	};

	return (
		<ThemeProviderContext.Provider
			{...props}
			value={value}
		>
			{children}
		</ThemeProviderContext.Provider>
	);
}

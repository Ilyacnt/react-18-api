import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { appRouter } from './app-router.tsx';
import './globals.css';
import { appStore } from './app-store.ts';
import { ThemeProvider } from '@/shared/ui/theme-provider/theme-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<ReduxProvider store={appStore}>
				<RouterProvider router={appRouter()} />
			</ReduxProvider>
		</ThemeProvider>
	</React.StrictMode>,
);

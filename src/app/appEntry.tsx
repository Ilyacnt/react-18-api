import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { appStore } from './appStore.ts';
import App from '@/App.tsx';
import './globals.css';
import { ThemeProvider } from '@/shared/ui/theme-provider/theme-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={appStore}>
				<App />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
);

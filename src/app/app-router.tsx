import { ReactElement } from 'react';

import { Navigate, createBrowserRouter } from 'react-router-dom';

import { baseLayout } from './ui/base-layout';
import { selectIsAuthorized } from '@/entities/session/model/session-selectors';
import { PostsPageDeffered } from '@/pages/posts/ui/posts-page-deffered';
import { PostsPageTransition } from '@/pages/posts/ui/posts-page-transition';
import { PublicationPage } from '@/pages/publications/ui/publications-page';
import { useAppSelector } from '@/shared/model/hooks';

type TGuestGuardProps = {
	children: ReactElement;
};

function GuestGuard({ children }: TGuestGuardProps) {
	const isAuthorized = useAppSelector(selectIsAuthorized);
	if (!isAuthorized) return <Navigate to='/login' />;
	return children;
}

type TAuthGuardProps = {
	children: ReactElement;
};

function AuthGuard({ children }: TAuthGuardProps) {
	const isAuthorized = useAppSelector(selectIsAuthorized);
	if (isAuthorized) return <Navigate to='/' />;
	return children;
}

export const appRouter = () =>
	createBrowserRouter([
		{
			element: baseLayout,
			errorElement: <div>error</div>,
			children: [
				{
					path: '/login',
					element: (
						<AuthGuard>
							<div>login</div>
						</AuthGuard>
					),
				},
				{
					path: '/publications',
					element: (
						<GuestGuard>
							<PublicationPage />
						</GuestGuard>
					),
				},
				{
					path: '/posts-deffered',
					element: (
						<GuestGuard>
							<PostsPageDeffered />
						</GuestGuard>
					),
				},
				{
					path: '/posts-transition',
					element: (
						<GuestGuard>
							<PostsPageTransition />
						</GuestGuard>
					),
				},
			],
		},
		{
			/** You can use another layout for some pages @example guestLayout  */
			element: baseLayout,
			errorElement: <div>error</div>,
			children: [
				{
					path: '/',
					element: <div>main page for unautorized user</div>,
				},
			],
		},
	]);

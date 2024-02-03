import { ReactElement } from 'react';

import { Outlet } from 'react-router-dom';

type TGuestLayout = {
	loginButtonSlot: ReactElement;
};

export function GuestLayout({ loginButtonSlot }: TGuestLayout) {
	return (
		<div className='bg-purple-200 h-dvh w-full flex flex-col items-center justify-center'>
			<div className='bg-foreground flex flex-col items-center justify-center gap-4 px-4 py-7 rounded-sm'>
				<span className='text-secondary text-4xl font-extrabold tracking-tight'>Типа стартовый лендинг</span>
				{loginButtonSlot}
			</div>

			<Outlet />
		</div>
	);
}

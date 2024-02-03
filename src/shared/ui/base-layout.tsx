import { ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

type TLayoutProps = {
	headerSlot?: ReactNode;
};

export function BaseLayout({ headerSlot }: TLayoutProps) {
	return (
		<div className='h-dvh'>
			{headerSlot}

			{/* <ScrollArea className='h-[93%] w-full rounded-md border-red-500 border-2'> */}
			<div className='p-8 container mx-auto'>
				<Outlet />
			</div>
			{/* </ScrollArea> */}
		</div>
	);
}

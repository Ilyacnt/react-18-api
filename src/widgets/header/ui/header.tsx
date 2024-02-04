import { ReactElement } from 'react';

import { Link } from 'react-router-dom';

import { ThemeToggle } from '@/features/theme-toggle/ui/theme-toggle';

type THeader = {
	navigationSlot?: ReactElement;
};

export function Header({ navigationSlot }: THeader) {
	return (
		<header className='py-2 border-pink-600 border-b-2'>
			<div className='flex items-center justify-between container mx-auto px-8 '>
				<Link to={'/'}>
					<span className='font-semibold leading-none tracking-tight'>Logo Here</span>
				</Link>

				<div className='flex items-center justify-around gap-4'>
					{navigationSlot}
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}

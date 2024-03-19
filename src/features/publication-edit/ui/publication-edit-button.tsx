import Pencil from '@/shared/assets/pencil.svg?react';
import { Button } from '@/shared/ui/button';

export function PublicationEditButton() {
	return (
		<Button
			variant='outline'
			size='icon'
		>
			<Pencil className='w-5 h-5' />
		</Button>
	);
}

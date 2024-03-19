import Trash from '@/shared/assets/trash.svg?react';
import { Button } from '@/shared/ui/button';

export function PublicationDeleteButton() {
	return (
		<Button
			variant='outline'
			size='icon'
		>
			<Trash className='w-5 h-5' />
		</Button>
	);
}

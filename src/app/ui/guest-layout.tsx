import { Link } from 'react-router-dom';

import { Button } from '@/shared/ui/button';
import { GuestLayout } from '@/shared/ui/guest-layout';

export const guestLayout = (
	<GuestLayout
		loginButtonSlot={
			<Button>
				<Link to='/login'>Login</Link>
			</Button>
		}
	/>
);

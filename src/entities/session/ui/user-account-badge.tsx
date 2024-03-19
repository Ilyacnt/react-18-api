import { selectUserId } from '../model/session-selectors';
import { useAppSelector } from '@/app/app-store';
import { Badge } from '@/shared/ui/badge';

export const UserAccountBadge = () => {
	const userId = useAppSelector(selectUserId);

	return (
		<Badge>
			<b>User ID: {userId}</b>
		</Badge>
	);
};

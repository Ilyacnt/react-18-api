import { Link } from 'react-router-dom';

import { selectIsAuthorized } from '@/entities/session/model/session-selectors';
import { useAppSelector } from '@/shared/model/hooks';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/shared/ui/navigation-menu';

export function PagesNavigation() {
	const isAuthorized = useAppSelector(selectIsAuthorized);

	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						asChild
					>
						<Link to='/publications'>Publications (GQL)</Link>
					</NavigationMenuLink>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						asChild
					>
						<Link to='/posts-deffered'>Posts (deffered)</Link>
					</NavigationMenuLink>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						asChild
					>
						<Link to='/posts-transition'>Posts (transition)</Link>
					</NavigationMenuLink>

					{!isAuthorized && (
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
							asChild
						>
							<Link to='/login'>Login</Link>
						</NavigationMenuLink>
					)}
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

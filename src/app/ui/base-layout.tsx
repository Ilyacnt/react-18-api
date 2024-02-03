import { PagesNavigation } from '@/features/pages-navigation/ui/pages-navigation';
import { BaseLayout } from '@/shared/ui/base-layout';
import { Header } from '@/widgets/header/ui/header';

/**
 * ✅ FSD Best practice
 *
 * (1) Devide layout in two modules: dumb layout grid (shared)
 * and smart layout with widgets (this file)
 *
 * (2) Avoid cross-import using slot (render prop) pattern
 * Pass widgets as props to layout
 */
export const baseLayout = <BaseLayout headerSlot={<Header navigationSlot={<PagesNavigation />} />} />;

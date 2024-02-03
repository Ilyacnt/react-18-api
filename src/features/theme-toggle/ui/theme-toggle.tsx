import Moon from '@/shared/assets/moon.svg?react';
import Sun from '@/shared/assets/sun.svg?react';
import { Button } from '@/shared/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu';
import { EThemeApp } from '@/shared/ui/theme-provider/types';
import { useTheme } from '@/shared/ui/theme-provider/use-theme';

export function ThemeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='icon'
				>
					<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
					<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => setTheme(EThemeApp.LIGHT)}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme(EThemeApp.DARK)}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme(EThemeApp.SYSTEM)}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

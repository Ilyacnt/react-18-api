import { TUser } from '@/entities/user/model/types';

export type TPublication = {
	id: number;
	title: string;
	body: string;
	views: number;
	user_id: number;
	User?: TUser;
};

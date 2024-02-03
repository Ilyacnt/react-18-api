import { AppRootState } from '@/app/app-store';
import { ESliceName } from '@/shared/api/constants';

export const selectIsAuthorized = (state: AppRootState) => state[ESliceName.SESSION_SLICE].isAuthorized;

export const selectUserId = (state: AppRootState) => state[ESliceName.SESSION_SLICE].userId;

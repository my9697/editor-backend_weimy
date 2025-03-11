import { UserType } from '../types';

export interface UserInfoType {
  _id: string;

  id: string;

  username: string;

  email: string;

  phoneNumber: string;

  avatar: string;

  type: UserType;
}

export class LoginUserVo {
  userInfo: UserInfoType;
  accessToken: string;
  refreshToken: string;
}

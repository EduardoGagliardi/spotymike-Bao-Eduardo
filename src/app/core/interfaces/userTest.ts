export interface IUser {

  isEmailVerified: boolean;
  email: string;
  name: string;
  id: string;
}

interface IaccessToken {
  token: string;
  expires: string | Date;
}

export interface Itoken {
  access : IaccessToken;
  refresh: IaccessToken;
}
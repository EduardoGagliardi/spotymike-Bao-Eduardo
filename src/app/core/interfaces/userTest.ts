type ERoleUser = "User" | "Artist";

export interface IUser {

  role: string;
  isEmailVerified: boolean;
  email: string;
  name: string;
  id: string;
}

interface IAccessToken {
  token: string;
  expires: string | Date;
}

export interface IToken {
  access : IAccessToken;
  refresh: IAccessToken;
}
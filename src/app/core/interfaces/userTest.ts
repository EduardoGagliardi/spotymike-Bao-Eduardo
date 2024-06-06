type ERoleUser = "User" | "Artist";
type ESexe = 0 | 1;

export interface IUser {

  // role: string;
  // isEmailVerified: boolean;
  Email: string;
  firstName: string;
  lastName: string;
  nameArtist: string;
  password: string;
  tel: string;
  sexe: number;
  dateBirth: Date;
  id?: string;
}

interface IAccessToken {
  token: string;
  expires: string | Date;
}

export interface IToken {
  access : IAccessToken;
  refresh: IAccessToken;
}
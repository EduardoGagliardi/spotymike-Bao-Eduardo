type ERoleUser = "user"| "artist";

export interface IUser{
    role: string,
    isEmailVerified: boolean,
    email: string,
    id: string
}

export interface IAccessToken{
    token: string,
    axprires: string | Date
}

export interface IToken{
    access: IAccessToken,
    refresh: IAccessToken
}
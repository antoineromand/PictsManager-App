export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;
    isPublic: boolean;
    isBanned: boolean;
}
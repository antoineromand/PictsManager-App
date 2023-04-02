export interface RegisterDTO {
    email: string;
    password: string;
    username: string;
    dateOfBirth: string;
}

export interface LoginDTO {
    username: string;
    password: string;
}
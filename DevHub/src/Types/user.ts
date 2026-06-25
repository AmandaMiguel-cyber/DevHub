export interface User {
    id: number;
    name: string;
    nickname?: string;
    email: string;
    password: string;
    title?: string;
    bio?: string;
    photo?: string;
    github?: string;
    linkedin?: string;
    createdAt: string;
}
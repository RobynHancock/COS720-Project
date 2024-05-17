export enum URoles {
    ADMIN = 'Admin',
    LECTURER = 'Lecturer',
    STUDENT = 'Student'
}

export interface Role {
    id: number;
    name: string;
    uID: string; //Admin, Lecturer, Student
    extends: number | null; // id of the role to be extended
}

export interface User {
    id: number;
    name: string;
    role: Role;
}
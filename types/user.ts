export interface User {
    BenutzerID: number;
    BenutzerName: string;
    BenutzerPWD: string;
}

export interface FormState {
    success: boolean;
    user: User | null; // Changed from User[] | null to User | null
}
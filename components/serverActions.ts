"use server";
import * as dotenv from 'dotenv';
import type { User, FormState } from '../types/user'; // Fix: Import type correctly

dotenv.config();

const API_URL = process.env.API_URL;

async function getDataFromServer(prefix: string, function_name: string | number): Promise<User> {
    const results = await fetch(`${API_URL}/${prefix}/${function_name}`);

    if (!results.ok) {
        console.error('Failed to fetch data or service is down');
        throw new Error('Failed to fetch data');
    }

    return await results.json();
}

export async function handleFormSubmitUser(prevState: FormState, formData: FormData): Promise<FormState> {
    const userID = formData.get('userID');

    if (isNaN(Number(userID))) {
        return { success: false, user: null };
    }

    try {
        const data = await getDataFromServer('user', Number(userID));
        return { success: true, user: data }; // Now returns a single User object
    } catch (e) {
        return { success: false, user: null };
    }
}

export { getDataFromServer };
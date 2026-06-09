import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL;

interface User {
    BenutzerID: number;
    BenutzerName: string;
    BenutzerPWD: string;
}
async function getDataFromServer(prefix: string, function_name:string) : Promise<User[]> {
    const results = await fetch(`${API_URL}/${prefix}/${function_name}`)

    if (!results.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await results.json();
    return data;
}

export {getDataFromServer};
export type { User };

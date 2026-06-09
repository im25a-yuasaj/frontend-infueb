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

async function Home() {
    const data = await getDataFromServer('user', '');
    console.log('Fetched data:', data);
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <ul>
                {data.map((user) => (
                    <li key={user.BenutzerID}>
                        {user.BenutzerName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home

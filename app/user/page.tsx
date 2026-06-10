import Link from 'next/link';
import { getDataFromServer, handleFormSubmitUser } from '../../components/serverActions';
import type { User } from '../../types/user';
import UserForm from '../../components/UserForm';


async function UserPage() {
    const data = await getDataFromServer('user', '');
    console.log('Fetched data:', data);
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <Link href="/" className="underline">return to Home</Link>
            <form>
                <label>Alle Benutzer: </label>
                <select name="user" id="user">
                    {data.map((user: User) => (
                            <option key={user.BenutzerID}>
                                {user.BenutzerName}
                            </option>
                        ))}
                </select>
            </form>
            <UserForm />
        </div>
    );
}

export default UserPage;
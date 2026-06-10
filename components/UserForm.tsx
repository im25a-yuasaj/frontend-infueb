'use client';
import { useActionState } from 'react';
import { handleFormSubmitUser } from './serverActions';
import type { FormState } from '../types/user';

export default function UserForm() {
    const [state, action] = useActionState<FormState, FormData>(
        handleFormSubmitUser,
        { success: false, user: null }
    );

    return (
        <div>
            <form action={action}>
                <fieldset>
                    <label htmlFor="userID">Benutzer-ID: </label>
                    <input type="number" id="userID" name="userID"/>
                    <button type="submit">Abschicken</button>
                </fieldset>
            </form>

            {state?.success && state.user && (
                <div>
                    <h3>User Detail:</h3>
                    <p>Name: {state.user.BenutzerName}</p>
                </div>
            )}
        </div>
    );
}
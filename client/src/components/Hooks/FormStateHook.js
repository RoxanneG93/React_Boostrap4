import React from 'react'
import useFormState from './useFormState';


export default function FormStateHook() {
    const [email, updateEmail, resetEmail] = useFormState("");
    const [password, updatePassword, resetPassword] = useFormState("");
    return (
        <div>
            <h1>The value is...{email} & Password is: {password}</h1>
            <input type="text" value={email} onChange={updateEmail} />
            <input type="password" value={password} onChange={updatePassword} />
            <button onClick={resetEmail}>Submit</button>
            <button onClick={resetPassword}>Reset Password</button>
        </div>
    )
}

import { useState } from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [updatePassword, updating, error] = useUpdatePassword(auth);
    const navigate = useNavigate()

    if (updating) {
        return <p>Updating...</p>;
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
   
    return (
        <div className="pt-24">
            <input
                placeholder='Email'
                className="input input-bordered border-black w-full max-w-xs"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="input input-bordered border-black w-full max-w-xs"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                onClick={async () => {
                    await updatePassword('asd@asd.com');

                    navigate('/appointment')
                }}
            >
                Update password
            </button>
        </div>
    );
};

export default UpdatePassword;
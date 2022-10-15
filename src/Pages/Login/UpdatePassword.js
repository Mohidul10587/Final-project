import { useState } from 'react';
import { useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const UpdatePassword = () => {
    const [password, setPassword] = useState('');
    const [updatePassword, updating, error] = useUpdatePassword(auth);
  const navigate= useNavigate()

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (updating) {
        return <p>Updating...</p>;
    }
    return (
        <div className="pt-24">
            <input
                className="input input-bordered border-black w-full max-w-xs"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={async () => {
                    await updatePassword(password);
             
                   navigate('/appointment')
                }}
            >
                Update password
            </button>
        </div>
    );
};

export default UpdatePassword;
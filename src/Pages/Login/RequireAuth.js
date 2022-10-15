import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);

    let navigate = useNavigate();
    let location = useLocation();


    if (loading) return <div className='flex justify-center items-center h-screen'> <Loading></Loading>
    </div>


    if (!user) {

        return <Navigate to="/logIn" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth









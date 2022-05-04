import React, { createContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loaidng/Loading';

export const loadingContext = createContext(false)

const ProtectiveRoute = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const [loadingSpinner, setloadingSpinner] = useState(false)
    let location = useLocation();

    if (loading) {
        <Loading />
    }

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectiveRoute;
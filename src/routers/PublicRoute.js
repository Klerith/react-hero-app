import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';

export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    return user.logged
        ? <Navigate to="/" />
        : children
}


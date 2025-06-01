import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoutes = ({children}) => {

    const { user } =  use(AuthContext);

    if(!user) {
        <Navigate to="/signIn"></Navigate>
    }

    return children;
};

export default PrivateRoutes;
import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { token } = authContext;
    console.log('PRIVATE ROUTE token', token);
    return (
        <Route 
            { ...rest }
            render={ props => 
                !token ? (
                    <Redirect to='/login' />
            ) : (
            <Component {...props} />
            )
        } 
        />
    );
};

export default PrivateRoute;
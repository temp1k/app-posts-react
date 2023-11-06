import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import { useContext } from 'react';
import Loader from './UI/loader/Loader';
const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    
    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Switch>
                {
                    privateRoutes.map(route =>
                        <Route key={route.path} component={route.component}
                            path={route.path}
                            exact={route.exact}
                        />
                    )
                }
                <Redirect to='/posts' />
            </Switch>
            :
            <Switch>
                {
                    publicRoutes.map(route =>
                        <Route key={route.path} component={route.component}
                            path={route.path}
                            exact={route.exact}
                        />
                    )
                }
                <Redirect to='/login' />
            </Switch>
    )
}

export default AppRouter
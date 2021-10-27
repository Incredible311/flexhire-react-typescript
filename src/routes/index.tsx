import React, { Suspense, lazy, Fragment } from 'react';
import Loading from '../components/Loading';
import HomeLayout from '../layout/HomeLayout';
import { Switch, Route } from 'react-router-dom';

const loading = <Loading />;

interface IRoute {
    exact?: boolean;
    path?: string;
    layout?: React.FC;
    // guard?: React.FC;
    component: any;
}

const routes = [
    {
        exact: true,
        path: '/',
        layout: HomeLayout,
        component: lazy(() => import('../views/Dashboard'))
    },
    {
        exact: true,
        path: '/jobs',
        layout: HomeLayout,
        component: lazy(() => import('../views/Jobs'))
    },
    {
        exact: true,
        path: '/questions',
        layout: HomeLayout,
        component: lazy(() => import('../views/Questions'))
    },
    {
        exact: true,
        path: '/codetest',
        layout: HomeLayout,
        component: lazy(() => import('../views/CodeTest'))
    },
    {
        exact: true,
        path: '/profile',
        layout: HomeLayout,
        component: lazy(() => import('../views/Profile'))

    },
    {
        exact: true,
        path: '/login',
        component: lazy(() => import('../views/Login')),

    }
];

export function renderRoutes() {
    return (
        <Suspense fallback={loading}>
            <Switch>
                {routes.map((route: IRoute, i: number) => {
                    const Component = route.component;
                    const Layout = route.layout || Fragment;
                    //   const Guard = route.gurad || Fragment;
                    return (
                        <Route
                            key={i}
                            path={route.path}
                            exact={route.exact}
                            render={(props) => (
                                // <Guard>
                                <Layout>
                                    <Component {...props} />
                                </Layout>
                                // </Guard>
                            )}
                        />
                    );
                })}
            </Switch>
        </Suspense>
    );
}

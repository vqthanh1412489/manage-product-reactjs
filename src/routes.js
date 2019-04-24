import React from 'react';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ActionsPage from './pages/ActionsPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductsPage/>
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ActionsPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ActionsPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    },
]

export default routes;
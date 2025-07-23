import Home from '../views/Home';
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Page1 = lazy(() => import('../views/Page1'));
const Page2 = lazy(() => import('../views/Page2'));
const Page301 = lazy(() => import('../views/Page301'));
const Login = lazy(() => import('../views/Login'));

const withLoadingComponent = (Component: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
      {Component}
    </React.Suspense>
  )

const router = [
  {
    path: '/',
    element: <Navigate to="/page1" replace />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      { path: 'page1', element: withLoadingComponent(<Page1 />)  },
      { path: 'page2', element: withLoadingComponent(<Page2 />) },
      { path: 'page3/page301', element: withLoadingComponent(<Page301 />) },
    ]
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/*',
    element: <Navigate to="page1" replace />,
  }
]

export default router;

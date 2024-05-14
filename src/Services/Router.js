import { useRoutes } from 'react-router-dom';
import React from 'react'
import Login from '../component/Login/Login';
import Signin from '../component/signin/Signin';
import Forgot from '../component/Forgot/Forgot';
import Home from '../component/Home/Home';

const Routes = () => {
  return useRoutes(
    [
      {
        path: '/',
        element: <Signin />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'forgot',
        element: <Forgot/>
      },
      {
        path: 'home',
        element: <Home/>
      }
    ]

  )
}

export default Routes;


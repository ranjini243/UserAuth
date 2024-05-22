import { useRoutes } from 'react-router-dom';
import React from 'react'
import Login from '../component/Login/Login';
import Forgot from '../component/Forgot/Forgot';
import Home from '../component/Home/Home';
import SignUp from '../component/signin/SignUp';

const Routes = () => {
  return useRoutes(
    [
      {
        path: '/',
        element: <SignUp />
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


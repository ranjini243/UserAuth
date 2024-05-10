import {useRoutes } from 'react-router-dom';
import React from 'react'
import Login from '../component/Login';
import LoginImg from '../component/LoginImg';

const Routes=()=> {
  return useRoutes([
    {
        path : '/',
        element : <LoginImg/>
    }, 
    {
      path : 'login',
      element : <Login/>
    }
  ]
    
  )
}

export default Routes;  


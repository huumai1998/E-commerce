import React, { useContext } from 'react'
import { Store } from '../reducers/Store'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    const {
        state: { userInfo },
      } = useContext(Store)
    
      if (userInfo) {
        return <Outlet />
      } else {
        return <Navigate to="/signin" />
      }
}

import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom"

import { RootState } from "../../store"

const RequireAuth = () => {
  const token = useSelector((state: RootState) => state.auth.credentials.access_token)
  const location = useLocation()

  return (
    token ? <Outlet /> : <Navigate to={'/auth'} state={{ from: location }} replace />
  )
}

export default RequireAuth

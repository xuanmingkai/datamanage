import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
	const isAuth = localStorage.getItem('user')
	return isAuth ? <Outlet /> : <Navigate to = "/" />
}

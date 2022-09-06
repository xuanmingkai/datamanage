import { useRoutes } from "react-router-dom";

import MainRoutes from './MainRoutes'
import AuthenticationRoutes from "./AuthenticationRoutes";
import DefaultRoute from "./DefaultRoute";

const ThemeRoutes = () => {
  const isAuth = false
  return isAuth ? 
  useRoutes([MainRoutes, AuthenticationRoutes]):
  useRoutes([DefaultRoute, AuthenticationRoutes])
};

export default ThemeRoutes;

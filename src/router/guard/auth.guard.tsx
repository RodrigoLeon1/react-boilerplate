import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppPublicRoutes } from "../AppRoutes";
import { AppStore } from "../../redux/store";

/**
 * Se ejecutara cada vez que se intenta ingresar a las rutas privadas.
 * Determina si el usuario esta guardado en el global state, si lo esta
 * dejara continuar con la navegacion.
 *
 * Caso contrario redireccionara hacia el LOGIN.
 */
const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.id ? (
    <Outlet />
  ) : (
    <Navigate replace to={AppPublicRoutes.LOGIN} />
  );
};

export default AuthGuard;

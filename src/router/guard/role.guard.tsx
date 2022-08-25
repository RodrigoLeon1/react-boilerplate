import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Roles } from '../../models';
import { AppPrivateRoutes } from '../AppRoutes';
import { AppStore } from '../../redux/store';

interface Props {
  rol: Roles;
}

const RoleGuard = ({ rol }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.rol === rol ? <Outlet /> : <Navigate replace to={`/${AppPrivateRoutes.PRIVATE}`} />;
};

export default RoleGuard;

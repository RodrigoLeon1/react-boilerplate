import { Navigate, Route } from 'react-router-dom';
import { AppPrivateRoutes, RoutesWrapper } from '../../router';
import { lazy } from 'react';
import RoleGuard from '../../router/guard/role.guard';
import { Roles } from '../../models';

// Lazy components
const Home = lazy(() => import('./Home/Home'));
const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const AdminPage = lazy(() => import('./AdminPage/AdminPage'));

const Private = () => (
  <RoutesWrapper>
    <Route path="/" element={<Navigate to={AppPrivateRoutes.DASHBOARD} />} />
    <Route path={AppPrivateRoutes.HOME} element={<Home />} />
    <Route path={AppPrivateRoutes.DASHBOARD} element={<Dashboard />} />

    {/* Routes guard by role */}
    <Route element={<RoleGuard rol={Roles.ADMIN} />}>
      <Route path={AppPrivateRoutes.ADMIN_PAGE} element={<AdminPage />} />
    </Route>
  </RoutesWrapper>
);

export default Private;

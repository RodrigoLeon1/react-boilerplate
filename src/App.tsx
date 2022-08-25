import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { AppPrivateRoutes, AppPublicRoutes } from './router/AppRoutes';
import AppStore from './redux/store';
import AuthGuard from './router/guard/auth.guard';
import RoutesWrapper from './router/RoutesWrapper';
import { lazy, Suspense } from 'react';
import { Logout } from './components';

// Lazy components
const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Dashboard/Private'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Loading here...</>}>
        <Provider store={AppStore}>
          <BrowserRouter>
            {/* Just for testing purposes */}
            <Logout />

            <RoutesWrapper>
              <Route path="/" element={<Navigate to={AppPrivateRoutes.PRIVATE} />} />

              {/* Public routes */}
              <Route path={AppPublicRoutes.LOGIN} element={<Login />} />

              {/* Private routes */}
              <Route element={<AuthGuard />}>
                <Route path={`${AppPrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
            </RoutesWrapper>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;

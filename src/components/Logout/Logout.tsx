import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser, USER_NAME } from '../../redux/states/user';
import { AppPublicRoutes } from '../../router';
import { removeKeyInLocalStorage } from '../../utilities';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeKeyInLocalStorage(USER_NAME);
    dispatch(resetUser());

    // Redirect to initial page
    navigate(AppPublicRoutes.LOGIN);
  };

  return <button onClick={handleLogout}>Logout!</button>;
};

export default Logout;

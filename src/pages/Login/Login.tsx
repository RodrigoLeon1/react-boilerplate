import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Roles } from '../../models';
import { createUser } from '../../redux/states/user';
import { AppPrivateRoutes } from '../../router';
import { getMorty } from '../../services';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await getMorty();
      // dispatch(createUser(result));

      // Just for testing role guard...
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));

      // Redirect to specif page
      navigate('/' + AppPrivateRoutes.PRIVATE);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <span>Welcome:</span>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;

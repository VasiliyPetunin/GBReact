import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = ({component}) => {
    const isAuth = useSelector((store) => store.profile.isAuth);


    if (!isAuth) {
        return <Navigate to="/signin" />
      }

    return component ? component : <Outlet />;
};

export default PrivateRoutes;
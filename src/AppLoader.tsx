import 'react-toastify/dist/ReactToastify.css';
import UnAuthenticatedRoutes from "routes/UnAuthenticatedRoutes";
import PrivateRoutes from "routes/PrivateRoutes";

const AppLoader = () => {
    return (
        <>
            <UnAuthenticatedRoutes/>
            <PrivateRoutes/>
        </>
    );
};

export default AppLoader;

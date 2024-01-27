import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import { RootState } from "@/state/store";
import Cookies from "js-cookie";

interface IProps{
    children?: any
}

const Layout = (props:IProps) => {
    const isLoggedIn = Cookies.get('accessToken')
    if (!isLoggedIn) {
        return <Navigate to={'/'}/>

    } 
    else return <Outlet />
}

export default Layout;

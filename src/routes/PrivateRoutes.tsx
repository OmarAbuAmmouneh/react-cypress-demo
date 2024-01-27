import {Route, Routes} from "react-router-dom";
import PrivateProtection from "./PrivateProtection";
import MainLayout from "@/layouts/MainLayout";

const Component = () => {
    return (
        <Routes>
            <Route element={<PrivateProtection/>}>
                <Route element={<MainLayout/>}>
                    <Route path={'/promoCodes'} element={<></>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default Component;

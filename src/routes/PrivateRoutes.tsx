import {Route, Routes} from "react-router-dom";
import PrivateProtection from "./PrivateProtection";
import MainLayout from "@/layouts/MainLayout";
import PromoCodes from "@/pages/promoCodes";

const Component = () => {
    return (
        <Routes>
            <Route element={<PrivateProtection/>}>
                <Route element={<MainLayout/>}>
                    <Route path={'/promoCodes'} element={<PromoCodes/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default Component;

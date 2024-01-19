import {Route, Routes} from "react-router-dom";
import PrivateProtection from "./PrivateProtection";

const Component = () => {
    return (
        <Routes>
            <Route element={<PrivateProtection/>}>
                <Route element={<PanelLayout/>}>
                    {/*<Route path={'/logs'} element={<Logs/>}/>*/}
                    {/*<Route path={'/logs/:id'} element={<LogDisplay/>}/>*/}
                    <Route path={'/weights'} element={<></>}/>
                    <Route path={'/accounts'} element={<></>}/>
                    <Route path={'/smeLoan'} element={<></>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default Component;

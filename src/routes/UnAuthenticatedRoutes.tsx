import { Route, Routes, useLocation } from "react-router-dom";

const Component = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route element={<AuthenticationLayout pathname={location?.pathname} />}>
        <Route path={"/"} element={<></>} />
      </Route>
    </Routes>
  );
};

export default Component;

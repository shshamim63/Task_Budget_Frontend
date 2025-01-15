import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={
          
        }/>
        <Route />
      </Routes>
    </BrowserRouter>
    // <Routes>
    //   <Route index element={<Navigate replace to="dashboard" />} />
    //   <Route path="dashboard" element={<Dashboard />} />
    //   <Route path element={<Login />} />
    // </Routes>
  );
};

export default Router;

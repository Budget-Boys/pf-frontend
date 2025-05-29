import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../features/home/home";
import Account from "../features/account/account";
import Login from "../features/account/login/login";
import Register from "../features/account/register/register";

function RoutesControll() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="" element={<Account />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesControll;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../features/home/home";

function RoutesControll() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesControll;

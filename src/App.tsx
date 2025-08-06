import RoutesControll from "./routes/routes";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <>
      <RoutesControll />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </>
  );
};

export default App;

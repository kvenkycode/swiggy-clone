import NavBar from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div>
      <NavBar />
      <div style={{ minHeight: "80vh", padding: "1rem" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayOut;

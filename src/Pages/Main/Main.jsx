import Footer from "../../share/Footer/Footer";
import Navbar from "../../share/Navber/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
     return (
          <div>
               <Navbar></Navbar>

                  <div className=" mt-10 pt-2">
                     <Outlet></Outlet>
                  </div>

               <Footer></Footer>
          </div>
     );
};

export default Main;
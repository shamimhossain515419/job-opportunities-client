import { Outlet } from "react-router-dom";
import Navbar from "../share/Navber/Navbar";
import DashboardMenu from "./DashboardManu/DashboardMenu";


import { useState } from 'react';
import { AiOutlineSend } from "react-icons/ai";
const Dashboard = () => {
     const [Open, setOpen] = useState(false)
     return (
          <div>
               <Navbar></Navbar>

               {
                     <div onClick={() => setOpen(true)} className={`${Open ? "hidden" : "block"}  md:hidden fixed left-0 top-16 z-40 bg-[#FFF] p-2 rounded-md  `}>
                         <AiOutlineSend  className=" text-[#1967D2]" size={32}></AiOutlineSend>
                    </div> 
               }



               <div className=" mt-8 pt-2   ">

                    {
                         Open ? <div className="  block   bg-white mt-8 px-10 py-4   fixed shadow-lg h-[95vh]">
                              <DashboardMenu back={true} setOpen={setOpen}> </DashboardMenu>
                         </div> : <></>
                    }

                    <div className=" hidden md:block  bg-white mt-8 px-10 py-4   fixed shadow-lg h-[95vh]">
                         <DashboardMenu> </DashboardMenu>
                    </div>


                    <div className=" md:ml-80   mt-8  mx-auto ">
                         <Outlet></Outlet>
                    </div>

               </div>




          </div>
     );
};

export default Dashboard;
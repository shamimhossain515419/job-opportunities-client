import { AiOutlineHome, AiOutlineLogout, AiOutlineMacCommand, AiOutlineSend, AiOutlineUserAdd } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { BsAlarm } from "react-icons/bs";
import { HiOutlineLockClosed } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { AuthContact } from "../../Authprovider/Authprovider";
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react'
const DashboardMenu = ({back,setOpen}) => {
     const { LogOut } = useContext(AuthContact);
     const handleLogout = () => {
          LogOut().then(result => {

               toast.success('Successfully Logout!')

          }).catch(error => {
               console.log(error);
          })
     }
     return (
          <div>
       <div>
          {
                back ? <> <GrFormClose onClick={()=>setOpen(false)} className=" absolute top-1  right-0 text-[#1967D2]" size={32}></GrFormClose> </> :<></>
          }
       </div>

               <div>
                    <div className=" my-4">
                         <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                              <AiOutlineHome></AiOutlineHome>
                              <h1> Dashboard</h1>
                         </NavLink>
                    </div>
                    <div className=" my-4">
                         <NavLink to={'/profile'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                              <AiOutlineUserAdd></AiOutlineUserAdd>
                              <h1> Profile</h1>
                         </NavLink>
                    </div>
                    <div className=" my-4">

                         <NavLink to={'/job'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                              <FiBookmark></FiBookmark>
                              <h1> Bookmark</h1>
                         </NavLink >
                    </div>
                    <div className=" my-4">
                         <NavLink to={'/job'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                              <AiOutlineSend></AiOutlineSend>
                              <h1> Post Job</h1>
                         </NavLink >
                    </div>
                    <div className=" my-4">
                         <NavLink to={'/job'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                              <AiOutlineMacCommand></AiOutlineMacCommand>
                              <h1> Post Management</h1>
                         </NavLink >

                    </div>
                    <div className=" my-4">
                         <NavLink to={'/job'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                              <BsAlarm></BsAlarm>
                              <h1> Resume Alarts</h1>
                         </NavLink >

                    </div>
                    <div className=" my-4">
                         <NavLink to={'/job'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                              <HiOutlineLockClosed></HiOutlineLockClosed>
                              <h1> Password change</h1>
                         </NavLink >

                    </div>
                    <div className=" my-4">
                         <NavLink to={'/job'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                              <RiDeleteBin6Line></RiDeleteBin6Line>
                              <h1> Delete Profile</h1>
                         </NavLink >

                    </div>
                    <div onClick={handleLogout} className="  cursor-pointer  text-xl font-semibold flex justify-start items-center  my-2 gap-9">
                         <AiOutlineLogout></AiOutlineLogout>
                         <h1> Logout</h1>
                    </div>


               </div>
               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />
          </div>

     );
};

export default DashboardMenu;
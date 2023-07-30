import { AiOutlineHome, AiOutlineLogout, AiOutlineSend, AiOutlineUserAdd } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { AuthContact } from "../../Authprovider/Authprovider";
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const Drowpdown = ({ setDeopWown }) => {
     const { LogOut } = useContext(AuthContact);
     const handleLogout = () => {
          LogOut().then(result => {
               setDeopWown(false)
               toast.success('Successfully Logout!')

          }).catch(error => {
               console.log(error);
          })
     }
     return (
          <div>
               <NavLink onClick={() => setDeopWown(false)} to={'/dashboard'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                    <AiOutlineHome></AiOutlineHome>
                    <h1> Dashboard</h1>
               </NavLink>
               <NavLink onClick={() => setDeopWown(false)} to={'/profile'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                    <AiOutlineUserAdd></AiOutlineUserAdd>
                    <h1> Profile</h1>
               </NavLink>
               <NavLink onClick={() => setDeopWown(false)} to={'/job'} className={({ isActive }) => isActive ? " textColor  text-xl font-semibold flex justify-start items-center  my-2 gap-9" : "  text-xl font-semibold flex my-2 justify-start items-center  gap-9 "}>
                    <AiOutlineSend></AiOutlineSend>
                    <h1> Post Job</h1>
               </NavLink >
               <div onClick={handleLogout} className="  cursor-pointer  text-xl font-semibold flex justify-start items-center  my-2 gap-9">
                    <AiOutlineLogout></AiOutlineLogout>
                    <h1> Logout</h1>
               </div>
               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />
          </div>
     );
};

export default Drowpdown;
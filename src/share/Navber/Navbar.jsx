
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import { Link, NavLink } from 'react-router-dom'

import { useState, useContext } from 'react';
import Manu from './Manu';
import Container from '../../Component/Container';
import Modal from './Modal.jsx/Modal';
import { AuthContact } from '../../Authprovider/Authprovider';
import Drowpdown from './Drowpdown';


const Navbar = () => {
     const [Open, setOpen] = useState(true);
     const [OpenModal, setOpenModal] = useState(false);
     const { user } = useContext(AuthContact);
     const [dropDown, setDeopWown] = useState(false)
     return (
          <div>
               <nav className='px-2 w-full bg-white  text-black  fixed       top-0  left-0 right-0 z-50   py-2 shadow-lg'>
                    <Container>
                         <div>
                              <div className=' flex justify-between items-center'>
                                   <div className=' flex    justify-center items-center gap-4'>
                                        <Link to={'/'}> <h1 className=' LogoStyle font-semibold text-base md:text-3xl text-color    capitalize '> job opportunities </h1></Link>

                                        <div className=' hidden md:block  mt-1 space-x-5  ml-4 '>
                                             <NavLink className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`} to={'/'}> Home</NavLink>
                                             <NavLink className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`} to={'/job'}> Job</NavLink>
                                             <NavLink className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`} to={'/services'}> Services</NavLink>
                                             <NavLink className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`} to={'/portfolio'}> My Portfolio</NavLink>
                                             <NavLink className={({ isActive }) => isActive ? ` textColor  font-semibold   ` : `font-semibold`} to={'/contact'}> contact</NavLink>
                                        </div>

                                   </div>


                                   <div className=' hidden  md:flex justify-center items-center gap-4'>

                                        {
                                             user ? <div onClick={()=>setDeopWown(!dropDown) } className='  cursor-pointer'>
                                                  <img className=' border-2 border-blue-500 h-14 w-14 rounded-full object-cover ' src={user?.photoURL} alt="" />
                                                   </div> : <div onClick={() => setOpenModal(true)} className='  cursor-pointer bg-[#E2EAF8] textColor  text-lg font-medium text-white px-4 py-2 rounded-md mx-2'>
                                                  Login/Sing
                                             </div>
                                        }
                                        <div className=' bg-[#0058f0]   text-lg font-medium text-white px-4 py-2 rounded-md mx-2'>
                                             Job  Post
                                        </div>

                                   </div>




                                   <div onClick={() => setOpen(!Open)} className=' md:hidden '>

                                        {
                                             Open ? <FaBars size={24} className=' '> </FaBars> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                             </svg>

                                        }

                                   </div>
                              </div>

                              <div className='  md:hidden'>
                                   {
                                        Open ? "" : <Manu setOpen={setOpen}></Manu>
                                   }
                              </div>


                         </div>
                    </Container>

               </nav>

               <div>
               {
                     dropDown ? <div className=' hidden md:block  fixed right-1  top-20 z-50 bg-white p-4 rounded-lg min-w-[400px]'>
                      
                         <Drowpdown setDeopWown={setDeopWown}></Drowpdown>
                      </div> :<></>
               }
               </div>

               <Modal OpenModal={OpenModal} setOpenModal={setOpenModal}></Modal>
          </div>
     );
};

export default Navbar;
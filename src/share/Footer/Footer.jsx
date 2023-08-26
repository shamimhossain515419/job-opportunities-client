import { FaFacebook, FaGoogle, FaInstagram, FaYoutube } from 'react-icons/fa';
import Container from '../../Component/Container';
import {AiOutlineSend} from 'react-icons/ai'

import { Link } from 'react-router-dom'
const Footer = () => {
     return (
          <div className=" shadow-md p-4  py-10">
               <Container>
                    <div className=' grid md:grid-cols-4 gap-10 '>
                         <div>
                              <h1 className=" text-3xl font-medium my-3 textColor">  job opportunities</h1>
                              <h2 className=' text-xl font-medium my-2'> Contact with us</h2>
                              <div className='flex gap-4 items-center'>
                                   <FaGoogle className=' text-[#f67010]' size={25}></FaGoogle>
                                   <FaFacebook className=' text-[rgb(24,100,243)]' size={25}></FaFacebook>
                                   <FaYoutube className=' text-[#f83030]' size={25}></FaYoutube>
                                   <FaInstagram className=' text-[#ff28f8]' size={25}></FaInstagram>
                              </div>
                         </div>
                         <div className=' flex gap-3  flex-col '>
                         <h2 className=' text-xl font-medium my-2'> Online Trainings </h2>
                              <Link className=' text-xl font-medium hover:text-blue-500 hover:underline'>Digital Marketing</Link>
                              <Link  className=' text-lg font-medium hover:text-blue-500 hover:underline'>Programming with Python</Link>
                              <Link className=' text-lg font-medium hover:text-blue-500 hover:underline'>Web Development </Link>
                              <Link className=' text-lg font-medium hover:text-blue-500 hover:underline'> Programming with C and C++</Link>
                              <Link className=' text-lg font-medium hover:text-blue-500 hover:underline'>Advanced Excel</Link>
                          </div>
                         <div className=' flex gap-3  flex-col '>
                         <h2 className=' text-xl font-medium my-2'> Services</h2>

                              <Link className=' text-lg font-medium hover:text-blue-500 hover:underline'>My account</Link>
                              <Link  className=' text-lg font-medium hover:text-blue-500 hover:underline'>Post Management </Link>
                              <Link className=' text-lg font-medium hover:text-blue-500 hover:underline'>Dashboard</Link>
                              <Link className=' text-lg font-medium hover:text-blue-500 hover:underline'> Post Management</Link>
                              <Link className=' text-lg font-medium hover:text-blue-500 hover:underline'>Blog</Link>
                          </div>
                         <div className='   md:px-2   py-4 w-full  '>
                         <div className='  relative w-full '>
                             <input type="text" className='  text-xl relative font-medium  outline outline-blue-500 rounded-md w-full border-none px-2 py-2 ' name="" id="" placeholder=" Your Email" />
                              <div className='  px-4 cursor-pointer bg-[#2d6bf1] absolute  flex justify-center items-center   right-0 h-full top-0 '>
                              <AiOutlineSend className='   text-white' size={24}></AiOutlineSend>
                              </div>
                         </div>
                         
                          </div>
                         
                    </div>
               </Container>
          </div>
     );
};

export default Footer;
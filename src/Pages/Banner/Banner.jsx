import Container from "../../Component/Container";
import { MdOutlineWork } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { SiGooglemaps } from 'react-icons/si'
const Banner = () => {
     return (
          <div className="BgBanner py-5">
               <Container>
                    <div className=" md:grid md:grid-cols-2 gap-5 items-center  ">
                         <div>
                              <h1 className=" text-4xl font-medium  ">There Are  <span className=" textColor"> 1500 </span> Postings Here
                                   For you! </h1>
                              <p className="  my-7 "> Find Jobs, Employment & Career Opportunities
                              </p>


                              <div className=" md:flex items-center p-4   md:shadow-xl md:bg-white md:rounded-lg gap-3  ">
                                   <div className=" w-full  my-2 shadow-lg md:shadow-none  bg-white md:bg-transparent  flex justify-start items-center gap-2 px-3 py-4 rounded-xl ">
                                        <FiSearch size={24}></FiSearch>
                                        <input className=" placeholder:text-black  w-full bg-transparent outline-none   border-none" type="text" name="" placeholder="Job title | tag | company name" id="" />
                                   </div>
                                   <div className=" w-full my-2   shadow-lg md:shadow-none  bg-white  flex justify-start items-center md:bg-transparent gap-2 px-3 py-4 rounded-xl">
                                        <SiGooglemaps size={24}></SiGooglemaps>
                                        <input className=" placeholder:text-black  w-full bg-transparent outline-none   border-none" type="text" name="" placeholder="Job title | tag | company name" id="" />
                                   </div>
                                   <div className=" w-full my-2  md:bg-transparent  shadow-lg md:shadow-none  bg-white  flex justify-start items-center gap-2 px-3 py-4 rounded-xl">
                                        <div className=' bg-[#0058f0] w-full text-center    text-2lx font-medium text-white px-6F py-4 rounded-md mx-2'>
                                             Find Job
                                        </div>
                                   </div>
                              </div>

                              <div>
                                   <h1 className=" text-base  font-normal my-10"> <span className=" text-lg   font-medium"> Popular Searches : </span>  Designer, Developer, Web, IOS, PHP, Senior, Engineer,</h1>
                              </div>
                         </div>
                         <div>

                              <div className=" relative">
                                   <img className=" relative h-[600px] object-cover" src="https://i.ibb.co/ZzWgktG/My-project-1.png" alt="" />
                                   <div className=" cursor-pointer flex justify-center items-center gap-4 absolute left-1  top-12 bg-white rounded-lg px-4 py-3 ">
                                        <div className=" bg-[#f7d6d377] p-3 rounded-xl ">
                                             <MdOutlineWork size={32} className=" text-[#e99c95]" ></MdOutlineWork>
                                        </div>
                                        <h1 className=" text-2xl textColor font-medium my-2"> New 150+ Post  </h1>
                                        <div></div>
                                   </div>

                              </div>
                         </div>
                    </div>
               </Container>
          </div>

     );
};

export default Banner;
import { MdOutlineAccountBalance } from "react-icons/md";
import { PiBookBookmarkThin } from "react-icons/pi";
import { GiHumanPyramid,GiHealthNormal } from "react-icons/gi";
import { TbWorldCancel } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineFlight } from "react-icons/md";

import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";
import Title from "../../../Component/Title";
import Container from "../../../Component/Container";


const PopularJob = () => {
     return (
          <div className=" my-20">

 <div className=" my-10">
 <Title title={"Popular job Categories"} paragrap={"2023 jobs live - 500+ added today."}></Title>
     </div>              
               <Container>
                    <div className=" max-w-[1200px] mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                         <div className="  border border-[#8a8c905d] py-4 bg-white shadow  p-3 rounded flex  items-center gap-5">
                              <div className=" p-4 bg-[#ECEDF2]  rounded-md ">
                                   <MdOutlineAccountBalance size={24} className=" textColor"></MdOutlineAccountBalance>
                              </div>
                              <div>
                               <Link className=" text-xl font-medium my-2 textColor"> Accounting / Finance </Link>
                               <p> 5 Open Options</p>
                              </div>
                         </div>
                         <div className=" border border-[#8a8c905d] py-4 bg-white shadow p-3 rounded flex  items-center gap-5">
                              <div className=" p-4 bg-[#ECEDF2]  rounded-md ">
                                   <PiBookBookmarkThin size={24} className=" textColor"></PiBookBookmarkThin>
                              </div>
                              <div>
                               <Link className=" text-xl font-medium my-2 textColor"> Marketing </Link>
                               <p> 20 Open Options</p>
                              </div>
                         </div>
                         <div className=" border border-[#8a8c905d] py-4 bg-white shadow p-3 rounded flex  items-center gap-5">
                              <div className=" p-4 bg-[#ECEDF2]  rounded-md ">
                                   <TbWorldCancel size={24} className=" textColor"></TbWorldCancel>
                              </div>
                              <div>
                               <Link className=" text-xl font-medium my-2 textColor">Web Development </Link>
                               <p> 52 Open Options</p>
                              </div>
                         </div>
                         <div className=" border border-[#8a8c905d] py-4 bg-white shadow p-3 rounded flex  items-center gap-5">
                              <div className=" p-4 bg-[#ECEDF2]  rounded-md ">
                                   <AiOutlineAntDesign size={24} className=" textColor"></AiOutlineAntDesign>
                              </div>
                              <div>
                               <Link className=" text-xl font-medium my-2 textColor"> Design </Link>
                               <p> 5 Open Options</p>
                              </div>
                         </div>
                         <div className=" border border-[#8a8c905d] py-4 bg-white shadow p-3 rounded flex  items-center gap-5">
                              <div className=" p-4 bg-[#ECEDF2]  rounded-md ">
                                   <GiHumanPyramid size={24} className=" textColor"></GiHumanPyramid>
                              </div>
                              <div>
                               <Link className=" text-xl font-medium my-2 textColor"> Human Resource </Link>
                               <p> 30 Open Options</p>
                              </div>
                         </div>
                         <div className=" border border-[#8a8c905d] py-4 bg-white shadow p-3 rounded flex  items-center gap-5">
                              <div className=" p-4 bg-[#ECEDF2]  rounded-md ">
                                   <GiHealthNormal size={24} className=" textColor"></GiHealthNormal>
                              </div>
                              <div>
                               <Link className=" text-xl font-medium my-2 textColor"> Health and Care </Link>
                               <p> 59 Open Options</p>
                              </div>
                         </div>
                         <div className=" border border-[#8a8c905d] py-4 bg-white shadow p-3 rounded flex  items-center gap-5">
                              <div className=" p-4 bg-[#ECEDF2]  rounded-md ">
                                   <RiCustomerServiceLine size={24} className=" textColor"></RiCustomerServiceLine>
                              </div>
                              <div>
                               <Link className=" text-xl font-medium my-2 textColor"> Customer Services </Link>
                               <p> 23 Open Options</p>
                              </div>
                         </div>
                         <div className=" border border-[#8a8c905d] py-4 bg-white shadow p-3 rounded flex  items-center gap-5">
                              <div className=" p-4 bg-[#ECEDF2]  rounded-md ">
                                   <FaCarSide size={24} className=" textColor"></FaCarSide>
                              </div>
                              <div>
                               <Link className=" text-xl font-medium my-2 textColor"> Project Management </Link>
                               <p> 96 Open Options</p>
                              </div>
                         </div>
                         <div className=" border border-[#8a8c905d] py-4 bg-white shadow p-3 rounded flex  items-center gap-5">
                              <div className=" p-4 bg-[#ECEDF2]  rounded-md ">
                                   <MdOutlineFlight size={24} className=" textColor"></MdOutlineFlight>
                              </div>
                              <div>
                               <Link className=" text-xl font-medium my-2 textColor"> Automotive Job  </Link>
                               <p> 55 Open Options</p>
                              </div>
                         </div>
                    </div>
               </Container>
          </div>
     );
};

export default PopularJob;
import { AiOutlineFieldTime, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { SiGooglemaps } from "react-icons/si";
import { Link, useLoaderData } from "react-router-dom";



const DetailsJob = () => {
     const loadData = useLoaderData();

     const { JobTitle, Name, JobType, Salary, Date, Industry, City, Experience, Location, Qualification, Description, Level, Country, Image } = loadData;

     console.log(loadData);
     return (
          <div className=" mt-12">
               <div className=" max-w-[900px] mx-auto">


                    <div>
                         <img className=" cursor-pointer w-full px-10 rounded  py-2" src="https://internshala.com/static/images/internship/detail/specialization_banner/ui_1/r1920.png" alt="" />
                    </div>
                    <div className='min-h-[calc(100vh-300px)]  mt-11'>
                         <div>
                              <div className=" border border-blue-400 p-2 rounded-md ">

                                   <div className=" flex  justify-between gap-3 ">
                                        <h1 className=" text-xl   font-medium my-3 "> {JobTitle} </h1>
                                        <img className=" h-24  w-32 rounded" src={Image} alt="" />
                                   </div>

                                   <div className=' space-y-3'>

                                        <div className=' flex items-center gap-2'>
                                             <SiGooglemaps></SiGooglemaps>
                                             <p> {City} </p>
                                        </div>
                                        <div className=' flex items-center gap-2'>
                                             <GrMoney></GrMoney>
                                             <p> {Salary} </p>
                                        </div>
                                        <div className=' flex items-center gap-2'>
                                             <AiOutlineFieldTime></AiOutlineFieldTime>
                                             <p> {Date} </p>
                                        </div>
                                   </div>

                                   <div className=" md:flex justify-between gap-3 items-center">
                                        <h1 className=" text-xl font-normal my-2 text-[#f7c80c]"> Be an early applicant</h1>
                                        <div className=" flex items-center gap-3 ">
                                             <FaRegBookmark size={20}></FaRegBookmark>
                                             <AiOutlineShareAlt size={20}></AiOutlineShareAlt>
                                        </div>
                                   </div>
                              </div>

                         </div>


                         <div className=" mt-9 border border-blue-400 p-2 rounded-md ">
                              <h1 className="text-3xl font-medium my-2 "> About Job </h1>
                              <h1 className=" text-xl f font-medium my-4 "> Name : {Name}</h1>
                              <div className=" md:flex  justify-between items-center gap-4">
                                   <div>
                                        <p className=" my-3 text-lg"> <span className=" text-xl  "> * JobType</span>: {JobType} </p>
                                        <p className=" my-3 text-lg">  <span className=" text-xl  ">* Location:</span>  {Location} </p>
                                        <p className=" my-3">  <span className=" text-xl  ">* Experience:</span>   {Experience} </p>
                                   </div>
                                   <div>
                                        <p className=" my-3">  <span className=" text-xl  ">* Level:</span>   {Level} </p>
                                        <p className=" my-3">  <span className=" text-xl  "> * Country:</span>   {Country} </p>
                                        <p className=" my-3">  <span className=" text-xl  "> * Industry:</span>   {Industry} </p>
                                   </div>
                              </div>


                              <h1> Qualification : {Qualification} </h1>

                              <p className=" py-4"> {Description} </p>

                         </div>

                    </div>
                    <Link className=' px-6 my-3 py-[4px] inline-block       rounded-lg  bg-[#0058F0] text-white text-xl font-normal'> Apply new </Link>
               </div>

          </div>
     );
};

export default DetailsJob;
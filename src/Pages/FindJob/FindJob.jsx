import InputRange from "react-input-range";
import Container from "../../Component/Container";
import Job from "../Home/Job/Job";
import { FiFilter } from 'react-icons/fi';
import { useState } from "react";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
const FindJob = () => {
     const [current, setCurren] = useState(20)

     return (
          <Container>
               <div>
                    <div className=" grid md:grid-cols-3">
                         <div className=" col-span-1 min-w-[400px] h-[90vh]   mx-auto  boxshadow p-4 rounded-md  my-20">

                              <div className=" p-2">
                                   <div className=" flex gap-2 justify-center items-center">
                                        <FiFilter size={24} className=" textColor"></FiFilter>
                                        <h2 className=" text-xl "> Filters</h2>
                                   </div>

                                   <div className="  my-2 flex gap-4 items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p className=" text-xl font-medium"> As per my <span className=" textColor cursor-pointer"> preferences</span> </p>
                                   </div>

                                   <div className=" my-3 ">
                                        <p className=" text-xl font-normal  my-2"> Job title </p>
                                        <input className=" text-lg px-4 outline-[#3d83f37d]  rounded outline-none border-none py-1 " type="text" placeholder="e n .marketing" name="" id="" />
                                   </div>
                                   <div className=" my-3 ">
                                        <p className=" text-xl font-normal  my-2"> Location </p>
                                        <input className=" text-lg px-4 outline-[#3d83f37d]  rounded outline-none border-none py-1 " type="text" placeholder="e n .US" name="" id="" />
                                   </div>

                                   <div className="  my-2 flex gap-4 items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p className=" text-xl font-medium"> Home Work </p>
                                   </div>
                                   <div className="  my-2 flex gap-4 items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p className=" text-xl font-medium">  Part-time  </p>
                                   </div>
                                   <div className="  my-2 flex gap-4 items-center">
                                        <p className="text-xl font-medium"> Desired minimum monthly stipend ($)</p>
                                   </div>
                                   <div className="   w-full my-6 ">
                                        <RangeSlider />
                                   </div>

                                   <div className=" my-3 w-full  ">
                                        <p className=" text-xl font-normal  my-2"> Date Time </p>
                                        <input className=" w-full  text-lg px-4 outline-[#3d83f37d]  rounded outline-none border-none py-1 " type="date" placeholder="" name="" id="" />
                                   </div>
                                   <div className=" w-full my-3 ">
                                        <p className=" text-xl font-normal  my-2">Select Moth </p>
                                        <select className=" w-full  text-lg px-4 outline-[#3d83f37d]  rounded outline-none border-none py-1 " name="" id="">
                                             <option value={"select"}>1select</option>
                                             <option value={"2 month"}>2 month</option>
                                             <option value={"3 month"}>3 month</option>
                                             <option value={"4 month"}>4 month</option>
                                             <option value={"5 month"}>5 month</option>
                                             <option value={"6 month"}>6 month</option>
                                             <option value={"7 month"}>7 month</option>
                                        </select>

                                   </div>
                                   <div className="  my-2 flex gap-4 items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p className=" text-xl font-medium">
                                             Internships with job offer  </p>
                                   </div>
                                   <div className="  my-2 flex gap-4 items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p className=" text-xl font-medium">
                                             Early applicant
                                        </p>
                                   </div>
                                   <div className="  my-2 flex gap-4 items-center">
                                        <input type="checkbox" name="" id="" />
                                        <p className=" text-xl font-medium">

                                             Fast response  </p>
                                   </div>
                                   <hr />

                                   <div className=" my-3 ">
                                        <p className=" text-xl font-normal  my-2"> Keyword Search </p>
                                        <input className=" text-lg px-4 outline-[#3d83f37d]  rounded outline-none border-none py-1 " type="text" placeholder="e n .US" name="" id="" />
                                   </div>
                                   <div className=" my-3 ">
                                       <button className="  underline textColor text-xl font-medium ">Clear</button>
                                   </div>
                              </div>

                         </div>
                         <div className=" col-span-2">
                              <Job open={true}></Job>
                         </div>
                    </div>
               </div>
          </Container>
     );
};

export default FindJob;
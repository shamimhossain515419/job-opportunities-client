
import {SiGooglemaps} from 'react-icons/si'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {MdOutlineShowChart} from 'react-icons/md'
import {GrMoney} from 'react-icons/gr'
import {GoBookmark} from 'react-icons/go'
import {Link} from 'react-router-dom'
const JobCard = ({job}) => {
     const {JobTitle,Name,JobType,Salary,Date,Industry,City,Experience,Location,Level,Country,Image}= job;
     
     
     return (
          <div className="  boxshadow  rounded-md p-4">
           <h1 className=" px-4 py-1 inline-block   rounded-2xl BgCoustomColor textColor text-base font-normal"> <MdOutlineShowChart className=' inline-block'></MdOutlineShowChart> Actively hiring </h1>
           <div className=" my-5 flex  justify-start items-center gap-3">
               <div>
                    <img className=" h-14  w-14 rounded-lg " src={Image} alt="" />
               </div>
               <div className='  w-full'>
                    <div className=' justify-between flex items-center gap-3 w-full'>
                    <h1 className=" text-xl font-semibold my-3"> {JobTitle} </h1>
                         <GoBookmark size={27} className=' cursor-pointer'></GoBookmark>
                    </div>
               
                <div className=' flex items-center gap-4 flex-wrap'>

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
               
               </div>
               
           </div>

           <div className=' sm:ml-[54px] flex items-center flex-wrap justify-between gap-3'>
           <div className=' flex items-center gap-4'>
           <p className=" px-6 py-[4px] inline-block textColor BgCoustomColor  rounded-2xl    text-base font-normal">{JobType}</p>
           <p className=" px-6 py-[4px] inline-block  text-[#f2b663] bg-[#FEF2D9]  rounded-2xl    text-base font-normal">Urgent</p>

           </div>
           <div className=' flex items-center gap-4'>
          
            <Link className=' px-6 py-[4px] inline-block       rounded-lg  text-[#0058F0] text-xl font-normal'> Details </Link>
            <Link className=' px-6 py-[4px] inline-block       rounded-lg  bg-[#0058F0] text-white text-xl font-normal'> Apply new </Link>
           

           </div>
           </div>
          
          
          
          
          
          </div>
     );
};

export default JobCard;
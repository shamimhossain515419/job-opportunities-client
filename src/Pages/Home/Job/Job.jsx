
import { useEffect, useState } from 'react';
import Title from '../../../Component/Title';
import JobCard from '../../../Component/JobCard';
import Container from '../../../Component/Container';
import { Link } from 'react-router-dom';
import Heading from '../../CompiletteProject/Headnling/Handling';

const Job = ({ open }) => {
     const [jonData, setJobData] = useState();
     useEffect(() => {
          fetch('https://job-opportunities-server.vercel.app//job').then(res => res.json()).then(data => setJobData(data))


     }, [])
     console.log(jonData);

     return (


          <div className=' max-w-[1200px] mx-auto my-20'>
               <Title title={"Featured Jobs"} paragrap={"Know your worth and find the job that qualify your life"}></Title>

               {
                    jonData && jonData.length > 0 ? <>

                         <div className={`grid  gap-7 ${open ? "md:grid-cols-1" : "md:grid-cols-2"}`}>
                              {
                                   jonData?.map((item, index) => <JobCard key={index} job={item}></JobCard>)
                              }
                         </div>
                    </> : <>
                         <div className='min-h-[calc(100vh-300px)] flex items-center justify-center'>
                              <Heading title={"Not Found Your Job"} subtitle=" Please Select Other Categories" center={true}></Heading>
                         </div>
                    </>
               }




               {
                    open ? <Link></Link> : <div className=' my-10 text-center'> <Link to={'/job'} className=" mx-auto cursor-pointer inline-block BgColor text-white text-center px-16 py-2  rounded-lg ">See all job</Link></div>
               }

          </div>


     );
};

export default Job;
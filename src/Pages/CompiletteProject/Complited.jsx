import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { FiBookOpen } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import './Completed.css'
import ScrollTrigger from 'react-scroll-trigger';

import CountUp from 'react-countup';
import { useState } from 'react';
import Container from '../../Component/Container';
const Complited = () => {

     const [startCount,setSrartCount]=useState(false)
     return (
          <div className=" Completed md:h-[50vh] py-10">

               <Container>

                    <ScrollTrigger onEnter={()=>setSrartCount(true)} onExit={()=>setSrartCount(false)}>
                         <div className=' md:h-[40vh]  grid md:grid-cols-4 gap-4 text-white items-center'>
                              <div className=' my-2 text-center'>
                                   <AiOutlineUsergroupAdd className=' block mx-auto' size={70}></AiOutlineUsergroupAdd>
                                   <div className=' text-2xl font-bold'>
                                        {
                                             startCount && <CountUp end={300000} duration={5} delay={0} /> 
                                         }+
                                     </div>
                                   <h1 className=' text-xl font-medium'>3 million daily active users</h1>
                              </div>
                              <div className=' my-2 text-center'>
                                   <FaGraduationCap className=' block mx-auto' size={70}></FaGraduationCap>
                                   <div className=' text-2xl font-bold'>
                                        {
                                             startCount && <CountUp end={120000} duration={5} delay={0} /> 
                                         }+
                                     </div>
                                   
                                   <h1 className='  text-xl font-medium'> Find  Job 12K user</h1>
                              </div>
                              <div className=' my-2 text-center'>
                                   <FiBookOpen className=' block mx-auto' size={70}></FiBookOpen>
                                   <div className=' text-2xl font-bold'>
                                        {
                                             startCount && <CountUp end={5000} duration={5} delay={0} /> 
                                         }+
                                     </div>
                                   <h1 className='  text-xl font-medium'> Over 5k open job positions</h1>
                              </div>
                              <div className='my-2  text-center'>
                                   <div className='  p-2 rounded-full'>
                                        <HiOutlineUserGroup className=' block mx-auto' size={80}></HiOutlineUserGroup>
                                   </div>
                                   <div className=' text-2xl font-bold'>
                                        {
                                             startCount && <CountUp end={2000000} duration={5} delay={0} /> 
                                         }+
                                     </div>
                                   <h1 className='  text-xl font-medium'> All user 20M</h1>
                              </div>


                         </div>

                    </ScrollTrigger>

               </Container>

          </div>
     );
};

export default Complited;
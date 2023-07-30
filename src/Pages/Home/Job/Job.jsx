
import { useEffect, useState } from 'react';
import Title from '../../../Component/Title';
import JobCard from '../../../Component/JobCard';
import Container from '../../../Component/Container';

const Job = () => {
     const [jonData, setJobData] = useState();
     useEffect(() => {
          fetch('job.json').then(res => res.json()).then(data => setJobData(data))


     }, [])
     console.log(jonData);

     return (

          <Container>
               <div className=' max-w-[1200px] mx-auto my-20'>
                    <Title title={"Featured Jobs"} paragrap={"Know your worth and find the job that qualify your life"}></Title>
                    <div className='  grid md:grid-cols-2 gap-7'>
                       {
                              jonData?.map((item, index) => <JobCard key={index} job={item}></JobCard>)
                         }
                    </div>
               </div>
          </Container>

     );
};

export default Job;
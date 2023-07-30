import Container from "../../../Component/Container";
import {AiOutlineCheck} from 'react-icons/ai';
 import {Link} from 'react-router-dom'
const Motivation = () => {
     return (
          <Container>
               <div className=" my-20 grid md:grid-cols-2 gap-4">
                    <div className="   rounded-xl  border-[10px] border-white boxshadow">
                         <img className="  max-h-[600px] object-cover w-full" src="https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-shirt-black-jacket-using-her-laptop-front-table-smiling-showing-sign-with-leaves-hanging_140725-15194.jpg?w=1380&t=st=1690692534~exp=1690693134~hmac=2f306c2835e58bc0f46eac51286cf2d8497f6a32d1c8b2424feec55b3f5a8c5f" alt="" />
                    </div>
                    <div className=" ml-[50px]">
                         <h1 className=" text-4xl md:text-5xl text-center font-semibold my-3 text-black"> Millions of Jobs. Find the one that suits you.</h1>

                         <p className=" text-base  max-w-[400px] my-4  "> Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.</p>
                         <div className=" flex my-4 items-center gap-5">
                              <AiOutlineCheck className=" " size={28}></AiOutlineCheck>
                              <p className=" text-xl  font-medium"> Find jobs according to your qualifications</p>
                         </div>
                         <div className=" flex my-4 items-center gap-5">
                              <AiOutlineCheck className=" " size={28}></AiOutlineCheck>
                              <p className=" text-xl  font-medium">Apply regularly</p>
                         </div>
                         <div className=" flex my-4 items-center gap-5">
                              <AiOutlineCheck className=" " size={28}></AiOutlineCheck>
                              <p className=" text-xl  font-medium">Try your best. We will help you</p>
                         </div>
                         <div className=" flex my-4 items-center gap-5">
                              <AiOutlineCheck className=" " size={28}></AiOutlineCheck>
                              <p className=" text-xl  font-medium">Find work according to the rules</p>
                                  </div>
                         <Link className="text-xl mt-10 font-medium text-white py-1 px-4 rounded-md BgColor ">
                             GetStart
                         </Link>
                    </div> 
               </div>
          </Container>
     );
};

export default Motivation;
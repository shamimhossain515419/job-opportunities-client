import Container from "../../Component/Container";
import Title from "../../Component/Title";
import {useState,useEffect} from 'react'
import ArticalCard from "./ArticalCard";

const Articles = () => {
     const [arctical,setArtical]=useState([]);

     useEffect(()=>{
            fetch('blog.json').then(res=>res.json()).then(data=>setArtical(data));
     } ,[])


     return (
          <div className=" py-10 bg-[#ECEDF2] p-3">

               <Container>
                    <Title title={"Recent News Articles"} paragrap={"Fresh job related news content posted each day."}></Title>
              


               <div className=" mt-32">
               <div className=" grid md:grid-cols-3 gap-4">
                    {
                         arctical.slice(0,3)?.map((item,index)=> <ArticalCard key={index} blog={item}></ArticalCard>)
                    }
               </div>
               </div>

                  <div className=" text-center my-10">
                  <div className=" mx-auto cursor-pointer inline-block BgColor text-white text-center px-16 py-2  rounded-lg ">
                  All Job
                  </div>
                  </div>
                
               </Container>
          </div>
     );
};

export default Articles;
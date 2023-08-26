import { useState } from "react";
import Container from "../../Component/Container";
import { useForm } from "react-hook-form"
import { TbAccessPoint } from "react-icons/tb";
import { HiOutlinePhotograph } from "react-icons/hi";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const PostJob = () => {
     const [imgeLoading, setImageLoading] = useState(false);
     const [image, setImage] = useState("");
     const { register, handleSubmit, formState: { errors } } = useForm();
     const navigate = useNavigate();
     const [selectedSkills, setSelectedSkills] = useState([]);

     const handleSkillSelection = (skill) => {
          setSelectedSkills((prevSkills) => [...prevSkills, skill]);
     };

     const availableSkills = ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Python'];

     const onSubmit = (data) => {
          data.Image = image;
          data.date = new Date();
          const JobData = data;
          console.log(JobData);
          axios.post('https://job-opportunities-server.vercel.app//job', JobData).then(result => {
               console.log(result);
               if (result) {
                    toast.success('Successfully Post Job!')
                    navigate("/job")
               }

          }).catch(error => {
               console.log(error);
          })

     };

     const handleChange = (event) => {
          const selectedImage = event.target.files[0];
          setImageLoading(true)
          const Imagebb_URL = `https://api.imgbb.com/1/upload?key=a51250151cc877a01d697ac0a493b3bd`
          const formData = new FormData();
          formData.append('image', selectedImage);
          fetch(Imagebb_URL, {
               method: "POST",
               body: formData
          }).then(res => res.json()).then(data => {
               if (data?.data?.display_url) {
                    setImage(data?.data?.display_url)
                    setImageLoading(false)
               }
          })
     }
     const levale = ["Entry Level", "Junior Level", "Senior Level", "Mid Level", "Executive Level"]
     return (
          <div>

               <Container>

                    <div className=" my-20">

                         <div>
                              <h1 className=" text-4xl font-semibold my-4 text-black"> Post a New Job!</h1>
                              <p className=" my-2"> Ready to jump back in?</p>

                         </div>

                         <div className=" w-full">
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   {/* Form fields go here */}
                                   <div className=" w-full  my-2">
                                        <h3 className=" mt-3 text-xl font-medium"> JobTitle</h3>
                                        <input type="text" {...register("JobTitle", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' />
                                        {errors.JobTitle && <span>This field is required</span>}
                                   </div>
                                   <div className=" w-full  my-2">
                                        <h3 className=" mt-3 text-xl font-medium"> Description</h3>
                                        <textarea type="text" {...register("Description", { required: true })} className=' w-full mt-3   h-[200px] rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' ></textarea>
                                        {errors.Description && <span>This field is required</span>}
                                   </div>

                                   <div className=" grid md:grid-cols-2 gap-10">
                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Email</h3>
                                             <input className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' type="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                             {errors.email && <span>Please enter a valid email</span>}


                                        </div>
                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Username</h3>
                                             <input type="text" {...register("Name", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' />
                                             {errors.Name && <span>This field is required</span>}
                                        </div>
                                        {/* availableSkills  */}
                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Username</h3>
                                              <select name="" id="">
                                                   {
                                                        availableSkills.map((item,index)=> <option key={index} value={item}> {item}   </option>)
                                                   }
                                              </select>
                                        </div>
                                   </div>



                                   <div className=" grid md:grid-cols-2 gap-10">
                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Level</h3>
                                             <select className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 '  {...register("Level")}>

                                                  <option disabled value="Select">Select</option>
                                                  {
                                                       levale?.map((item, index) => <option key={index} value={item}>{item}</option>)
                                                  }

                                             </select>
                                        </div>

                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Experience</h3>
                                             <input type="text" {...register("Experience", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' placeholder="" />
                                             {errors.Experience && <span>This field is required</span>}
                                        </div>
                                   </div>

                                   <div className=" grid md:grid-cols-2 gap-10">
                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> JobType</h3>
                                             <select className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 '  {...register("JobType")}>
                                                  <option disabled value="Select">Select</option>
                                                  <option value="Remote">Remote</option>
                                                  <option value="Full time">Full time</option>
                                                  <option value="Part time">Part time</option>
                                             </select>
                                        </div>

                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Salary</h3>
                                             <input type="text" {...register("Salary", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' placeholder="usd $" />
                                             {errors.Salary && <span>This field is required</span>}
                                        </div>
                                   </div>
                                   <div className=" grid md:grid-cols-2 gap-10">
                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Gender</h3>
                                             <select className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' {...register("gender")}>
                                                  <option value="female">female</option>
                                                  <option value="male">male</option>
                                                  <option value="other">other</option>
                                             </select>
                                        </div>

                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Qualification</h3>
                                             <input type="text" {...register("Qualification", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' placeholder="Qualification" />
                                             {errors.Qualification && <span>This field is required</span>}
                                        </div>
                                   </div>
                                   <div className=" grid md:grid-cols-2 gap-10">
                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Industry</h3>
                                             <input type="text" {...register("Industry", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' placeholder="Industry" />
                                             {errors.Industry && <span>This field is required</span>}
                                        </div>

                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Date</h3>
                                             <input type="date" {...register("Date", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' placeholder="" />
                                             {errors.Qualification && <span>This field is required</span>}
                                        </div>
                                   </div>
                                   <div className=" grid md:grid-cols-3 gap-10">
                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> City</h3>
                                             <input type="text" {...register("City", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' placeholder="City" />
                                             {errors.City && <span>This field is required</span>}
                                        </div>

                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Country</h3>
                                             <input type="text" {...register("Country", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' placeholder="Country" />
                                             {errors.Country && <span>This field is required</span>}
                                        </div>
                                        <div className=" w-full  my-2">
                                             <h3 className=" mt-3 text-xl font-medium"> Location</h3>
                                             <input type="text" {...register("Location", { required: true })} className=' w-full mt-3 rounded-lg  BgCoustomColor outline-none border-none   focus:outline-[#258ff1]  px-2 py-3 ' placeholder="Location" />
                                             {errors.Location && <span>This field is required</span>}
                                        </div>
                                   </div>

                                   <div className=' mt-3'>

                                        {
                                             image ? <h1 className=' text-xl text-blue-500'> Success Upload</h1> : <label htmlFor="image">
                                                  <input onChange={handleChange} type="file" name="image" id="image" className='  hidden' />
                                                  {
                                                       imgeLoading ? <TbAccessPoint size={32} className=' textColor  animate-spin '></TbAccessPoint> : <HiOutlinePhotograph size={32} className=' textColor '></HiOutlinePhotograph>
                                                  }

                                             </label>

                                        }

                                   </div>



                                   <div className=' my-10 text-center'> <button type="submit" className=" mx-auto cursor-pointer inline-block BgColor text-white text-center px-16 py-2  rounded-lg ">Post Job</button></div>

                              </form>
                         </div>

                    </div>
               </Container>
               <Toaster
                    position="top-center"
                    reverseOrder={false}
               />
          </div>
     );
};

export default PostJob;
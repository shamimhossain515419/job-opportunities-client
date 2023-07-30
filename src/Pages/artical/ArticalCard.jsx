import moment from "moment";


const ArticalCard = ({ blog }) => {

     const { Image, Source,comment, Description, Date, Title } = blog;
     return (
          <div className=" bg-white p-2 boxshadow border-[4px] rounded-2xl ">

               <div className=" p-3">

                    <img className="  h-[450px] object-cover " src={Image} alt="" />
               </div>
               <div className=" p-2">
                    <div className=" text-base flex items-center gap-4">
                         <p> {
                              moment(Date).format("dddd, MMMM Do YYYY")
                         }</p>
                         <p>/{comment} Comment </p>
                    </div>
                    <h1 className=" text-lg font-medium my-4"> {Title} </h1>
                    
                    <p className=" my-3"> {Description.slice(0,100)}... </p>
                      <button className="  underline text-xl font-medium textColor my-1"> Read more</button>
               </div>

          </div>
     );
};

export default ArticalCard;
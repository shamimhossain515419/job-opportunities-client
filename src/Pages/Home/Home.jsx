import Banner from "../Banner/Banner";
import Complited from "../CompiletteProject/Complited";
import Articles from "../artical/Artical";
import Job from "./Job/Job";
import Motivation from "./Motivation/Motivation";
import PopularJob from "./PopularJobCatagoris/Popularjob";


const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <PopularJob></PopularJob>

               <Job></Job>
                 <hr />
               <Motivation></Motivation>
               <Complited></Complited>
               <Articles></Articles>
          </div>
     );
};

export default Home;
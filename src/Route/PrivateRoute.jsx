import { useContext } from "react";
import { AuthContact } from "../Authprovider/Authprovider";
import { Blocks } from "react-loader-spinner";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
     const { user, loading } = useContext(AuthContact);

     if (loading) {
          <Blocks
               visible={true}
               height="80"
               width="80"
               ariaLabel="blocks-loading"
               wrapperStyle={{}}
               wrapperClass="blocks-wrapper"
          />
     }

 if(user){
      return children
 }

 return <Navigate to={'/'}></Navigate>
     
};

export default PrivateRoute;
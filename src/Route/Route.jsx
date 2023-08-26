
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Pages/Main/Main';
import Home from '../Pages/Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import DashboardBox from '../Dashboard/DashboardBox';

import FindJob from '../Pages/FindJob/FindJob';
import Loading from '../Component/Loading/Loading';
import PostJob from '../Dashboard/PostJob/Postjob';
import DetailsJob from '../Pages/DetailJob/Detailsjob';

const Route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/job',
                    element: <FindJob></FindJob>
               },
               {
                    path: '/loading',
                    element: <Loading></Loading>
               },
               {
                    path: '/job/:id',
                    element: <DetailsJob></DetailsJob>,
                    loader:({params})=>fetch(`https://job-opportunities-server.vercel.app//job/${params.id}`)
               }
          ]
     },
     {
           path:'/dashboard',
           element:<PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
           children:[
               {
                    path:'/dashboard',
                    element:<DashboardBox></DashboardBox>
               },
               {
                    path:'/dashboard/postJob',
                    element:<PostJob></PostJob>
               },
           ] 
     }


])

export default Route;
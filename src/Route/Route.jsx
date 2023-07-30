
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Pages/Main/Main';
import Home from '../Pages/Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import DashboardBox from '../Dashboard/DashboardBox';
const Route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
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
           ] 
     }


])

export default Route;
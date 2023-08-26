import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Route from './Route/Route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Authprovider/Authprovider'
import Loading from './Component/Loading/Loading'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Loading>
        <AuthProvider>
          <RouterProvider router={Route}></RouterProvider>
        </AuthProvider>
      </Loading>
    </QueryClientProvider>

  </React.StrictMode>,
)

import { ClientManager } from './create_client';
import Login from './App'; 
/* import RegisterForm from './create_user'; 
 */import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import FullView from './full_client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateClient from './update_client';
import CreateOrder from '../../frontend-lav/src/CreateOrder';
import App from './resumen';
import GarmentView from './Garments';
import ServicesView from './services';
//import { CreateOrder } from './orders/CreateOrder';

const router = createBrowserRouter([
 /*  {
    path: "/register",
    element: <RegisterForm/>,
  }, */
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/create_client",
    element: <ClientManager/>,
  },
  
  {
    path: "/update_client",
    element: <UpdateClient/>,
  },
    {
    path: '/',
    element: <CreateOrder />,
  },  
    {
    path: '/full-client',
    element: <FullView />,
  },
    {
    path: '/resumen',
    element: <App/>,
  },
  {
    path: '/Garments',
    element: <GarmentView/>,
  },
  {
    path: '/Services',
    element: <ServicesView/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root')); // hacer 
root.render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);

reportWebVitals();
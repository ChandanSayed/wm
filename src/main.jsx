import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import AppContext from './context/AppContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Profile from './components/Profile.jsx';
import Error from './components/Error.jsx';
import ServiceDetails from './components/ServiceDetails.jsx';
import About from './components/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home />, loader: () => fetch('/services.json') },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        )
      },

      {
        path: '/about',
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        )
      },
      {
        path: `/service-details/:id`,
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: () => fetch('/services.json')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>
  </React.StrictMode>
);

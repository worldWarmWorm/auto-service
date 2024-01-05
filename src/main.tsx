import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserPage } from './pages/UserPage.jsx';
import { SettingsPage } from './pages/SettingsPage.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { RegistrationPage } from './pages/RegistrationPage.jsx';
import { RestorePage } from './pages/RestorePage.tsx';
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
		children: [
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "registration",
        element: <RegistrationPage />,
      },
      {
        path: "restore",
        element: <RestorePage />,
      },
		],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>
)

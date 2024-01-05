import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserPage } from './pages/UserPage.tsx';
import { SettingsPage } from './pages/SettingsPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { RegistrationPage } from './pages/RegistrationPage.tsx';
import { RestorePage } from './pages/RestorePage.tsx';
import App from './components/App'
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

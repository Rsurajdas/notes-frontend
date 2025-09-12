import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import GuestLayout from "./components/layouts/GuestLayout";
import RootLayout from "./components/layouts/RootLayout";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import ResetPassword from "./pages/Authentication/ResetPassword";
import { loginAction } from "./actions/loginAction";
import AuthenticatedLayout from "./components/layouts/AuthenticatedLayout";
import NoteDetail from "./components/NoteDetail/NoteDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        Component: GuestLayout,
        children: [
          {
            path: "auth",
            children: [
              { path: "login", Component: Login, action: loginAction },
              { path: "signup", Component: Signup },
              { path: "forgot-password", Component: ForgotPassword },
              { path: "reset-password", Component: ResetPassword },
            ],
          },
        ],
      },
      {
        Component: AuthenticatedLayout,
        children: [
          {
            index: true,
            element: <NoteDetail />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

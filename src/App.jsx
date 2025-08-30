import { createBrowserRouter, Form } from "react-router";
import { RouterProvider } from "react-router/dom";
import GuestLayout from "./components/layouts/GuestLayout";
import RootLayout from "./components/layouts/RootLayout";
import Authentication from "./pages/Login/Authentication";

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
            children: [{ path: ":page", Component: Authentication }],
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

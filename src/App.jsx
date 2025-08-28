import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Button from "./components/Buttons/Button";
import { Restore } from "./icons/Restore";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="text-preset-1 p-brand-25">
        The quick brown fox jumps over the lazy dog.
        <div className="flex flex-col gap-4 items-start mt-4">
          <Button variant="primary" text="Primary Button" />
          <Button variant="secondary" text="Secondary Button" />
          <Button variant="border" icon={Restore} text="Border Button" />
        </div>
      </div>
    ),
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

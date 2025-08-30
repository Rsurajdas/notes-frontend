import { createBrowserRouter, Form } from "react-router";
import { RouterProvider } from "react-router/dom";
import Button from "./components/Buttons/Button";
import { Restore } from "./icons/Restore";
import FormGroup from "./components/Inputs/FormGroup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="text-preset-1 p-brand-25">
        The quick brown fox jumps over the lazy dog.
        <div className="mt-4 flex flex-col items-start gap-4">
          <Button variant="primary" text="Primary Button" />
          <Button variant="secondary" text="Secondary Button" />
          <Button variant="border" icon={Restore} text="Border Button" />
        </div>
        <form className="mt-4 flex flex-col items-start gap-4">
          <FormGroup
            label="Change Label"
            placeholder="Placeholder text"
            type="password"
            htmlFor="password"
            id="password"
            name="password"
            disabled={false}
          />
        </form>
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

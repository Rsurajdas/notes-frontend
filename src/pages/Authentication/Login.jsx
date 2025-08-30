import { Form, Link, useLocation } from "react-router";
import { Google } from "../../icons/Google";
import { Logo } from "../../icons/Logo";
import FormGroup from "../../components/Inputs/FormGroup";
import Button from "../../components/Buttons/Button";

export default function Login() {
  const location = useLocation();

  return (
    <>
      <div className="pb-custom-100 flex w-full items-center justify-center">
        <Logo />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="text-preset-1">Welcome to Note</h1>
        <p className="text-preset-5 text-custom-neutral-600">
          Please log in to continue
        </p>
      </div>
      <Form
        method="post"
        className="gap-custom-200 flex w-full flex-col justify-center"
      >
        <div className="pt-custom-300 gap-custom-200 flex w-full flex-col">
          <FormGroup
            label="Email Address"
            type="email"
            placeholder="email@example.com"
            htmlFor={"email"}
            id={"email"}
            name={"email"}
          />
          <FormGroup
            label="Password"
            type="password"
            htmlFor={"password"}
            id={"password"}
            name={"password"}
            hasLink={location.pathname === "/auth/login"}
            hintText="At least 8 characters"
          />
        </div>
        <div className="">
          <Button
            type="submit"
            variant="primary"
            text="Login"
            className="text-preset-3 h-[2.75rem] w-full"
          />
        </div>
      </Form>
      <div className="gap-custom-200 border-custom-neutral-200 pt-custom-300 pb-custom-200 flex w-full flex-col items-center border-y">
        <span className="text-preset-5">Or log in with:</span>
        <Button
          variant="border"
          icon={Google}
          className="rounded-custom-12 h-[3rem] w-full"
          text="Google"
        />
      </div>
      <span className="text-preset-5 font-normal">
        No account yet?{" "}
        <Link
          to="/auth/signup"
          className="text-preset-5 text-custom-neutral-950 font-normal hover:underline"
        >
          Sign Up
        </Link>
      </span>
    </>
  );
}

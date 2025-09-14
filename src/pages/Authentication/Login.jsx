import { Link, useLocation, useNavigate } from "react-router";
import { Google } from "../../icons/Google";
import { Logo } from "../../icons/Logo";
import FormGroup from "../../components/Inputs/FormGroup";
import Button from "../../components/Buttons/Button";
import { useMutation } from "@tanstack/react-query";
import instance from "../../utils/interceptors";
import isEmail from "validator/lib/isEmail";
import { isStrongPassword } from "validator";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async (data) => {
      if (!data?.email || !data?.password) {
        return;
      }
      return instance.post("/users/login", data);
    },
    onMutate: (variables) => {
      const error = {};
      const { email, password } = variables;
      if (!email) {
        error.email = "Email is required";
      }
      if (!password) {
        error.password = "Password is required";
      }
      if (!isEmail(email) && !error.email) {
        error.email = "Please enter a valid email address";
      }
      if (!isStrongPassword(password) && !error.password) {
        error.password =
          "Password must contain at least one lowercase, one uppercase, one number, and one symbol";
      }
      return Object.keys(error).length ? { errors: error } : null;
    },
    // eslint-disable-next-line no-unused-vars
    onSettled: (data, error) => {
      if (data) {
        localStorage.setItem("token", data.token);
        navigate("/notes");
      }
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    mutation.mutate({ email, password });
  };

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
      <form
        method="post"
        className="gap-custom-200 flex w-full flex-col justify-center"
        onSubmit={onSubmit}
      >
        <div className="pt-custom-300 gap-custom-200 flex w-full flex-col">
          <FormGroup
            label="Email Address"
            type="email"
            placeholder="email@example.com"
            htmlFor={"email"}
            id={"email"}
            name={"email"}
            hintText={mutation.context?.errors?.email}
            error={Boolean(mutation.context?.errors?.email)}
            className="w-full"
          />
          <FormGroup
            label="Password"
            type="password"
            htmlFor={"password"}
            id={"password"}
            name={"password"}
            hasLink={location.pathname === "/auth/login"}
            hintText={
              mutation.context?.errors?.password || "At least 8 characters"
            }
            error={Boolean(mutation.context?.errors?.password)}
            className="w-full"
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
      </form>
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

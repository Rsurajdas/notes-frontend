import { Form, Link, useParams } from "react-router";
import { Logo } from "../../icons/Logo";
import FormGroup from "../../components/Inputs/FormGroup";
import Button from "../../components/Buttons/Button";
import Google from "../../icons/Google";

export default function Login() {
  const { page } = useParams();
  return (
    <main className="bg-custom-neutral-100 flex h-full min-h-screen items-center justify-center">
      <section className="bg-custom-neutral-0 shadow-custom-lg outline-custom-neutral-200 rounded-custom-12 p-custom-600 gap-custom-200 flex min-w-[33.75rem] flex-col items-center justify-center outline outline-offset-[-1px]">
        <Form
          method="post"
          className="gap-custom-200 flex w-full flex-col justify-center"
        >
          <div className="pb-custom-100 flex w-full items-center justify-center">
            <Logo />
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <h1 className="text-preset-1">
              {page === "login" ? "Welcome to Note" : "Create Your Account"}
            </h1>
            <p className="text-preset-5 text-custom-neutral-600">
              {page === "login"
                ? "Please log in to continue"
                : "Sign up to start organizing your notes and boost your productivity."}
            </p>
          </div>
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
              hasLink={page === "login"}
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
          {page === "login" ? "No account yet?" : "Already have an account?"}{" "}
          <Link
            to={page === "login" ? "../signup" : "../login"}
            className="text-preset-5 text-custom-neutral-950 font-normal hover:underline"
          >
            {page === "login" ? "Sign Up" : "Login"}
          </Link>
        </span>
      </section>
    </main>
  );
}

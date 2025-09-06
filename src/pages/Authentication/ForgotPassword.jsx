import { Form } from "react-router";
import Button from "../../components/Buttons/Button";
import { Logo } from "../../icons/Logo";
import FormGroup from "../../components/Inputs/FormGroup";

export default function ForgotPassword() {
  return (
    <>
      <div className="pb-custom-100 flex w-full items-center justify-center">
        <Logo />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="text-preset-1">Forgotten your password?</h1>
        <p className="text-preset-5 text-custom-neutral-600">
          Enter your email below, and we’ll send you a link to reset it.
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
            className="w-full"
          />
        </div>
        <div className="">
          <Button
            type="submit"
            variant="primary"
            text="Send Reset Link"
            className="text-preset-3 h-[2.75rem] w-full"
          />
        </div>
      </Form>
    </>
  );
}

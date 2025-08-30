import React from "react";
import { Logo } from "../../icons/Logo";
import { Form } from "react-router";
import FormGroup from "../../components/Inputs/FormGroup";
import Button from "../../components/Buttons/Button";

export default function ResetPassword() {
  return (
    <>
      <div className="pb-custom-100 flex w-full items-center justify-center">
        <Logo />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="text-preset-1">Reset Your Password</h1>
        <p className="text-preset-5 text-custom-neutral-600">
          Choose a new password to secure your account.
        </p>
      </div>
      <Form
        method="post"
        className="gap-custom-200 flex w-full flex-col justify-center"
      >
        <div className="pt-custom-300 gap-custom-200 flex w-full flex-col">
          <FormGroup
            label="New Password"
            type="password"
            htmlFor={"password"}
            id={"password"}
            name={"password"}
            hintText="At least 8 characters"
          />
          <FormGroup
            label="Confirm Password"
            type="password"
            htmlFor={"confirm"}
            id={"confirm"}
            name={"confirm"}
          />
        </div>
        <div className="">
          <Button
            type="submit"
            variant="primary"
            text="Reset Password"
            className="text-preset-3 h-[2.75rem] w-full"
          />
        </div>
      </Form>
    </>
  );
}

import { useState } from "react";
import { InfoCircle } from "../../icons/InfoCircle";
import { ShowPassword } from "../../icons/ShowPassword";
import { HidePassword } from "../../icons/HidePassword";
import { Link } from "react-router";

export default function FormGroup({
  type = "text",
  placeholder,
  htmlFor,
  id,
  name,
  label,
  disabled,
  hasLink = false,
  hintText,
  error,
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="gap-custom-75 flex flex-col">
      <div className="flex items-center justify-between">
        <label
          htmlFor={htmlFor}
          className="text-preset-4 text-custom-neutral-950"
        >
          {label}
        </label>
        {hasLink ? (
          <Link
            to="forgot-password"
            className="font-inter text-custom-neutral-600 text-right text-sm/[1.4] hover:underline"
          >
            Forgot
          </Link>
        ) : null}
      </div>
      <div className="relative w-full">
        <input
          type={show ? "text" : type}
          placeholder={placeholder}
          id={id}
          name={name}
          disabled={disabled}
          className={`bg-custom-neutral-0 px-custom-200 py-custom-150 rounded-custom-8 placeholder:font-inter placeholder:text-custom-neutral-500 text-preset-5 text-custom-neutral-950 focus:shadow-custom-focus-input focus:outline-custom-neutral-950 hover:bg-custom-neutral-50 hover:focus:bg-custom-neutral-0 disabled:bg-custom-neutral-50 disabled:placeholder:text-custom-neutral-300 disabled:text-custom-neutral-300 w-full text-sm/[1.3] outline outline-offset-[-1px] placeholder:text-sm/[1.3] placeholder:font-normal placeholder:tracking-[-0.2px] disabled:cursor-not-allowed ${
            error ? "outline-custom-red-500" : "outline-custom-neutral-300"
          }`}
        />
        {type === "password" ? (
          <button
            type="button"
            className="group absolute top-1/2 right-4 translate-y-[-50%] cursor-pointer outline-none"
            onClick={() => setShow((prev) => !prev)}
            disabled={disabled}
          >
            {show ? (
              <ShowPassword
                width="20"
                height="20"
                className="fill-custom-neutral-500 group-disabled:fill-custom-neutral-300"
              />
            ) : (
              <HidePassword
                width="20"
                height="20"
                className="stroke-custom-neutral-500 group-disabled:stroke-custom-neutral-300"
              />
            )}
          </button>
        ) : null}
      </div>
      {hintText ? (
        <small
          className={`text-custom-neutral-${!disabled ? 600 : 300} group font-inter flex items-start gap-2 text-xs/[1.4] font-normal tracking-normal ${disabled ? "text-custom-neutral-300" : error ? "text-custom-red-500" : "text-custom-neutral-600"}`}
        >
          <InfoCircle
            width="16"
            height="16"
            className={
              disabled
                ? "stroke-custom-neutral-300"
                : error
                  ? "stroke-custom-red-500"
                  : "stroke-custom-neutral-300"
            }
          />
          {hintText}
        </small>
      ) : null}
    </div>
  );
}

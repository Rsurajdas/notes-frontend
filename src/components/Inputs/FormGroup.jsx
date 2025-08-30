import { useState } from "react";
import { InfoCircle } from "../../icons/InfoCircle";
import { ShowPassword } from "../../icons/ShowPassword";
import { HidePassword } from "../../icons/HidePassword";

export default function FormGroup({
  type = "text",
  placeholder,
  htmlFor,
  id,
  name,
  label,
  disabled,
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="gap-custom-75 flex flex-col">
      <label
        htmlFor={htmlFor}
        className="text-preset-4 text-custom-neutral-950"
      >
        {label}
      </label>
      <div className="relative w-full">
        <input
          type={show ? "text" : type}
          placeholder={placeholder}
          id={id}
          name={name}
          disabled={disabled}
          className="bg-custom-neutral-0 outline-custom-neutral-300 px-custom-200 py-custom-150 rounded-custom-8 placeholder:font-inter placeholder:text-custom-neutral-500 text-preset-5 text-custom-neutral-950 focus:shadow-custom-focus-input focus:outline-custom-neutral-950 hover:bg-custom-neutral-50 hover:focus:bg-custom-neutral-0 disabled:bg-custom-neutral-50 disabled:placeholder:text-custom-neutral-300 w-full text-sm/[1.3] outline outline-offset-[-1px] placeholder:text-sm/[1.3] placeholder:font-normal placeholder:tracking-[-0.2px] disabled:cursor-not-allowed"
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
      <small
        className={`text-custom-neutral-${!disabled ? 600 : 300} group font-inter flex items-center gap-2 text-xs/[1.4] font-normal tracking-normal`}
      >
        <InfoCircle
          width="16"
          height="16"
          className={
            !disabled
              ? "stroke-custom-neutral-600"
              : "stroke-custom-neutral-300"
          }
        />{" "}
        This is a hint text to help user.
      </small>
    </div>
  );
}

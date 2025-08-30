export default function Button({
  text,
  variant = "primary",
  icon: Icon,
  className,
  ...props
}) {
  const styles =
    variant === "primary"
      ? "bg-custom-blue-500 text-custom-neutral-0 hover:bg-custom-blue-700 focus:shadow-custom-focus"
      : variant === "secondary"
        ? "bg-custom-neutral-100 text-custom-neutral-600 hover:text-custom-neutral-950 hover:bg-custom-neutral-0 hover:outline hover:outline-offset-[-1px] hover:outline-custom-neutral-300 focus:shadow-custom-focus focus:outline focus:outline-offset-[-1px] focus:outline-custom-neutral-950 focus:bg-custom-neutral-0 focus:text-custom-neutral-950"
        : "bg-custom-neutral-0 text-custom-neutral-950 outline outline-custom-neutral-300 outline-offset-[-1px] hover:bg-custom-neutral-100 hover:text-custom-neutral-600 hover:outline-custom-neutral-100 hover:focus:bg-custom-neutral-0 hover:focus:outline-custom-neutral-950 focus:shadow-custom-focus focus:outline-custom-neutral-950 focus:text-custom-neutral-950";
  return (
    <button
      {...props}
      className={`rounded-custom-8 px-custom-200 py-custom-150 disabled:bg-custom-neutral-100 disabled:text-custom-neutral-300 group inline-flex cursor-pointer items-center justify-center gap-2 disabled:cursor-not-allowed disabled:outline-none ${className} ${styles}`}
    >
      <>
        {Icon && (
          <span>
            <Icon
              width="20"
              height="20"
              className="group-hover:fill-custom-neutral-600 group-disabled:fill-custom-neutral-300 group-hover:group-focus:fill-custom-neutral-950"
            />
          </span>
        )}
        <span>{text}</span>
      </>
    </button>
  );
}

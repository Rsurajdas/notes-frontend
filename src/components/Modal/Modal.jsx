import Button from "../Buttons/Button";

export default function Modal({
  icon: Icon,
  text,
  head,
  variant,
  setShowModal,
  onClick,
}) {
  return (
    <div className="before:bg-custom-neutral-950 relative before:fixed before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-1 before:block before:h-full before:w-full before:opacity-50">
      <div className="outline-custom-neutral-200 rounded-custom-12 fixed top-1/2 left-1/2 z-2 w-[27.5rem] -translate-x-1/2 -translate-y-1/2 bg-white outline outline-offset-[-1px]">
        <div className="p-custom-250 gap-custom-200 border-custom-neutral-200 flex items-start border-b">
          <div className="bg-custom-neutral-200 rounded-custom-8 flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center">
            {Icon && <Icon />}
          </div>
          <div className="gap-custom-75 flex flex-col">
            <h3 className="text-preset-3">{head}</h3>
            <p className="text-preset-5">{text}</p>
          </div>
        </div>
        <div className="px-custom-250 py-custom-200">
          <div className="gap-custom-200 flex justify-end">
            <Button
              text="Cancel"
              variant="secondary"
              onClick={() => setShowModal("")}
            />
            <Button
              text={
                variant === "delete"
                  ? "Delete Note"
                  : variant === "archive"
                    ? "Archive Note"
                    : "Restore Note"
              }
              variant="primary"
              className={
                variant === "delete"
                  ? "bg-custom-red-500 hover:bg-custom-red-600"
                  : ""
              }
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

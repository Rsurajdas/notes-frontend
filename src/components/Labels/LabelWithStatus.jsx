import TextEditor from "../TextEditor/TextEditor";

export default function LabelWithStatus({
  text,
  icon: Icon,
  status,
  ref,
  placeholder,
}) {
  const isArr = Array.isArray(status);

  return (
    <div className="gap-custom-100 flex items-center">
      <div className="gap-custom-75 py-custom-50 flex w-[7.1875rem] items-center">
        {Icon && <Icon width="20" height="20" color="#2B303B" />}
        <span className="text-preset-5 text-custom-neutral-700">{text}</span>
      </div>
      {isArr ? (
        <TextEditor
          ref={ref}
          initialValue={Array.isArray(status) ? status.join(", ") : status}
          toolbar={false}
          placeholder={placeholder}
        />
      ) : (
        <p
          className={`text-preset-5 ${!status.startsWith("Not") ? "text-custom-neutral-700" : "text-custom-neutral-400"}`}
        >
          {status}
        </p>
      )}
    </div>
  );
}

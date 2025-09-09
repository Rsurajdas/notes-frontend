import React from "react";

export default function LabelWithStatus({ text, icon: Icon, status }) {
  return (
    <div className="gap-custom-100 flex items-center">
      <div className="gap-custom-75 py-custom-50 flex w-[7.1875rem] items-center">
        {Icon && <Icon width="20" height="20" color="#2B303B" />}
        <span className="text-preset-5 text-custom-neutral-700">{text}</span>
      </div>
      <p className="text-preset-5">
        {Array.isArray(status) ? status.join(", ") : status}
      </p>
    </div>
  );
}

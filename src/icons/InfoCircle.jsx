export const InfoCircle = ({ fill = "#0e121b", width, height, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24"}
      height={height || "24"}
      fill="none"
      viewBox="0 0 24 24"
      className="flex-shrink-0"
    >
      <path
        className={className}
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0ZM12.006 15.693v-4.3M12 8.355v-.063"
      />
    </svg>
  );
};

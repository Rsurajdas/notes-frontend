import { NavLink } from "react-router";
import { ChevronRight } from "../../icons/ChevronRight";

export default function SidebarLink({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `gap-custom-100 px-custom-150 py-custom-100 rounded-custom-8 ${isActive ? "bg-custom-neutral-100" : ""} hover:bg-custom-neutral-100 flex items-center`
      }
    >
      {({ isActive }) => (
        <>
          {Icon && (
            <Icon
              width="20"
              height="20"
              color={isActive ? "#335cff" : "#2b303b"}
            />
          )}{" "}
          <span className="text-pretext-4 text-custom-neutral-950 w-full">
            {label}
          </span>
          {isActive ? <ChevronRight /> : null}
        </>
      )}
    </NavLink>
  );
}

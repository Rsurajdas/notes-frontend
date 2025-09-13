import { NavLink } from "react-router";
import dayjs from "dayjs";

export default function NavCard({ item }) {
  return (
    <NavLink
      to={`${item._id}`}
      className={({ isActive }) =>
        `gap-custom-50 hover:bg-custom-neutral-100 rounded-custom-6 group flex flex-col ${isActive ? "bg-custom-neutral-100" : ""}`
      }
    >
      {({ isActive }) => (
        <>
          <div className="gap-custom-150 p-custom-100 flex flex-col">
            <h3 className="text-preset-3">{item.title}</h3>
            <div className="gap-custom-50 flex items-center">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-custom-4 bg-custom-neutral-200 py-custom-25 px-custom-75 text-preset-6"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-preset-6 text-custom-neutral-700">
              {dayjs(item.createdAt).format("DD MMM YYYY")}
            </p>
          </div>
          <hr
            className={`rounded-custom-20 border-0 border-b group-hover:border-transparent ${isActive ? "border-transparent" : "border-custom-neutral-200"}`}
          />
        </>
      )}
    </NavLink>
  );
}

import { useQuery } from "@tanstack/react-query";
import SidebarLink from "./SidebarLink";
import instance from "../../utils/interceptors";
import TagIcon from "../../icons/TagIcon";

export default function TagNav() {
  const {
    isPending,
    isEnabled,
    data: tags,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: async () => {
      const res = await instance.get("/tags");
      return res?.tags;
    },
  });

  return (
    <nav>
      <h4 className="text-preset-4 text-custom-neutral-400 px-custom-100 mb-custom-100">
        Tags
      </h4>
      <ul className="gap-custom-50 flex flex-col">
        {isPending && isEnabled ? (
          <div>Loading...</div>
        ) : (
          <li>
            {tags?.map((tag, idx) => (
              <SidebarLink
                key={idx}
                to={tag.toLowerCase()}
                icon={TagIcon}
                label={tag}
              />
            ))}
          </li>
        )}
      </ul>
    </nav>
  );
}

import { Home } from "../../icons/Home";
import { Logo } from "../../icons/Logo";
import MainNav from "./MainNav";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  return (
    <aside className="border-custom-neutral-200 px-custom-200 py-custom-150 gap-custom-200 flex w-[17rem] flex-shrink-0 flex-col border-r">
      <div className="py-custom-150">
        <Logo />
      </div>
      <MainNav />
    </aside>
  );
}

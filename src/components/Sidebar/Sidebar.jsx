import { Logo } from "../../icons/Logo";
import MainNav from "./MainNav";
import TagNav from "./TagNav";

export default function Sidebar() {
  return (
    <aside className="border-custom-neutral-200 px-custom-200 py-custom-150 gap-custom-200 flex w-[17rem] flex-shrink-0 flex-col border-r">
      <div className="py-custom-150">
        <Logo />
      </div>
      <div className="gap-custom-100 flex flex-col">
        <MainNav />
        <hr className="border-custom-neutral-200 border-b" />
        <TagNav />
      </div>
    </aside>
  );
}

import React from "react";
import SidebarLink from "./SidebarLink";
import { Home } from "../../icons/Home";
import Archive from "../../icons/Archive";

export default function MainNav() {
  return (
    <nav className="pb-custom-100 border-custom-neutral-200 border-b">
      <ul className="gap-custom-50 flex flex-col">
        <li>
          <SidebarLink to="/" icon={Home} label="All Notes" />
        </li>
        <li>
          <SidebarLink to="/archived" icon={Archive} label="Archived Notes" />
        </li>
      </ul>
    </nav>
  );
}

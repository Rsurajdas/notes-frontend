import { Outlet } from "react-router";
import Sidebar from "../Sidebar/SideBar";

export default function AuthenticatedLayout() {
  return (
    <main className="bg-custom-neutral-0 flex h-full min-h-screen">
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </main>
  );
}

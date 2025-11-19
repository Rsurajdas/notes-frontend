import { Outlet } from "react-router";
import Sidebar from "../Sidebar/SideBar";
import MainHeader from "../MainHeader/MainHeader";

export default function AuthenticatedLayout() {
  return (
    <main className="bg-custom-neutral-0 flex h-full min-h-screen">
      <Sidebar />
      <section className="w-full">
        <MainHeader />
        <Outlet />
      </section>
    </main>
  );
}

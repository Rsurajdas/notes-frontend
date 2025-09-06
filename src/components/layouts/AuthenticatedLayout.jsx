import { Outlet } from "react-router";
import Sidebar from "../Sidebar/SideBar";
import MainHeader from "../MainHeader/MainHeader";
import Button from "../Buttons/Button";

export default function AuthenticatedLayout() {
  return (
    <main className="bg-custom-neutral-0 flex h-full min-h-screen">
      <Sidebar />
      <section className="w-full">
        <MainHeader />
        <section className="pr-custom-400 flex h-[calc(100vh_-_5.0625rem)]">
          <div className="py-custom-250 pr-custom-200 pl-custom-400 border-custom-neutral-200 gap-custom-200 flex h-full w-[18.125rem] flex-col border-r">
            <Button
              text="+ Create New Note"
              variant="primary"
              to="notes/new"
              className=""
            />
            <Outlet />
          </div>
        </section>
      </section>
    </main>
  );
}

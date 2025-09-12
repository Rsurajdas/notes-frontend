import { Outlet } from "react-router";
import Sidebar from "../Sidebar/SideBar";
import MainHeader from "../MainHeader/MainHeader";
import Button from "../Buttons/Button";
import NavCardList from "../NavCard/NavCardList";
import { useQuery } from "@tanstack/react-query";
import instance from "../../utils/interceptors";

export default function AuthenticatedLayout() {
  const { isPending, data } = useQuery({
    queryKey: ["notes"],
    queryFn: async () => {
      return await instance.get("/notes");
    },
  });

  return (
    <main className="bg-custom-neutral-0 flex h-full min-h-screen">
      <Sidebar />
      <section className="w-full">
        <MainHeader />
        <Outlet context={{ isPending, data }} />
      </section>
    </main>
  );
}

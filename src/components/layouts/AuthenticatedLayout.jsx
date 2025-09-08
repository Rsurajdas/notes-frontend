import { Outlet } from "react-router";
import Sidebar from "../Sidebar/SideBar";
import MainHeader from "../MainHeader/MainHeader";
import Button from "../Buttons/Button";
import NavCardList from "../NavCard/NavCardList";

const data = [
  {
    id: 1,
    title: "React Performance Optimization",
    tags: ["Dev", "React"],
    date: "2023-10-01",
  },
  {
    id: 2,
    title: "Understanding JavaScript Closures",
    tags: ["JavaScript", "Programming"],
    date: "2023-09-28",
  },
  {
    id: 3,
    title: "CSS Grid vs. Flexbox: When to Use Which",
    tags: ["CSS", "Design"],
    date: "2023-09-25",
  },
  {
    id: 4,
    title: "A Guide to Modern Web Accessibility",
    tags: ["Accessibility", "Web"],
    date: "2023-09-20",
  },
  {
    id: 5,
    title: "State Management in React: Context API vs Redux",
    tags: ["React", "State Management"],
    date: "2023-09-15",
  },
];
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
            <>
              <NavCardList data={data} />
            </>
          </div>
          <Outlet />
        </section>
      </section>
    </main>
  );
}

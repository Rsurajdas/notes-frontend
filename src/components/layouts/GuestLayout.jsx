import { Outlet } from "react-router";

export default function GuestLayout() {
  return (
    <main className="bg-custom-neutral-100 flex h-full min-h-screen items-center justify-center">
      <section className="bg-custom-neutral-0 shadow-custom-lg outline-custom-neutral-200 rounded-custom-12 p-custom-600 gap-custom-200 flex w-[33.75rem] flex-col items-center justify-center outline outline-offset-[-1px]">
        <Outlet />
      </section>
    </main>
  );
}

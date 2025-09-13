import Button from "../../components/Buttons/Button";
import NavCardList from "../../components/NavCard/NavCardList";
import { Outlet, useOutletContext } from "react-router";

export default function Notes() {
  const { isPending, data } = useOutletContext();
  return (
    <section className="pr-custom-400 flex h-[calc(100vh_-_5.0625rem)]">
      <div className="py-custom-250 pr-custom-200 pl-custom-400 border-custom-neutral-200 gap-custom-200 flex h-full w-[18.125rem] flex-col border-r">
        <Button
          text="+ Create New Note"
          variant="primary"
          to="new"
          className=""
        />
        <NavCardList data={data?.data?.notes} loading={isPending} />
      </div>
      <Outlet />
    </section>
  );
}

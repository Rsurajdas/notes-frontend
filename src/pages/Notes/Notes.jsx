import { useQuery } from "@tanstack/react-query";
import Button from "../../components/Buttons/Button";
import NavCardList from "../../components/NavCard/NavCardList";
import { Link, Outlet, useMatches } from "react-router";
import { useLocation } from "react-router";
import instance from "../../utils/interceptors";

export default function Notes() {
  const location = useLocation();
  const matches = useMatches();

  const isArchivedRoute = !!matches.find(
    (match) => match.pathname === "/archived",
  )?.pathname;

  const { isPending, data } = useQuery({
    queryKey: ["notes", isArchivedRoute],
    queryFn: async () => {
      return await instance.get(
        `/notes${isArchivedRoute ? "?archived=true" : ""}`,
      );
    },
  });

  return (
    <section className="pr-custom-400 flex h-[calc(100vh_-_5.0625rem)]">
      <div className="py-custom-250 pr-custom-200 pl-custom-400 border-custom-neutral-200 gap-custom-200 flex h-full w-[18.125rem] shrink-0 flex-col border-r">
        <Button
          text="+ Create New Note"
          variant="primary"
          to="new"
          className=""
        />
        {isArchivedRoute ? (
          <p className="text-preset-5 text-custom-neutral-700">
            All your archived notes are stored here. You can restore or delete
            them anytime.
          </p>
        ) : null}
        {data?.data?.notes?.length ? (
          <NavCardList data={data?.data?.notes} loading={isPending} />
        ) : (
          <div className="rounded-custom-8 border-custom-neutral-200 bg-custom-neutral-100 p-custom-100 border">
            {location.pathname === "/notes" ? (
              <p className="text-preset-5">
                You don’t have any notes yet. Start a new note to capture your
                thoughts and ideas.
              </p>
            ) : (
              <p className="text-preset-5">
                No notes have been archived yet. Move notes here for
                safekeeping, or{" "}
                <Link to="new" className="underline">
                  create a new note
                </Link>
                .
              </p>
            )}
          </div>
        )}
      </div>
      <>
        <Outlet context={{ isArchivedRoute }} />
      </>
    </section>
  );
}

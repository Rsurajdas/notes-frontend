import Clock from "../../icons/Clock";
import TagIcon from "../../icons/TagIcon";
import Button from "../../components/Buttons/Button";
import LabelWithStatus from "../../components/Labels/LabelWithStatus";
import { useQuery } from "@tanstack/react-query";
import instance from "../../utils/interceptors";
import { useParams } from "react-router";
import dayjs from "dayjs";

export default function NavDetail() {
  const { id } = useParams();
  const { isPending, data } = useQuery({
    queryKey: ["notes", id],
    queryFn: async () => {
      return await instance.get(`/notes/${id}`);
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  const note = data?.data?.note;

  return (
    <div className="border-custom-neutral-200 py-custom-250 px-custom-300 gap-custom-200 flex w-[calc(100%_-_34.25rem)] flex-col border-r">
      <h1 className="text-preset-1">{note?.title}</h1>
      <div className="gap-custom-100 flex flex-col">
        <LabelWithStatus text="Tags" icon={TagIcon} status={note?.tags || []} />
        <LabelWithStatus
          text="Last edited"
          icon={Clock}
          status={dayjs(note?.updatedAt).format("DD MMM YYYY")}
        />
      </div>
      <hr className="border-custom-neutral-200 border-0 border-b" />
      <p className="text-preset-5 text-custom-neutral-800 leading-[1.3]">
        {note?.description}
      </p>
      <div className="gap-custom-200 mt-auto flex flex-col">
        <hr className="border-custom-neutral-200 border-0 border-b" />
        <div className="gap-custom-200 flex">
          <Button text="Save Notes" variant="primary" />
          <Button text="Cancel" variant="secondary" />
        </div>
      </div>
    </div>
  );
}

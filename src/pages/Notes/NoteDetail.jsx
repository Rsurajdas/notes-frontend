import Clock from "../../icons/Clock";
import TagIcon from "../../icons/TagIcon";
import Button from "../../components/Buttons/Button";
import LabelWithStatus from "../../components/Labels/LabelWithStatus";
import { useQuery } from "@tanstack/react-query";
import instance from "../../utils/interceptors";
import { useParams } from "react-router";
import dayjs from "dayjs";
import TextEditor from "../../components/TextEditor/TextEditor";
import { useRef } from "react";

export default function NavDetail() {
  const contentRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const { id } = useParams();
  const result = useQuery({
    queryKey: ["notes", id],
    queryFn: async () => {
      return await instance.get(`/notes/${id}`);
    },
    enabled: !!id,
  });

  if (result.isPending && result.isEnabled) {
    return <div>Loading...</div>;
  }

  const note = result?.data?.data?.note;

  const log = () => {
    if (contentRef.current) {
      console.log({
        description: contentRef.current.getContent(),
        tags: tagRef.current
          .getContent()
          .replace(/<\/?[^>]+(>|$)/g, "")
          .split(", ")
          .map((tag) => tag.trim()),
        title: headingRef.current.getContent().replace(/<\/?[^>]+(>|$)/g, ""),
      });
    }
  };

  return (
    <div className="border-custom-neutral-200 py-custom-250 px-custom-300 gap-custom-200 flex w-[calc(100%_-_34.25rem)] flex-col border-r">
      <TextEditor
        ref={headingRef}
        initialValue={`<h1>${id ? note?.title : "Enter a title..."}</h1>`}
        toolbar={false}
      />
      <div className="gap-custom-100 flex flex-col">
        <LabelWithStatus
          text="Tags"
          icon={TagIcon}
          status={note?.tags || []}
          ref={tagRef}
          placeholder="Add tags separated by commas (e.g. Work, Planning)"
        />
        <LabelWithStatus
          text="Last edited"
          icon={Clock}
          status={
            note?.updatedAt
              ? dayjs(note?.updatedAt).format("DD MMM YYYY")
              : "Not yet saved"
          }
        />
      </div>
      <hr className="border-custom-neutral-200 border-0 border-b" />
      <TextEditor
        ref={contentRef}
        initialValue={note?.description || ""}
        placeholder="Start typing your note here…"
      />
      <div className="gap-custom-200 mt-auto flex flex-col">
        <hr className="border-custom-neutral-200 border-0 border-b" />
        <div className="gap-custom-200 flex">
          <Button text="Save Notes" variant="primary" onClick={log} />
          <Button text="Cancel" variant="secondary" />
        </div>
      </div>
    </div>
  );
}

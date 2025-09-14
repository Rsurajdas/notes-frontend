import Clock from "../../icons/Clock";
import TagIcon from "../../icons/TagIcon";
import Button from "../../components/Buttons/Button";
import LabelWithStatus from "../../components/Labels/LabelWithStatus";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "../../utils/interceptors";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import TextEditor from "../../components/TextEditor/TextEditor";
import { useRef } from "react";

export default function NavDetail() {
  const contentRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const reset = () => {
    contentRef.current.setContent("");
    tagRef.current.setContent("");
    headingRef.current.setContent("<h1>Enter a title...</h1>");
  };
  const { isPending, isEnabled, data } = useQuery({
    queryKey: ["notes", id],
    queryFn: async () => {
      const res = await instance.get(`/notes/${id}`);
      return res?.data?.note;
    },
    enabled: !!id,
  });
  const mutation = useMutation({
    mutationFn: (data) => instance.post("/notes", data),
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["notes"] });
      reset();
      navigate(`/notes/${data?.data?.note?._id}`);
    },
  });

  if (isPending && isEnabled) {
    return <div>Loading...</div>;
  }

  const onSave = () => {
    mutation.mutate({
      description: contentRef.current.getContent(),
      tags: tagRef.current
        .getContent()
        .replace(/<\/?[^>]+(>|$)/g, "")
        .split(", ")
        .map((tag) => tag.trim()),
      title: headingRef.current.getContent().replace(/<\/?[^>]+(>|$)/g, ""),
    });
  };

  return (
    <div className="border-custom-neutral-200 py-custom-250 px-custom-300 gap-custom-200 flex w-[calc(100%_-_34.25rem)] flex-col border-r">
      <TextEditor
        ref={headingRef}
        initialValue={`<h1>${id ? data?.title : "Enter a title..."}</h1>`}
        toolbar={false}
      />
      <div className="gap-custom-100 flex flex-col">
        <LabelWithStatus
          text="Tags"
          icon={TagIcon}
          status={data?.tags || []}
          ref={tagRef}
          placeholder="Add tags separated by commas (e.g. Work, Planning)"
        />
        <LabelWithStatus
          text="Last edited"
          icon={Clock}
          status={
            data?.updatedAt
              ? dayjs(data?.updatedAt).format("DD MMM YYYY")
              : "Not yet saved"
          }
        />
      </div>
      <hr className="border-custom-neutral-200 border-0 border-b" />
      <TextEditor
        ref={contentRef}
        initialValue={data?.description ? data?.description : ""}
        placeholder="Start typing your note here…"
      />
      <div className="gap-custom-200 mt-auto flex flex-col">
        <hr className="border-custom-neutral-200 border-0 border-b" />
        <div className="gap-custom-200 flex">
          <Button
            text={mutation.isPending ? "Adding..." : "Save Notes"}
            variant="primary"
            onClick={onSave}
          />
          <Button text="Cancel" variant="secondary" onClick={reset} />
        </div>
      </div>
    </div>
  );
}

import Clock from "../../icons/Clock";
import TagIcon from "../../icons/TagIcon";
import Button from "../../components/Buttons/Button";
import LabelWithStatus from "../../components/Labels/LabelWithStatus";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "../../utils/interceptors";
import { useNavigate, useOutletContext, useParams } from "react-router";
import dayjs from "dayjs";
import TextEditor from "../../components/TextEditor/TextEditor";
import { useRef } from "react";
import Archive from "../../icons/Archive";
import Delete from "../../icons/Delete";
import { Restore } from "../../icons/Restore";
import { REMOVE_HTML_TAGS_REGEX } from "../../utils";

export default function NavDetail() {
  const contentRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const { noteId } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isArchivedRoute } = useOutletContext();

  const reset = () => {
    contentRef.current.setContent("");
    tagRef.current.setContent("");
    headingRef.current.setContent("<h1>Enter a title...</h1>");
  };

  const { isPending, isEnabled, data } = useQuery({
    queryKey: ["notes", noteId],
    queryFn: async () => {
      const res = await instance.get(`/notes/${noteId}`);
      return res?.data?.note;
    },

    enabled: !!noteId,
  });
  const mutation = useMutation({
    mutationFn: (data) => {
      if (noteId) {
        return instance.patch(`/notes/${noteId}`, data);
      }
      return instance.post("/notes", data);
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["notes", isArchivedRoute],
      });
      if (!noteId) {
        navigate(`/notes/${noteId ? noteId : data?.data?.note?._id}`);
        reset();
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: () => {
      return instance.delete(`/notes/${noteId}`);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["notes", isArchivedRoute],
      });
      navigate(isArchivedRoute ? "/archived" : "/notes");
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
        .replace(REMOVE_HTML_TAGS_REGEX, "") // Remove HTML tags
        .split(", ")
        .map((tag) => tag.trim()),
      title: headingRef.current
        .getContent()
        .replace(REMOVE_HTML_TAGS_REGEX, ""),
    });
  };

  const archiveNote = () => {
    mutation.mutate({ isArchived: !isArchivedRoute });
  };

  const deleteNote = () => {
    deleteMutation.mutate();
  };

  return (
    <>
      <div className="border-custom-neutral-200 py-custom-250 px-custom-300 gap-custom-200 flex w-[calc(100%_-_34.25rem)] shrink-0 flex-col border-r">
        <TextEditor
          ref={headingRef}
          initialValue={`<h1>${noteId ? data?.title : "Enter a title..."}</h1>`}
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
      <div className="pl-custom-200 py-custom-250 gap-custom-150 flex w-full flex-col">
        <Button
          variant="seconday"
          text={`${isArchivedRoute ? "Restore Note" : "Archive Note"}`}
          icon={isArchivedRoute ? Restore : Archive}
          className="justify-start"
          onClick={archiveNote}
        />
        <Button
          variant="seconday"
          text="Delete Note"
          icon={Delete}
          className="justify-start"
          onClick={deleteNote}
        />
      </div>
    </>
  );
}

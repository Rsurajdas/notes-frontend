import { Link, useFetcher } from "react-router";
import FormGroup from "../Inputs/FormGroup";
import Settings from "../../icons/Settings";

export default function MainHeader() {
  let { Form } = useFetcher();
  return (
    <header className="border-custom-neutral-200 px-custom-400 flex h-[81px] items-center justify-between border-b">
      <h2 className="text-preset-1">All Notes</h2>
      <div className="gap-custom-200 flex items-center">
        <Form method="post" className="flex items-center">
          <FormGroup
            type="search"
            placeholder="Search by title, content, or tags…"
            id="search"
            name="search"
            className="w-[300px]"
          />
        </Form>
        <Link to="settings" className="p-[.5625rem]">
          <Settings width="24" height="24" color="#717784" />
        </Link>
      </div>
    </header>
  );
}

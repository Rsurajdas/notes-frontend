import Clock from "../../icons/Clock";
import TagIcon from "../../icons/TagIcon";
import Button from "../../components/Buttons/Button";
import LabelWithStatus from "../../components/Labels/LabelWithStatus";

export default function NavDetail() {
  return (
    <div className="border-custom-neutral-200 py-custom-250 px-custom-300 gap-custom-200 flex w-[calc(100%_-_34.25rem)] flex-col border-r">
      <h1>React Performance Optimization</h1>
      <div className="gap-custom-100 flex flex-col">
        <LabelWithStatus
          text="Tags"
          icon={TagIcon}
          status={["Devs", "React"]}
        />
        <LabelWithStatus
          text="Last edited"
          icon={Clock}
          status={"29 Oct 2024"}
        />
      </div>
      <hr className="border-custom-neutral-200 border-0 border-b" />
      <p className="text-preset-5 text-custom-neutral-800 leading-[1.3]">
        Key performance optimization techniques: 1. Code Splitting - Use
        React.lazy() for route-based splitting - Implement dynamic imports for
        heavy components 2. Memoization - useMemo for expensive calculations -
        useCallback for function props - React.memo for component optimization
        3. Virtual List Implementation - Use react-window for long lists -
        Implement infinite scrolling TODO: Benchmark current application and
        identify bottlenecks
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

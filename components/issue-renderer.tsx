import IssuesContext, { Issue, Priority, Status } from "@/contexts/issues";
import { getInitials } from "@/utils/issue";
import { useContext, useEffect, useRef, useState } from "react";
import { Virtuoso } from "react-virtuoso";

const StatusRenderer = ({ status }: { status: Status }) => {
  const colorType = (status === "Backlog" || status === "Todo") ? "gray" : status === "In Progress" ? "yellow" : status === "In Review" ? "pink" : status === "Done" ? "green" : "purple";
  return (
    <span className={`inline-flex items-center rounded-md bg-${colorType}-50 px-2 py-1 text-xs font-medium text--${colorType}-600 ring-1 ring-inset ring--${colorType}-500/10`}>
      <svg className={`fill-${colorType}-600 w-1.5 h-1.5`} viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
      {status}
    </span>
  );
};

const PriorityRenderer = ({ priority }: { priority: Priority }) => {
  const colorType = priority === "critical" ? "red" : priority === "high" ? "pink" : priority === "medium" ? "yellow" : priority === "low" ? "gray" : "";
  return (
    priority === "none" ? null : (
      <span className={`inline-flex items-center rounded-md bg-${colorType}-50 px-2 py-1 text-xs font-medium text--${colorType}-600 ring-1 ring-inset ring--${colorType}-500/10`}>
        <svg className={`fill-${colorType}-600 w-1.5 h-1.5`} viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3"></circle></svg>
        {priority}
      </span>
    )
  );
};

export const IssueRenderer = ({ data }: { data: Issue[] }) => {
  const [height, setHeight] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    parentRef.current && setHeight(parentRef.current.getBoundingClientRect().height);
  }, []);

  return (
    <div className="flex flex-auto w-full" ref={parentRef}>
      {
        height > 0 ? (
          <Virtuoso data={data} style={{ height, width: '100%' }} itemContent={(_, data) => (
            <div key={data.id} className="flex justify-between gap-x-6 py-5 bg-zinc">
              <div className="min-w-0 flex-auto flex gap-x-6">
                <p className="text-sm font-semibold leading-6 text-gray-900">{data.id}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{data.title}</p>
              </div>
              <StatusRenderer status={data.status} />
              <PriorityRenderer priority={data.priority} />
              <span className="h-6 w-6 flex-none border-slate-900 stroke-2" stroke-linecap="round" stroke-linejoin="round">
                {getInitials(data.assignee || "-")}
              </span>
            </div>
          )} />
        ) : null
      }
    </div>);
};

const IssuesList = () => {
  const { data } = useContext(IssuesContext);

  // loading
  if (!data?.tickets) return null;

  return <IssueRenderer data={data.tickets} />
};

export default IssuesList;
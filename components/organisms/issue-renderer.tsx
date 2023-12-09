import IssuesContext, { Issue } from "@/contexts/issues";
import { getInitials } from "@/utils/issue";
import { useContext, useEffect, useRef, useState } from "react";
import { Virtuoso } from "react-virtuoso";
import StatusRenderer from "../molecules/status-renderer";
import PriorityRenderer from "../molecules/priority-renderer";

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
            <div key={data.id} className="flex justify-between gap-x-6 py-2 px-3 border-b-2 border-b-gray-800 items-center">
              <div className="min-w-0 flex-auto flex gap-x-6">
                <p className="text-sm font-semibold leading-6">{data.id}</p>
                <p className="mt-1 truncate text-xs leading-5">{data.title}</p>
              </div>
              <StatusRenderer status={data.status} />
              <PriorityRenderer priority={data.priority} />
              <span className="h-8 w-8 border-2 rounded-full border-slate-900 stroke-2 flex justify-center items-center text-xs font-semibold">
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
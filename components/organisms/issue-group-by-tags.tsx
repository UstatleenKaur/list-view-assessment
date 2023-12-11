import IssuesContext from "@/contexts/issues";
import { MouseEventHandler, useContext } from "react";

const IssueGroupByTags = () => {
  const { loading, setParam, params } = useContext(IssuesContext);
  // Current different group types
  const groupTypes = [{
    key: "none",
    label: "NONE",
    value: ""
  }, {
    key: "status",
    label: "STATUS",
    value: "status",
  }, {
    key: "labels",
    label: "LABELS",
    value: "labels",
  }, {
    key: "priority",
    label: "PRIORITY",
    value: "priority",
  }, {
    key: "assignee",
    value: "assignee",
    label: "ASSIGNEE",
  }];

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (loading) return;
    const { type } = event.currentTarget.dataset;
    setParam("groupBy", type);
  };

  // Renders the tab for using the grouping of issues
  return (
    <div className="border-b border-gray-200">
      <div className="-mb-px flex space-x-8 px-4">
        {groupTypes.map((groupType) => (<button key={groupType.key} className={`text-slate-400 flex-1 whitespace-nowrap border-b-2 px-4 py-3 text-base font-medium border-transparent ${(params.groupBy === groupType.value || (groupType.value === "" && !params.groupBy)) ? "bg-gray-900 border-white" : ""}`} type="button" data-type={groupType.value} onClick={onClick}>{groupType.label}</button>))}
      </div>
    </div>
  );
};

export default IssueGroupByTags;
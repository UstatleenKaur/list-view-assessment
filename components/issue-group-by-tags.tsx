import IssuesContext from "@/contexts/issues";
import { MouseEventHandler, useContext } from "react";

const IssueGroupByTags = () => {
  const { setParam, params } = useContext(IssuesContext);
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
    const { type } = event.currentTarget.dataset;
    setParam("groupBy", type);
  };
  return (
    <div className="border-b border-gray-200">
      <div className="-mb-px flex space-x-8 px-4">
        {groupTypes.map((value) => (<button key={value.key} className={`text-gray-900 flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium ${params.groupBy === value.key ? "border-green green" : "border-transparent"}`} type="button" data-type={value.value} onClick={onClick}>{value.label}</button>))}
      </div>
    </div>
  );
};

export default IssueGroupByTags;
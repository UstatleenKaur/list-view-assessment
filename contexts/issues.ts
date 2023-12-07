import { noop } from "@/utils/noop";
import { createContext } from "react";

export type Priority = "none" | "low" | "medium" | "high" | "critical";
export type Label = "Bug" | "Feature" | "Performance" | "Security" | "Documentation" | "User Request" | "Immediate" | "Next Release" | "Major Release";
export type Status = "Triage" | "Backlog" | "Todo" | "In Progress" | "In Review" | "Done";
export type Team = "HFE" | "HBE" | "HP";

export type Issue = {
  // rendered
  assignee?: string | null;
  priority: Priority;
  title: string;
  id: string;
  status: Status;

  // not rendered
  labels: Array<Label>;
  parentID?: string | null;
  teamID: Team;
}

export type IssuesResponse = {
  tickets: Issue[];
};

type IssuesError = {
  message: string;
};

export type ParamType = "pageNumber" | "groupBy";

type IssuesContext = {
  loading: boolean;
  params: {
    pageNumber: number;
    groupBy?: "priority" | "status" | "assignee";
  };
  data?: IssuesResponse;
  error?: IssuesError;
};

export const DEFAULT_ISSUES_DATA: IssuesContextWithUtils = {
  loading: false,
  params: {
    pageNumber: 1,
  },
  fetcher: noop,
  setParam: noop,
};

export type IssuesContextWithUtils = IssuesContext & {
  fetcher: () => void;
  setParam: (key: ParamType, value: any) => void;
};

const IssuesContext = createContext(DEFAULT_ISSUES_DATA);

export default IssuesContext;
import { getIssues } from "@/services/issues";
import { ReactNode, useEffect, useState } from "react";
import IssuesContext, { DEFAULT_ISSUES_DATA, IssuesContextWithUtils, IssuesResponse } from "./issues";

export default function IssueContextWrapper({ children }: { children: ReactNode }) {
  const [issuesData, setIssuesData] = useState<IssuesContextWithUtils>(DEFAULT_ISSUES_DATA);
  const fetcher = () => {
    setIssuesData(e => ({ ...e, loading: true }));
    getIssues(issuesData?.params.pageNumber).then((data: IssuesResponse) => {
      setIssuesData((e) => ({
        ...e,
        loading: false,
        data,
      }));
    }).catch((error) => {
      setIssuesData((e) => ({
        ...e,
        loading: false,
        error: {
          message: error.toString(),
        },
      }));
    });
  };

  const setParam = (key: string, value: any) => {
    setIssuesData((e) => ({
      ...e,
      params: {
        ...e.params,
        [key]: value,
      },
    }));
  };

  useEffect(() => {
    fetcher();
  }, [issuesData.params.pageNumber]);

  useEffect(() => {
    setIssuesData((e) => ({
      ...e,
      fetcher,
      setParam,
    }))
  }, []);

  return (
    <IssuesContext.Provider value={issuesData}>
      {children}
    </IssuesContext.Provider>
  );
};
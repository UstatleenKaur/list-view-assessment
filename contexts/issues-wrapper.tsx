import { getIssues } from "@/services/issues";
import { ReactNode, useEffect, useRef, useState } from "react";
import IssuesContext, { DEFAULT_ISSUES_DATA, IssuesContextWithUtils, IssuesResponse, ParamType } from "./issues";

export default function IssueContextWrapper({ children }: { children: ReactNode }) {
  const [issuesData, setIssuesData] = useState<IssuesContextWithUtils>(DEFAULT_ISSUES_DATA);
  // Since the fetch call goes in and couple of params in the state are still updating, hence we needed some exclusivity to avoid multiple similar calls, which this ref solves the purpose.
  const exclusivityRef = useRef<{ loading: boolean }>({ loading: false });
  const fetcher = () => {
    if (exclusivityRef.current.loading) return;
    exclusivityRef.current.loading = true;
    setIssuesData(e => ({ ...e, loading: true }));
    getIssues(issuesData?.params.pageNumber).then((data: IssuesResponse) => {
      exclusivityRef.current.loading = false;
      setIssuesData((e) => ({
        ...e,
        loading: false,
        data,
      }));
    }).catch((error) => {
      exclusivityRef.current.loading = false;
      setIssuesData((e) => ({
        ...e,
        loading: false,
        error: {
          message: error.toString(),
        },
      }));
    });
  };

  const setParam = (key: ParamType, value: any) => {
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
import { Issue, Label } from "@/contexts/issues";

// This function extracts the initials of a user from a name
export function getInitials(name: string) {
  return name.split(" ").map(i => i.substring(0, 1)).join("").toUpperCase().substring(0, 2);
}

// This groupby function takes the by which it wants the grouping like if its `labels` then it checks which all labels a particular issue has and put that into each label's bucket, or if its `assignee` then it creates two buckets whether the issue is unassigned to a user or not, etc.
export function groupBy(records: Issue[], key?: keyof Issue) {
  if (!key) return records;
  return records.reduce((result: Record<any, Issue[]>, obj: Issue) => {
    const keyValue: any = obj[key];

    if (key === "labels") {
      (keyValue as Label[]).forEach((label) => {
        if (!result[label]) {
          result[label] = [];
        }

        result[label].push(obj);
      });
    } else if (key === "assignee") {
      let currentKey = "unassigned";
      if (keyValue) {
        currentKey = "assigned";
      }

      if (!result[currentKey]) {
        result[currentKey] = [];
      }

      result[currentKey].push(obj);

    } else {
      if (!result[keyValue]) {
        result[keyValue] = [];
      }

      result[keyValue].push(obj);
    }

    return result;
  }, {});
}
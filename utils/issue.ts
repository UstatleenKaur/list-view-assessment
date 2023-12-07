import { Issue, Label } from "@/contexts/issues";

export function getInitials(name: string) {
  return name.split(" ").map(i => i.substring(0, 1)).join("").toUpperCase();
}

export function groupBy(records: Issue[], key?: keyof Issue) {
  if (!key) return records;
  return records.reduce((result: Record<any, Issue[]>, obj: Issue) => {
    const keyValue: any = obj[key];

    if (key === "labels") {
      (keyValue as Label[]).forEach((label) => {
        // Check if the key exists in the result object
        if (!result[label]) {
          result[label] = [];
        }

        // Push the current object to the corresponding key in the result object
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

      // Push the current object to the corresponding key in the result object
      result[currentKey].push(obj);

    } else {
      // Check if the key exists in the result object
      if (!result[keyValue]) {
        result[keyValue] = [];
      }

      // Push the current object to the corresponding key in the result object
      result[keyValue].push(obj);
    }

    return result;
  }, {});
}
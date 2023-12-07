import Pill from "../atoms/pill";
import { Priority } from "@/contexts/issues";

const PriorityRenderer = ({ priority }: { priority: Priority }) => {
  const colorType = priority === "critical" ? "red" : priority === "high" ? "pink" : priority === "medium" ? "yellow" : priority === "low" ? "gray" : "";
  return (
    priority === "none" ? null : <Pill color={colorType} label={priority} />
  );
};

export default PriorityRenderer;
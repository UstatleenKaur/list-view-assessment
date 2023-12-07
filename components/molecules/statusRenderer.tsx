import Pill from "../atoms/pill";
import { Status } from "@/contexts/issues";

const StatusRenderer = ({ status }: { status: Status }) => {
  const colorType = (status === "Backlog" || status === "Todo") ? "gray" : status === "In Progress" ? "yellow" : status === "In Review" ? "pink" : status === "Done" ? "green" : "purple";
  return <Pill color={colorType} label={status} />
};

export default StatusRenderer;
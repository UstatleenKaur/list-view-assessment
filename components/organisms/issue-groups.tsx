import React, { useContext } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import IssuesContext, { Issue } from "@/contexts/issues";
import { groupBy } from "@/utils/issue";
import { IssueRenderer } from "./issue-renderer";

// This creates accordions for the grouped data to render the list of issues according to the group type
const CustomAccordions = ({ groupedData }: { groupedData: Record<any, Issue[]> }) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(value);

  const groups = Object.keys(groupedData);

  return (
    <div className="flex flex-col flex-auto w-full accordion">
      {
        groups.map((value, index) => (
          <Accordion key={value} className={`flex flex-col w-full overflow-y-hidden ${open === (index + 1) ? "flex-auto accordion--active" : ""}`} open={open === (index + 1)}>
            <AccordionHeader className={`border-0 bg-gray-900 px-3 py-2 ${open === (index + 1) ? "" : "mb-2"}`} onClick={() => handleOpen((index + 1))}>{`${value}`.toUpperCase()}</AccordionHeader>
            <AccordionBody className={`${open === (index + 1) ? "flex flex-auto w-full py-0" : ""}`}>
              {open === (index + 1) && <IssueRenderer data={groupedData[value]} />}
            </AccordionBody>
          </Accordion>
        ))
      }
    </div>
  );
}

const IssueGroups = () => {
  const { data, params } = useContext(IssuesContext);
  const groupedData = groupBy(data?.tickets || [], params.groupBy);
  return <CustomAccordions groupedData={groupedData as Record<any, Issue[]>} />
};

export default IssueGroups;
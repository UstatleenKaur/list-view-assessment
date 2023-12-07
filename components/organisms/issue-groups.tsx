import React, { useContext, useEffect } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import IssuesContext, { Issue } from "@/contexts/issues";
import { groupBy } from "@/utils/issue";
import { IssueRenderer } from "./issue-renderer";

const CustomAccordion = ({ groupedData }: { groupedData: Record<any, Issue[]> }) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(value);

  const groups = Object.keys(groupedData);

  return (
    <div className="flex flex-col flex-auto w-full accordion">
      {
        groups.map((value, index) => (
          <Accordion key={value} className={`flex flex-col w-full overflow-y-hidden ${open === (index + 1) ? "flex-auto accordion--active" : ""}`} open={open === (index + 1)}>
            <AccordionHeader onClick={() => handleOpen((index + 1))}>{`${value}`.toUpperCase()}</AccordionHeader>
            <AccordionBody className={`${open === (index + 1) ? "flex flex-auto w-full" : ""}`}>
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
  return <CustomAccordion groupedData={groupedData as Record<any, Issue[]>} />
};

export default IssueGroups;
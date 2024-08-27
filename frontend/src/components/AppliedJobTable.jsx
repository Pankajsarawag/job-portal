import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  const appliedJobs = [
    {
      Date: "34:34:23",
      JobRole: "backendDeveloper",
      Company: "jobHunt",
      Status: "Pending",
    },
    {
      Date: "34:34:23",
      JobRole: "backendDeveloper",
      Company: "jobHunt",
      Status: "Pending",
    },
    {
      Date: "34:34:23",
      JobRole: "backendDeveloper",
      Company: "jobHunt",
      Status: "Pending",
    },
    {
      Date: "34:34:23",
      JobRole: "backendDeveloper",
      Company: "jobHunt",
      Status: "Pending",
    },
    {
      Date: "34:34:23",
      JobRole: "backendDeveloper",
      Company: "jobHunt",
      Status: "Pending",
    },
  ];

  return (
    <div className="border border-gray-100 rounded-full bg-white">
      <Table>
        <TableCaption className="font-semibold">
          Jobs you have applied
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {appliedJobs.map((job, ind) => (
            <>
              <TableRow key={ind}>
                <TableCell>{job.Date}</TableCell>
                <TableCell>{job.JobRole}</TableCell>
                <TableCell>{job.Company}</TableCell>
                <TableCell className="text-right">
                  <Badge>{job.Status}</Badge>
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;

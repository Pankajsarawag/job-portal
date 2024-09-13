import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { useSelector } from "react-redux";

import { Badge } from "../ui/badge";

const AppliedJobTable = () => {
  const { appliedJobs } = useSelector((store) => store.job);

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
          {appliedJobs?.map((application) => (
            <>
              <TableRow key={application?._id}>
                <TableCell>{application?.createdAt.split("T")[0]}</TableCell>
                <TableCell>{application?.job?.title}</TableCell>
                <TableCell>{application?.job?.companyId?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${
                      application?.status.toLowerCase() === "rejected"
                        ? "bg-red-400"
                        : application?.status.toLowerCase() === "pending"
                        ? "bg-gray-400"
                        : "bg-green-400"
                    }`}
                  >
                    {application?.status.toUpperCase()}
                  </Badge>
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

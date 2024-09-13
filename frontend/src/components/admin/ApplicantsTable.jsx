import { Popover, PopoverContent } from "@radix-ui/react-popover";
import { Table } from "../ui/table";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constants";
import { toast } from "sonner";

const status = ["Accepted", "Rejected"];

const ApplicantsTable = () => {
  const { applicants } = useSelector((store) => store.application);

  //update status of applicant
  const statusHandler = async (status, id) => {
    try {
      const res = await axios.patch(
        `${APPLICATION_API_END_POINT}/${id}`,
        { status },
        { withCredentials: true }
      );

      if (res.data.success) toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied user</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact No</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {applicants &&
            applicants.map((application) => (
              <TableRow key={application._id}>
                <TableCell>{application?.applicant?.fullname}</TableCell>
                <TableCell>{application?.applicant?.email}</TableCell>
                <TableCell>{application?.applicant.phoneNumber}</TableCell>
                <TableCell>
                  {application?.applicant?.resume ? (
                    <a
                      className="cursor-pointer underline text-blue-700"
                      href={application?.applicant?.profile.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {application?.applicant?.profile.resumeOriginalName}
                    </a>
                  ) : (
                    <span>NA</span>
                  )}
                </TableCell>
                <TableCell>{application.createdAt.split("T")[0]}</TableCell>
                <TableCell className="float-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      {status.map((st, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => statusHandler(st, application._id)}
                          >
                            {st}
                          </div>
                        );
                      })}
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ApplicantsTable;

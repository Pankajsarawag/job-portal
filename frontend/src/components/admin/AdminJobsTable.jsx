import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  TableCaption,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye } from "lucide-react";
import { MoreHorizontal } from "lucide-react";

const AdminJobsTable = () => {
  const { adminJobs, searchJobs } = useSelector((store) => store.job);
  const navigate = useNavigate();
  const [filterJobs, setFilterJobs] = useState(adminJobs);
  useEffect(() => {
    const filteredjob =
      filterJobs?.length >= 0 &&
      filterJobs.filter((job) => {
        if (!searchJobs) return true;

        return (
          job?.title?.toLowerCase().includes(searchJobs.toLowerCase()) ||
          job?.companyId?.name.toLowerCase().includes(searchJobs.toLowerCase())
        );
      });

    setFilterJobs(filteredjob);
  }, [adminJobs, searchJobs]);

  return (
    <div>
      <Table>
        <TableCaption>List of your recent posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs &&
            filterJobs.map((job) => {
              return (
                <TableRow key={job._id}>
                  <TableCell>{job?.companyId?.name}</TableCell>
                  <TableCell>{job?.title}</TableCell>
                  <TableCell>{job.createdAt.split("T")[0]}</TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-30">
                        <div
                          className="flex items-center gap-2 w-fit cursor-pointer"
                          onClick={() => navigate(`/admin/jobs/${job._id}`)}
                        >
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                        <div
                          onClick={() =>
                            navigate(`/admin/jobs/${job._id}/applicants`)
                          }
                          className="flex items-center w-fit gap-2 cursor-pointer mt-2 "
                        >
                          <Eye className="w-4" />
                          <span>Applicants</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;

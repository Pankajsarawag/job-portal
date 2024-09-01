/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";

const JobCard = ({ job }) => {
  // console.log(job.companyId.name);
  return (
    <div className="rounded-md bg-white border border-gray-100 shadow-xl p-3 ">
      <h3 className="font-semibold txt-lg"></h3>
      <p className="text-muted-foreground">India</p>
      <h2 className="text-lg font-bold mt-2">{job.title}</h2>
      <p className="text-sm text-muted-foreground">{job.description}</p>
      <div className="pt-2 flex gap-4 items-center justify-start">
        <Badge
          variant="outline"
          className="h-8 text-[#6f5c92] cursor-pointer 
            hover:text-[#452a74] font-bold"
        >
          {job.position} Positions
        </Badge>
        <Badge
          variant="ghost"
          className="h-8 text-[#92a143] cursor-pointer   hover:text-[#5b681d] font-bold "
        >
          Full Time
        </Badge>
        <Badge
          variant="outline"
          className="h-8 text-[#1399a7] cursor-pointer  font-bold hover:text-[#05808e]"
        >
          45LPA
        </Badge>
      </div>
    </div>
  );
};

export default JobCard;

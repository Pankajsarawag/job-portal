/* eslint-disable react/prop-types */
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  // console.log(job.companyId.name);
  return (
    <div
      onClick={() => navigate(`/job/detail/${job._id}`)}
      className="rounded-md bg-white border border-gray-100 shadow-xl p-3 "
    >
      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.companyId.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-bold">{job?.companyId.name}</h1>
          <p className="text-muted-foreground">India</p>
        </div>
      </div>

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

/* eslint-disable react/prop-types */
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";
import JobDetail from "./JobDetail";
import { Bookmark } from "lucide-react";
const JobMainCard = ({ job }) => {
  const navigate = useNavigate();

  //funtion to calculate no of days ago the job
  const calculateDays = (createdTime) => {
    const created = new Date(createdTime);
    const currentTime = new Date();
    const timeDiff = currentTime - created;

    return Math.floor(timeDiff / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="rounded-md border border-gray-100 shadow-xl px-2 bg-white">
      <div className="flex items-center justify-between pt-2">
        <p className="text-gray-500 text-sm">
          {calculateDays(JobDetail.createdAt) == 0
            ? "Today"
            : `${calculateDays(job.createdAt)}`}{" "}
          days ago
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-bold">Google</h1>
          <p className="text-muted-foreground">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg mt-2">{job.title}</h1>
        <p className="text-gray-600">{job.description}</p>
      </div>
      <div className="py-2 flex gap-4 items-center justify-start">
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
      <div className="flex items-center gap-4 mt-4 pb-2">
        <Button
          variant="outline"
          onClick={() => navigate(`/job/detail/${job._id}`)}
        >
          Details
        </Button>
        <Button className="bg-[#1894a1] hover:bg-[#0b717d] ">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default JobMainCard;

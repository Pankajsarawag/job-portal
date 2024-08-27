import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";

const JobMainCard = () => {
  const navigate = useNavigate();
  const jobId = 1;

  return (
    <div className="rounded-md border border-gray-100 shadow-xl px-2 bg-white">
      <div className="flex items-center justify-between pt-2">
        <p className="text-gray-500 text-sm">2 days ago</p>
        <Button variant="outline" classname="rounded-full" size="icon">
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
        <h1 className="font-bold text-lg mt-2">FullStack Developer</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nobis.
          Voluptatum, fuga amet minus consequuntur in architecto neque! Ipsa,
          dolores?
        </p>
      </div>
      <div className="py-2 flex gap-4 items-center justify-start">
        <Badge
          variant="outline"
          className="h-8 text-[#6f5c92] cursor-pointer 
            hover:text-[#452a74] font-bold"
        >
          2 Positions
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
          onClick={() => navigate(`/job/detail/${jobId}`)}
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

import Navbar from "./shared/Navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDetail = () => {
  const isApplied = true;

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-bold text-xl">Frontend Developer</h1>
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
          </div>

          <Button
            className={`rounded-lg ${
              isApplied
                ? "bg-[#1399a7] hover:bg-[#1399a7] cursor-not-allowed"
                : "bg-[#0cabba] hover:bg-[#1399a7]"
            } `}
            Disabled={isApplied}
          >
            {isApplied ? "Applied" : "Apply Now"}
          </Button>
        </div>
        <h1 className="font-md text-lg border-b-2 border-b-gray-300">
          Job Details
        </h1>
        <div className="my-4">
          <h1 className="font-bold">
            Role&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">Fronted Developer</span>
          </h1>
          <h1 className="font-bold">
            Location&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">Hyderabad</span>
          </h1>
          <h1 className="font-bold">
            Description&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              voluptate?
            </span>
          </h1>
          <h1 className="font-bold">
            Experience&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">2 yrs</span>
          </h1>
          <h1 className="font-bold">
            Salary&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">12 LPA</span>
          </h1>
          <h1 className="font-bold">
            Total Applicants&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">4</span>
          </h1>
          <h1 className="font-bold">
            TPosted Date&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">27-08-2024</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;

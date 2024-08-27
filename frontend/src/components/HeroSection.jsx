import { Search } from "lucide-react";
import { Button } from "./ui/button";
const HeroSection = () => {
  return (
    <div>
      <div className="w-full mx-auto  flex flex-col items-center justify-center gap-3 my-10">
        <h2 className="px-4 my-2 rounded-full bg-gray-100 text-[#1399a7] font-bold mr-20">
          No.1 Job Hunt Website
        </h2>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your
          <span className="text-[#0cabba]"> Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          aspernatur nulla placeat magni odit rerum consequuntur{" "}
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center mx-auto my-3 h-9">
          <input
            type="text"
            placeholder="find your dream job"
            className="outline-none border-none w-full"
          />
          <Button className="border-none rounded-r-full w-12 h-9 bg-[#0cabba] hover:bg-[#1399a7]">
            <Search />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import { useSelector } from "react-redux";
import Navbar from "../shared/Navbar";
import FilterCard from "./FilterCard";
import JobMainCard from "./JobMainCard";

const Jobs = () => {
  // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-5 ">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {allJobs.length < 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto  pb-5">
              <div className="mx-2flex items-center justify-around flex-wrap md:grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <div key={job._id}>
                    <JobMainCard job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* jobs Listing */}
      </div>
    </div>
  );
};

export default Jobs;

import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import JobMainCard from "./JobMainCard";

const Jobs = () => {
  const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-5 ">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {jobsArray.length < 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto  pb-5">
              <div className="mx-2flex items-center justify-around flex-wrap md:grid grid-cols-3 gap-4">
                {jobsArray.map((item, index) => (
                  <div key={index}>
                    <JobMainCard />
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

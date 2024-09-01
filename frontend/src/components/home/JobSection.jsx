import { useSelector } from "react-redux";
import JobCard from "./JobCard";

const JobSection = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className=" max-w-7xl mx-auto my-20">
      <h1 className="text-2xl font-bold">
        <span className="text-[#1399a7] ">Latest and Top </span>
        Job Opernings
      </h1>

      {/* display top jobs */}
      <div className="mt-3 flex flex-col md:grid grid-cols-3 gap-4 y-5 ">
        {allJobs.length <= 0 ? (
          <span>No Job Available!</span>
        ) : (
          allJobs.slice(0, 6).map((job) => <JobCard key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default JobSection;

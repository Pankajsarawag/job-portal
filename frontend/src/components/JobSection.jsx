import JobCard from "./JobCard";

const JobSection = () => {
  const latestJobs = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className=" max-w-7xl mx-auto my-20">
      <h1 className="text-2xl font-bold">
        <span className="text-[#1399a7] ">Latest and Top </span>
        Job Opernings
      </h1>

      {/* display top jobs */}
      <div className="mt-3 flex flex-col md:grid grid-cols-3 gap-4 y-5 ">
        {latestJobs.slice(0, 6).map((key, ind) => (
          <JobCard key={ind} />
        ))}
      </div>
    </div>
  );
};

export default JobSection;

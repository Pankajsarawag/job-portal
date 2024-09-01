import JobMainCard from "./jobPages/JobMainCard";
import Navbar from "./shared/Navbar";

const Browse = () => {
  const rJobs = [1, 2, 3];
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 mt-5 px-3">
        <h1 className="font-bold text-lg">Search Results ({rJobs.length}) </h1>
        <div className="flex items-center justify-center flex-wrap mx-auto mt-3 md:grid grid-cols-3 gap-4">
          {rJobs.map((item, ind) => {
            return <JobMainCard key={ind} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;

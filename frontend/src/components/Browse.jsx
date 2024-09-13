import { useDispatch, useSelector } from "react-redux";
import JobMainCard from "./jobPages/JobMainCard";
import Navbar from "./shared/Navbar";
import { useEffect } from "react";
import { setSearchQuery } from "@/redux/jobSlice";
import UseGetAlljobs from "@/hooks/UseGetAlljobs";

const Browse = () => {
  UseGetAlljobs();
  const dispatch = useDispatch();
  const { allJobs } = useSelector((store) => store.job);

  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 mt-5 px-3">
        <h1 className="font-bold text-lg">
          Search Results ({allJobs.length}){" "}
        </h1>
        <div className="flex items-center justify-center flex-wrap mx-auto mt-3 md:grid grid-cols-3 gap-4">
          {allJobs.map((job) => {
            return <JobMainCard key={job._id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;

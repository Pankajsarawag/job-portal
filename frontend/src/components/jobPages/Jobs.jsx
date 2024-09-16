import { useSelector } from "react-redux";
import Navbar from "../shared/Navbar";
import FilterCard from "./FilterCard";
import JobMainCard from "./JobMainCard";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../footer/Footer";

const Jobs = () => {
  // const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const { allJobs, searchQuery } = useSelector((store) => store.job);
  const [filterJObs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchQuery?.length > 0) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });

      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
      console.log(searchQuery);
    }
  }, [allJobs, searchQuery]);
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
                {filterJObs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job._id}
                  >
                    <JobMainCard job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* jobs Listing */}
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;

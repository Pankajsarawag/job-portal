import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const UseGetAlljobs = () => {
  const dispatch = useDispatch();
  const { searchQuery } = useSelector((store) => store.job);
  console.log(searchQuery);

  useEffect(() => {
    const fethAllJobs = async () => {
      try {
        const res = await axios.get(
          `${JOB_API_END_POINT}?keyword=${searchQuery}`,
          { withCredentials: true }
        );

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
          console.log(res.data.jobs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fethAllJobs();
  }, []);
};

export default UseGetAlljobs;

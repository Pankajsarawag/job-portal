import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const UseGetAlljobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fethAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/`);

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fethAllJobs();
  }, [dispatch]);
};

export default UseGetAlljobs;

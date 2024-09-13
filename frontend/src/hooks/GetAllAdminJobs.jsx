import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constants";
import { setAdminJobs } from "@/redux/jobSlice";

const GetAllAdminJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAdminJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/posts`, {
          withCredentials: true,
        });
        if (res.data.success) dispatch(setAdminJobs(res.data.jobs));
        console.log(res.data.jobs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAdminJobs();
  }, []);
};

export default GetAllAdminJobs;

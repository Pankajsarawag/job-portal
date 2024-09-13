import { setAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const GetAllAppliedJob = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJob = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/applied`, {
          withCredentials: true,
        });

        if (res.data.success) dispatch(setAppliedJobs(res.data.applications));
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppliedJob();
  }, []);
};

export default GetAllAppliedJob;

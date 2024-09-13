import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constants";
import { setSingleCompany } from "@/redux/companySlice";

const GetJobById = (jobId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) dispatch(setSingleCompany(res.data.company));
        console.log(res.data.job);
        console.log(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleCompany();
  }, [jobId, dispatch]);
};

export default GetJobById;

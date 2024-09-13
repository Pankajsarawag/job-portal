import { useEffect } from "react";
import Navbar from "../shared/Navbar";
import ApplicantsTable from "./ApplicantsTable";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constants";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setApplicants } from "@/redux/applicationSlice";

const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);
  // console.log(applicants);

  //fetch applicants applied for the job
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_END_POINT}/applicants/${params.id}`,
          { withCredentials: true }
        );

        if (res.data.success) {
          // console.log(res.data.jobApplicants);
          dispatch(setApplicants(res.data.jobApplicants));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchApplicants();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-xl my-5">
          Applicants ({applicants?.length})
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};

export default Applicants;

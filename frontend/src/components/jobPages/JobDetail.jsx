/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import {
  APPLICATION_API_END_POINT,
  JOB_API_END_POINT,
} from "@/utils/constants";
import { setjobDetail } from "@/redux/jobSlice";
import { toast } from "sonner";

const JobDetail = () => {
  const params = useParams();
  const jobId = params.id;
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const { jobDetail } = useSelector((store) => store.job);

  const [isApplied, setApplied] = useState(false);

  //handle job apply
  const handleApplyJob = async () => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        // dispatch(setjobDetail(res.data.job));
        setApplied(true);
        // const updateJobDetail = {
        //   ...jobDetail,
        //   applications: [...jobDetail.applications, { applicant: user?._id }],
        // };
        dispatch(setjobDetail(res.data.job)); //help to real time ui update
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  //fecth jobDetail
  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        //get job details
        const res = await axios.get(`${JOB_API_END_POINT}/${jobId}`, {
          withCredentials: true,
        });

        if (res.data.success) {
          //set details
          dispatch(setjobDetail(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobDetail();
  }, [jobId, dispatch]);

  // update if user has already applied
  useEffect(() => {
    if (jobDetail && user) {
      const hasApplied = jobDetail.applications.filter(
        (appl) => appl.applicant === user._id
      );

      console.log(hasApplied.length);

      if (hasApplied.length > 0) setApplied(true);
    }
  }, [jobDetail, user]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-bold text-xl">{jobDetail?.title}</h1>
            <div className="py-2 flex gap-4 items-center justify-start">
              <Badge
                variant="outline"
                className="h-8 text-[#6f5c92] cursor-pointer 
            hover:text-[#452a74] font-bold"
              >
                {jobDetail?.position} Positions
              </Badge>
              <Badge
                variant="ghost"
                className="h-8 text-[#92a143] cursor-pointer   hover:text-[#5b681d] font-bold "
              >
                Full Time
              </Badge>
              <Badge
                variant="outline"
                className="h-8 text-[#1399a7] cursor-pointer  font-bold hover:text-[#05808e]"
              >
                45LPA
              </Badge>
            </div>
          </div>

          <Button
            onClick={handleApplyJob}
            className={`rounded-lg ${
              isApplied
                ? "bg-[#1399a7] hover:bg-[#1399a7] cursor-not-allowed"
                : "bg-[#0cabba] hover:bg-[#1399a7]"
            } `}
            disabled={isApplied}
          >
            {isApplied ? "Applied" : "Apply Now"}
          </Button>
        </div>
        <h1 className="font-md text-lg border-b-2 border-b-gray-300">
          Job Details
        </h1>
        <div className="my-4">
          <h1 className="font-bold">
            Role&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">
              {jobDetail?.title}
            </span>
          </h1>
          <h1 className="font-bold">
            Location&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">
              {jobDetail?.location}
            </span>
          </h1>
          <h1 className="font-bold">
            Description&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">
              {jobDetail?.description}
            </span>
          </h1>
          <h1 className="font-bold">
            Experience&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">
              {jobDetail?.experienceLevel} yrs
            </span>
          </h1>
          <h1 className="font-bold">
            Salary&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">12 LPA</span>
          </h1>
          <h1 className="font-bold">
            Total Applicants&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">
              {jobDetail?.applications.length}
            </span>
          </h1>
          <h1 className="font-bold">
            Posted Date&nbsp;:&nbsp;
            <span className="font-normal text-gray-800">
              {jobDetail?.createdAt.split("T")[0]}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;

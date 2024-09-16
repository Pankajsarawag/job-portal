import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AdminJobsTable from "./AdminJobsTable";
import { setSearchJobs } from "@/redux/jobSlice";
import GetAllAdminJobs from "@/hooks/GetAllAdminJobs";
import Footer from "../footer/Footer";

const AdminJobs = () => {
  GetAllAdminJobs();

  const [input, setInput] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    dispatch(setSearchJobs(input));
  }, [input]);
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10 ">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="filter by name,role"
            onChange={handleChange}
            value={input}
          />
          <Button className="" onClick={() => navigate("/admin/postJob")}>
            Post New Job
          </Button>
        </div>
        <AdminJobsTable />
      </div>
      <Footer />
    </div>
  );
};

export default AdminJobs;

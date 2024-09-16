import { Label } from "@radix-ui/react-label";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constants";
import { useState } from "react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";
import Footer from "../footer/Footer";

const CreateCompany = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();

  //register company
  const registerCompany = async () => {
    try {
      console.log("register");
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        toast.success(res.data.message);
        dispatch(setSingleCompany(res.data.company));
        const companyId = res?.data?.company._id;
        navigate(`/admin/companies/${companyId}`);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name ? You can change this
            later.
          </p>
        </div>
        <Label>Company Name</Label>

        <Input
          type="text"
          className="my-2"
          value={companyName}
          name="companyName"
          placeholder="company name"
          onChange={(e) => {
            console.log(e.target.value);
            setCompanyName(e.target.value);
            console.log("set name");
          }}
        />
        <div className="flex item-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onClick={registerCompany}>Continue</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateCompany;

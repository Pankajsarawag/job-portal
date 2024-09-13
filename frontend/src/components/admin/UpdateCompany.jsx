import { ArrowLeft, Loader2 } from "lucide-react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { Label } from "@radix-ui/react-label";
import { COMPANY_API_END_POINT } from "@/utils/constants";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import GetCompanyById from "@/hooks/GetCompanyById";

const UpdateCompany = () => {
  const params = useParams();
  GetCompanyById(params.id);
  const { singleCompany } = useSelector((store) => store.company);
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  //handle text input fields
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  //handle file inputs
  const handleFile = (e) => {
    const files = e.target.files; // Get the FileList object

    if (files.length > 0) {
      const file = files[0]; // Access the first file
      setInputs({
        ...inputs,
        file: file, // Add the file object to the state
      });
    } else {
      alert("No file selected");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(inputs);

    try {
      //patch request
      const res = await axios.patch(
        `${COMPANY_API_END_POINT}/${params.id}`,
        inputs,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(singleCompany);
    setInputs({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto my-10">
        <div className="flex gap-4 items-center p-8 justify-start">
          <Button
            variant="outline"
            className="flex items-center gap-2 text-gray-500 font-semibold"
            onClick={() => navigate("/admin/companies")}
          >
            <ArrowLeft />
            <span>Back</span>
          </Button>
          <h1 className="font-bold">Company Setup</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 my-3">
            <div>
              <Label>Company Name</Label>
              <Input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={inputs.description}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 my-3">
            <div>
              <Label>Website</Label>
              <Input
                type="text"
                name="website"
                value={inputs.website}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={inputs.location}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 my-3">
            <div className="">
              <Label>Logo</Label>
              <Input
                type="file"
                accept="image/*"
                value={inputs.logo}
                onChange={handleFile}
              />
            </div>
          </div>
          {loading ? (
            <Button type="submit" className="w-full mt-8">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> updating
            </Button>
          ) : (
            <Button type="submit" className="w-full mt-8">
              Update
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdateCompany;

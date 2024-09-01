/* eslint-disable no-unused-vars */
import Navbar from "../shared/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constants";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { Loader2 } from "lucide-react";

const Signup = () => {
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "user",
    phoneNumber: 0,
    file: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //handle input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setformData({
      ...formData,
      [name]: value,
    });
  };

  //handle filed uploads
  const handleFile = (e) => {
    setformData({ ...formData, file: e.target.files?.[0] });
  };

  //handle forma submitted
  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(setLoading(true))
    setLoading(true);
    // console.log(formData);

    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      // console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold tex-xl mb-5">Sign up</h1>
          <div className="my-2">
            <Label>Name</Label>
            <Input
              type="text"
              value={formData.fullname}
              placeholder="name"
              name="fullname"
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              value={formData.email}
              placeholder="xyz@gmail.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="number"
              value={formData.phoneNumber}
              name="phoneNumber"
              placeholder="0000000"
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={formData.password}
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between font-medium">
            <RadioGroup
              className="flex items-center gap-4"
              onChange={handleChange}
            >
              <div className="flex  items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={formData.role === "recruiter"}
                  className="cursor-pointer"
                  id="recruiter"
                />
                <Label htmlFor="role">Recruiter</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  checked={formData.role === "user"}
                  value="user"
                  id="user"
                  className="cursor-pointer"
                />
                <Label htmlFor="role">User</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center gap-4">
            <Label>Profile</Label>
            <Input
              accept="image/*"
              type="file"
              className="cursor-pointer"
              name="file"
              onChange={handleFile}
            ></Input>
          </div>
          {loading ? (
            <Button className="w-full m-3">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <>
              <Button type="submit" className="w-full my-3">
                Signup
              </Button>
              <span className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500">
                  Login
                </Link>
              </span>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;

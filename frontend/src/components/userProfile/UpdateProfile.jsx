/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import store from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constants";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

const UpdateProfile = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  //handle form input
  const [inputs, setInputs] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.Skill?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
  });

  //handle change in inputs
  const handleOnChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  //handle file upload
  const handleOnFileUpload = (e) => {
    const files = e.target.files; // Get the FileList object

    if (files.length > 0) {
      const file = files[0]; // Access the first file
      if (file.type === "application/pdf") {
        console.log("PDF uploaded:", file.name); // Logs 'Resume.pdf'
        console.log("File size:", file.size); // Logs file size in bytes
        console.log("Last modified date:", file.lastModifiedDate); // Logs the last modified date

        setInputs({
          ...inputs,
          file: file, // Add the file object to the state
        });
      } else {
        alert("Please select a valid PDF file");
      }
    } else {
      alert("No file selected");
    }
  };

  // handle when form is submitted
  const handleSubmit = async (e) => {
    const formData = new FormData();

    e.preventDefault();
    console.log(inputs);
    setLoading(true);

    try {
      //put request
      const res = await axios.put(
        `${USER_API_END_POINT}/profile/update`,
        inputs,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      //close the dialog
      setOpen(false);
      //data successfully updated
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="sm:max-w-[425px]"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname" className="text-right font-semibold">
                  Name
                </Label>
                <Input
                  onChange={handleOnChange}
                  name="fullname"
                  id="fullname"
                  className="col-span-3"
                  value={inputs.fullname}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right font-semibold">
                  Email
                </Label>
                <Input
                  onChange={handleOnChange}
                  value={inputs.email}
                  name="email"
                  id="email"
                  className="col-span-3"
                  type="email"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="phoneNumber"
                  className="text-right font-semibold"
                >
                  Phone Number
                </Label>
                <Input
                  onChange={handleOnChange}
                  value={inputs.phoneNumber}
                  name="phoneNumber"
                  className="col-span-3"
                  id="PhoneNumber"
                  type="number"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right font-semibold">
                  Bio
                </Label>
                <Input
                  onChange={handleOnChange}
                  name="bio"
                  id="bio"
                  value={inputs.bio}
                  className="col-span-3"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right font-semibold">
                  Skills
                </Label>
                <Input
                  onChange={handleOnChange}
                  id="skills"
                  name="skills"
                  className="col-span-3"
                  value={inputs.skills}
                  type="text"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right font-semibold">
                  Resume
                </Label>
                <Input
                  id="file"
                  name="file"
                  className="col-span-3"
                  type="file"
                  accept="application/pdf"
                  onChange={handleOnFileUpload}
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full m-3">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              ) : (
                <Button type="submit" className="w-full my-3">
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfile;

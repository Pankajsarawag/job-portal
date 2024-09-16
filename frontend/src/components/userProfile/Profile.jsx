import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";
import { useSelector } from "react-redux";
import GetAllAppliedJob from "@/hooks/GetAllAppliedJob";
import Footer from "../footer/Footer";

const Profile = () => {
  GetAllAppliedJob();
  const { user } = useSelector((store) => store.auth);

  const [open, setOpen] = useState(false);
  const isResume = true;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 px-8 py-4">
        <div className="flex justify-between">
          <div className="flex gap-5 mx-5">
            <Avatar className="w-10 h-10 mt-2 border border-gray">
              <AvatarImage src={user.profile.profilePhoto} alt="profile img" />
            </Avatar>

            <div className="flex justify-start items-start flex-col">
              <h1 className="font-medium text-xl">{user.fullname}</h1>
              <p>{user.profile.bio}</p>
            </div>
          </div>
          <Button
            className="text-right bg-[#eff2f2] "
            variant="outline"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Pen />
          </Button>
        </div>
        <div className="mt-8">
          <div className="flex gap-3 my-2">
            <Mail />
            <span>{user.email}</span>
          </div>
          <div className="flex gap-3">
            <Contact />
            <span>{user.phoneNumber}</span>
          </div>
        </div>
        <div className="my-4">
          <h1 className="font-semibold mb-2">Skills</h1>
          <div className="flex items-center gap-1">
            {user.profile.Skill.length < 0 ? (
              <span>NaN</span>
            ) : (
              user.profile.Skill.map((item, ind) => (
                <Badge
                  key={ind}
                  className="h-6 text-sm text-black pb-1 bg-[#43bcc9] hover:bg-[#1399a7]"
                >
                  {item}
                </Badge>
              ))
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href={user.profile.resume}
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              {user.profile.resumeOriginalName}
            </a>
          ) : (
            <span>NAN</span>
          )}
        </div>
      </div>

      <div className=" max-w-7xl mx-auto bg-white my-5 rounded-2xl px-8">
        <h1 className="font-bold mt-5">Applied Jobs</h1>
        {/* application table */}
        <AppliedJobTable />
      </div>
      <UpdateProfile open={open} setOpen={setOpen} />
      <Footer />
    </>
  );
};

export default Profile;

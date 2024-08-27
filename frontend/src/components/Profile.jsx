import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Navbar from "./shared/Navbar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import { useState } from "react";
import UpdateProfile from "./UpdateProfile";
const Profile = () => {
  const [open, setOpen] = useState(false);
  const skills = ["html", "css", "Javascript", "reactJa"];
  const isResume = false;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 px-8 py-4">
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Avatar className="w-24 h-24 mt-1">
              <AvatarImage
                src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
                alt="profile img"
              />
            </Avatar>

            <div className="flex justify-start items-start flex-col">
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                perferendis itaque ut, assumenda commodi molestias quibusdam
                iusto labore vero dolorum?
              </p>
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
        <div className="my-1 ">
          <div className="flex gap-3 my-2">
            <Mail />
            <span>xyz@gmail.com</span>
          </div>
          <div className="flex gap-3">
            <Contact />
            <span>432425425</span>
          </div>
        </div>
        <div className="my-2">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length < 0 ? (
              <span>NaN</span>
            ) : (
              skills.map((item, ind) => <Badge key={ind}>{item}</Badge>)
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold"> Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href=""
              className="text-blue-500 w-full hover:underline cursor-pointer"
            />
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>

      <div className=" max-w-7xl mx-auto bg-white my-5 rounded-2xl px-8">
        <h1 className="font-bold mt-5">Applied Jobs</h1>
        {/* application table */}
        <AppliedJobTable />
      </div>
      <UpdateProfile open={open} setOpen={setOpen} />
    </>
  );
};

export default Profile;

/* eslint-disable no-unused-vars */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constants";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white ">
      <div className="shadow-md px-12 flex items-center justify-between mx-auto max-w-9xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#1399a7]">Portal</span>
          </h1>
        </div>

        <div className="flex gap-4">
          <ul className="txt-1xl font-bold flex items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li className="p-2 hover:bg-grey-200 hover:text-[#0cabba] cursor-pointer">
                  <Link to="/admin/companies">Companies</Link>
                </li>

                <li className="p-2 hover:bg-grey-200 hover:text-[#0cabba] cursor-pointer">
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className="p-2 hover:bg-grey-200 hover:text-[#0cabba] cursor-pointer">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="p-2 hover:bg-grey-200 hover:text-[#0cabba] cursor-pointer">
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className="p-2 hover:bg-grey-200 hover:text-[#0cabba] cursor-pointer">
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!user && (
            <div className="flex  items-center gap-4">
              <Link to={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>

              <Link to={"/signup"}>
                <Button className="bg-[#0cabba] hover:bg-[#1399a7] text-black">
                  Signup
                </Button>
              </Link>
            </div>
          )}
          {user && (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src={user.profile.profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-60 m-2 bg-white shadow-md ">
                <div>
                  <div className="flex gap-4  py-4 px-4 ">
                    <Avatar>
                      <AvatarImage
                        src={user.profile.profilePhoto}
                        alt="@shadow"
                      ></AvatarImage>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{user.fullname}</h4>
                      <p className="text-muted-foreground font-medium">
                        {user.profile.bio}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start text-gray-600 gap-0 mx-4">
                    {user && user.role === "user" && (
                      <div className="flex w-fit items-center gap-1 cursor-pointer">
                        <User2 />

                        <Button variant="link">
                          <Link to={"/profile"}>view profile</Link>
                        </Button>
                      </div>
                    )}

                    <div className="flex w-fit items-center gap-1 cursor-pointer">
                      <LogOut />
                      <Button variant="link" onClick={logoutHandler}>
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* eslint-disable no-unused-vars */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { LogOut, User2 } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(false);

  return (
    <div className="bg-white ">
      <div className="shadow-md px-12 flex items-center justify-between mx-auto max-w-9xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        <div className="flex gap-4">
          <ul className="txt-1xl font-bold flex items-center gap-5">
            <li className="p-2 hover:bg-grey-200 hover:text-blue-600 cursor-pointer">
              Home
            </li>
            <li className="p-2 hover:bg-grey-200 hover:text-blue-600 cursor-pointer">
              Jobs
            </li>
            <li className="p-2 hover:bg-grey-200 hover:text-blue-600 cursor-pointer">
              Browse
            </li>
          </ul>
          {!user && (
            <div className="flex  items-center gap-4">
              <Link to={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>

              <Link to={"/signup"}>
                <Button className="bg-[#2563eb] hover:bg-[#0d4fdf]">
                  Signup
                </Button>
              </Link>
            </div>
          )}
          {user && (
            <Popover>
              <PopoverTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-60 m-2 bg-white-800  shadow-md ">
                <div>
                  <div className="flex gap-4  py-4 px-4 ">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadow"
                      ></AvatarImage>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Jaya MERN Stack</h4>
                      <p className="text-muted-foreground font-medium">
                        Lorem ipsum dolor
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start text-gray-600 gap-0 mx-4">
                    <div className="flex w-fit items-center gap-1 cursor-pointer">
                      <User2 />
                      <Button variant="link">view profile</Button>
                    </div>
                    <div className="flex w-fit items-center gap-1 cursor-pointer">
                      <LogOut />
                      <Button variant="link">logout</Button>
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

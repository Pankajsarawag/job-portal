/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";

const UpdateProfile = ({ open, setOpen }) => {
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
          <form action="">
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right font-semibold">
                  Name
                </Label>
                <Input name="name" className="col-span-3" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right font-semibold">
                  Email
                </Label>
                <Input name="email" className="col-span-3" type="email" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="phoneNumber"
                  className="text-right font-semibold"
                >
                  Phone Number
                </Label>
                <Input
                  name="phoneNumber"
                  className="col-span-3"
                  type="number"
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right font-semibold">
                  Bio
                </Label>
                <Input name="bio" className="col-span-3" type="text" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right font-semibold">
                  Skills
                </Label>
                <Input name="skills" className="col-span-3" type="text" />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right font-semibold">
                  Resume
                </Label>
                <Input
                  name="file"
                  className="col-span-3"
                  type="file"
                  accept="application/pdf"
                />
              </div>
            </div>
            <DialogFooter></DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateProfile;

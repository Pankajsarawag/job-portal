import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Edit2, MoreHorizontal } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CompaniesTable = () => {
  const { companies, searchCompany } = useSelector((store) => store.company);
  const navigate = useNavigate();
  const [filterCompany, setFilterCompany] = useState(companies);
  useEffect(() => {
    const filteredCompany =
      companies.length >= 0 &&
      companies.filter((company) => {
        if (!searchCompany) return true;

        return company?.name
          ?.toLowerCase()
          .includes(searchCompany.toLowerCase());
      });

    setFilterCompany(filteredCompany);
  }, [companies, searchCompany]);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany &&
            filterCompany.map((company) => {
              return (
                <TableRow key={company._id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage
                        src={company.logo}
                        className="w-8 h-8"
                      ></AvatarImage>
                    </Avatar>
                  </TableCell>
                  <TableCell>{company?.name}</TableCell>
                  <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-30">
                        <div
                          className="flex items-center gap-2 w-fit cursor-pointer"
                          onClick={() =>
                            navigate(`/admin/companies/${company._id}`)
                          }
                        >
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;

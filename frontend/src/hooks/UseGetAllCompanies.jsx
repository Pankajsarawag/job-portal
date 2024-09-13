import { useDispatch } from "react-redux";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constants";

import { useEffect } from "react";
import { setCompanies } from "@/redux/companySlice";
const UseGetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/`, {
          withCredentials: true,
        });
        if (res.data.success) dispatch(setCompanies(res.data.companies));
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompanies();
  }, []);
};

export default UseGetAllCompanies;

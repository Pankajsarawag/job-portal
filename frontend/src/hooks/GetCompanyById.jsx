import { COMPANY_API_END_POINT } from "@/utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setSingleCompany } from "@/redux/companySlice";

const GetCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/${companyId}`, {
          withCredentials: true,
        });
        if (res.data.success) dispatch(setSingleCompany(res.data.company));
        console.log(res.data.company);
        console.log(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleCompany();
  }, [companyId, dispatch]);
};

export default GetCompanyById;

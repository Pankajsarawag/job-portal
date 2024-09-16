import Navbar from "../shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import JobSection from "./JobSection";
import Footer from "../footer/Footer";
import UseGetAlljobs from "@/hooks/UseGetAlljobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { user } = useSelector((store) => store.auth);
  UseGetAlljobs();

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") navigate("/admin/companies");
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mx-10 pb-20">
        <HeroSection />
        <CategoryCarousel />
        <JobSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

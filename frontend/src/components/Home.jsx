import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import JobSection from "./JobSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10">
        <HeroSection />
        <CategoryCarousel />
        <JobSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

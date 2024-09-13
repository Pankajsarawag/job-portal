import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "@/redux/jobSlice";

const CategoryCarousel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = (query) => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };

  const category = [
    "Frontend Developer",
    "Backend Developer",
    "Date Science",
    "Graphic Designer",
    "FullStack Developer",
    "Java Devloper",
  ];

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, ind) => (
            <CarouselItem
              className="md:basis-1/2 lg-basis-1/3 flex items-center justify-center"
              key={ind}
            >
              <Button
                onClick={() => searchJobHandler(cat)}
                variant="outline"
                className=" rounded-full font-semibold"
              >
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;

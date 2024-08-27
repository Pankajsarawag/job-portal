import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,

  //   CarouselNext,
  //   CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

const CategoryCarousel = () => {
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
              <Button variant="outline" className=" rounded-full font-semibold">
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

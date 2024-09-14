import { RadioGroup } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
const FilterCard = () => {
  const filterData = [
    {
      filterType: "Location",
      list: ["Delhi NCR", "Banglore", "Hyderabad", "pune", "Mumbai", "Remote"],
    },

    {
      filterType: "Industry",
      list: [
        "Frontend Developer",
        "Backend Developer",
        "FullStack Developer",
        "DataScience",
      ],
    },

    {
      filterType: "Salary",
      list: ["0-10k", "10k-30k", "40k-1lakh", "1Lakh-5Lakh", "5Lakh-20Lakh"],
    },
    {
      filterType: "Job Type",
      list: ["Full-time", "Part-time", "Internship"],
    },
  ];
  return (
    <div className="pl-5 bg-white  rounded-md">
      <h1 className="flex justify-start items-center font-bold text-lg">
        Filter Jobs
      </h1>
      <hr className="mt-3" />

      <div>
        <RadioGroup>
          {filterData.map((data, ind) => (
            <div key={ind}>
              <h1 className="font-bold mt-3">{data.filterType}</h1>
              {data.list.map((filter, ind) => (
                <div className="flex items-center space-x-2" key={ind}>
                  <input
                    type="radio"
                    name={data.filterType}
                    value={filter}
                    id="dk"
                  />
                  {/* <RadioGroupItem value={filter} /> */}
                  <Label
                    htmlFor={data.filterType}
                    className="text-sm font-semibold"
                  >
                    {filter}
                  </Label>
                </div>
              ))}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};

export default FilterCard;

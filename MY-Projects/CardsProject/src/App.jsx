import Card from "./components/card";
const App = () => {
  const arr = [
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlTbFMF1PU4EOOmAc7mJxpGH4BOMFjNXfZQ&s",
      company_name: "Quantum AI",
      specialization: "Machine Learning & Neural Networks",
      location: {
        city: "San Francisco",
        country: "USA",
      },
      salary_per_hour: "145$/h",
      time_updated: "4 days ago",
    },
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNM0vktSb8boTsIfga-aHzrzqVlGnEzewXPA&s",
      company_name: "Fintech Flow",
      specialization: "Blockchain Architecture",
      location: {
        city: "London",
        country: "UK",
      },
      salary_per_hour: "130$/h",
      time_updated: "3 days ago",
    },
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dGaCoBMW2xePNMvfJEiN_zv6SV8foadyXw&s",
      company_name: "GreenGrid Energy",
      specialization: "Renewable Energy Systems",
      location: {
        city: "Berlin",
        country: "Germany",
      },
      salary_per_hour: "115$/h",
      time_updated: "8 days ago",
    },
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREgcsctNTrseJZMWU-bUP5Z4jtmdQN724jrg&s",
      company_name: "Nova Medical",
      specialization: "Bioinformatics",
      location: {
        city: "Toronto",
        country: "Canada",
      },
      salary_per_hour: "125$/h",
      time_updated: "8 Hours ago",
    },
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5y_wpNewaH05FqrDCrSR5P0t2pOVqmtjwg&s",
      company_name: "Stellar Space Ops",
      specialization: "Aerospace Engineering",
      location: {
        city: "Austin",
        country: "USA",
      },
      salary_per_hour: "160$/h",
      time_updated: "4 days ago",
    },
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZbLt1u74A0r4TRO1TZOQxYbPQKbiiQAq7A&s",
      company_name: "CyberShield",
      specialization: "Ethical Hacking & Security",
      location: {
        city: "Sydney",
        country: "Australia",
      },
      salary_per_hour: "140$/h",
      time_updated: "14 days ago",
    },
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24wZqtWPbCE2A32ncJdLM-lTrgUyN_InneA&s",
      company_name: "Pixel Perfect",
      specialization: "Game Design & VR",
      location: {
        city: "Tokyo",
        country: "Japan",
      },
      salary_per_hour: "110$/h",
      time_updated: "2 days ago",
    },
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OdBIjGZViqRqUdV5FAF3HoGXDlc1g074cA&s",
      company_name: "Urban Build",
      specialization: "Smart City Infrastructure",
      location: {
        city: "Singapore",
        country: "Singapore",
      },
      salary_per_hour: "135$/h",
      time_updated: "12 hours ago",
    },
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdAPjKunO7amRDcsIPlak_rwtJ5o3n0H5j3Q&s",
      company_name: "Data Dynasty",
      specialization: "Big Data Analytics",
      location: {
        city: "Bangalore",
        country: "India",
      },
      salary_per_hour: "95$/h",
      time_updated: "40 days ago",
    },
    {
      company_logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8iqNkuklYBUH_7aYptJh5WNbzTapypCCOg&s",
      company_name: "OceanTech",
      specialization: "Marine Robotics",
      location: {
        city: "Oslo",
        country: "Norway",
      },
      salary_per_hour: "150$/h",
      time_updated: "4 days ago",
    },
  ];

  return (
    <>
      <div className="Parent">
        {arr.map(function (elem, idx) {
          return (
            <Card
              key={idx}
              company={elem.company_name}
              logo={elem.company_logo}
              specialization={elem.specialization}
              time={elem.time_updated}
              salery={elem.salary_per_hour}
              city={elem.location.city}
              country={elem.location.country}
            ></Card>
          );
        })}
      </div>
    </>
  );
};
export default App;

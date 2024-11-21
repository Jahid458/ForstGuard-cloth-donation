
import {  FaTshirt, FaUsers, FaHandHoldingHeart } from "react-icons/fa";

const Stats = () => {


  const stats = [
    {
      id: 1,
      title: "Donors",
      value: "10,000+",
      icon: <FaHandHoldingHeart size={60} className="text-primary" />,
    },
    {
      id: 2,
      title: "Clothes Collected",
      value: "30,000+",
      icon: <FaTshirt size={60} className="text-secondary" />
    },
    {
      id: 3,
      title: "Families Impacted",
      value: "25,000+",
      icon: <FaUsers size={60} className="text-success" />,
    },
  ];

  return (
    <div className="bg-base-100 py-12 px-6">
         <h2 className="lg:text-4xl text-xl font-bold text-center mb-6">Our Impact at a glance</h2>
      <div className="container mx-auto  text-white shadow-lg py-10 px-10 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="stat text-center p-8 md:px-5  bg-primary-focus bg-gray-300 rounded-lg shadow-md"
            >
              <div className="flex justify-center mb-2  ">{stat.icon}</div>
              <div className="stat-value text-3xl font-bold text-black">{stat.value}</div>
              <div className="stat-title text-2xl md:text-xl md:text-center">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;

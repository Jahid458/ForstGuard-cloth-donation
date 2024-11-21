import { FaRecycle, FaTruck, FaTshirt, FaUsers } from "react-icons/fa";
import "animate.css";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Clothing Pickup",
      description:
        "Schedule a convenient pickup, and we'll collect your gently used clothes from your doorstep.",
      icon: <FaTruck size={60} className="text-primary " />,
    },
    {
      id: 2,
      title: "Drop-off Locations",
      description:
        "Find our donation centers near you to drop off your clothing donations easily.",
      icon: <FaTshirt size={60} className="text-secondary" />,
    },
    {
      id: 3,
      title: "Recycling Services",
      description:
        "We recycle damaged or unusable clothing to promote sustainable practices.",
      icon: <FaRecycle size={60} className="text-accent" />,
    },
    {
      id: 4,
      title: "Community Distribution",
      description:
        "We ensure that donated clothes reach underprivileged communities who need them the most.",
      icon: <FaUsers size={60} className="text-success" />,
    },
  ];

  return <div className="bg-base-100 py-12 px-6">
  <h2 className="lg:text-4xl text-xl font-bold text-center mb-6">Our Services</h2>
  <p className="text-center text-gray-600 mb-10">
    Explore how we make clothing donation easy, impactful, and sustainable.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {services.map((service) => (
      <div
        key={service.id}
        className="card bg-white shadow-lg p-6 text-center hover:shadow-2xl transition-shadow"
      >
        <div className="flex justify-center mb-4 animate__animated animate__fadeInLeft">{service.icon}</div>
        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-700">{service.description}</p>
      </div>
    ))}
  </div>
</div>;
};

export default Services;

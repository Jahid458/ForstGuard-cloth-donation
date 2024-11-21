import { FaBullhorn, FaEnvelope, FaHandsHelping, FaTshirt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Help = () => {
  return (
    <section className="bg-base-200 py-12 px-6 mb-8">
    <h2 className="text-4xl font-bold text-center mb-6">How You Can Help?</h2>
    <p className="text-center text-gray-800 mb-10">
      There are many ways you can make a difference this winter. Join us to
      help those in need.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div className="card bg-sky-500 shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
        <FaTshirt size={60} className="text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Donate Clothes</h3>
        <p className="text-gray-700">
          Contribute your gently used or new winter clothing to keep someone
          warm this season.
        </p>
        <button className="btn btn-primary mt-4 text-xl">Donate Now</button>
      </div>
      <div className="card bg-sky-500 shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
        <FaHandsHelping size={60} className="text-secondary mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Volunteer</h3>
        <p className="text-gray-700">
          Join our team of volunteers to help collect, sort, and distribute
          clothing to those in need.
        </p>

        <button className="btn btn-secondary mt-4 text-xl">Sign Up</button>
      </div>
      <div className="card bg-sky-500 shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
        <FaBullhorn size={60} className="text-accent mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">Spread Awareness</h3>
        <p className="text-gray-700">
          Share our mission on social media and inspire others to contribute
          to the cause.
        </p>
        <button className="btn btn-accent mt-4 text-xl">Share Now</button>
      </div>
    </div>

    <div className="bg-sky-500 text-white p-8 rounded-lg ">
      <h3 className="text-3xl font-bold text-center mb-4">
        Need Assistance?
      </h3>
      <p className="text-center mb-6">
        If you have any questions or need help, feel free to reach out to us.
      </p>
      <div className="flex justify-center space-x-8">
        <div className="text-center">
          <FaEnvelope size={32} className="mx-auto mb-2" />
          <p>Email: support@frostguardplatform.com</p>
        </div>
        <div className="text-center">
          <FaBullhorn size={32} className="mx-auto mb-2" />
          <p>Phone: +880134522961</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Help;
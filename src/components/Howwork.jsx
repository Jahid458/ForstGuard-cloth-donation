import { FaTshirt, FaMapMarkerAlt, FaSmile } from "react-icons/fa";
const Howwork = () => {
  return (
    <div className="bg-base-100 py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-6">How IT Works</h2>
      <p className="text-center text-gray-600 mb-10 text-2xl font-bold">
        Donating clothes is simple and impactful. Follow these three easy steps!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Step 1 */}
        <div className="card bg-primary text-white shadow-xl p-6 w-80 text-center">
          <div className="flex justify-center mb-4">
            <FaTshirt size={60} />
          </div>
          <h3 className="text-4xl font-semibold mb-2">Step 1</h3>
          <p>Gather gently used clothes that you no longer need.</p>
        </div>

        {/* Step 2 */}
        <div className="card bg-secondary text-white shadow-xl p-6 w-80 text-center">
          <div className="flex justify-center mb-4">
            <FaMapMarkerAlt size={60} />
          </div>
          <h3 className="text-4xl font-semibold mb-2">Step 2</h3>
          <p>Drop them off at our locations or schedule a pickup.</p>
        </div>

        {/* Step 3 */}
        <div className="card bg-accent text-white shadow-xl p-6 w-80 text-center">
          <div className="flex justify-center mb-4">
            <FaSmile size={60} />
          </div>
          <h3 className="text-4xl font-semibold mb-2">Step 3</h3>
          <p>Your donation transforms lives and spreads joy!</p>
        </div>
      </div>
    </div>
  );
};

export default Howwork;
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const DonationDetails = () => {
  const { title, image, description, status, contactInfo, division } =
    useLoaderData();


  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "Blanket", 
    pickLocation: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      itemType: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon");
    
    
    setFormData({
      quantity: "",
      itemType: "Blanket",
      pickLocation: "",
      message: "",
    });
  };

  return (
    <div>
      <div
        className="hero lg:w-full w-[300px] md:w-[750px] mx-auto min-h-screen mt-5 mb-5"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 className="lg:text-6xl text-xl font-bold text-white">
              {title}
            </h1>
            <p className="py-6 lg:text-2xl text-md font-bold text-black">
              {description}
            </p>
            <div>
              <div className="badge badge-secondary">{status}</div>
              <p className="lg:text-3xl text-md font-bold text-white">
                Email: {contactInfo}
              </p>
              <h1 className="lg:text-xl text-md font-bold mt-4 text-white">
                Division: {division}
              </h1>
            </div>
            <br />

            <div className="card mx-auto bg-base-100 w-full lg:max-w-lg shrink-0 shadow-2xl">
              <form name="donation-form" onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Quantity of items</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Quantity of items"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Item Type</span>
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Blanket</span>
                    <input
                      type="radio"
                      name="itemType"
                      value="Blanket"
                      checked={formData.itemType === "Blanket"}
                      onChange={handleRadioChange}
                      className="radio checked:bg-sky-500"
                    />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Jacket</span>
                    <input
                      type="radio"
                      name="itemType"
                      value="Jacket"
                      checked={formData.itemType === "Jacket"}
                      onChange={handleRadioChange}
                      className="radio checked:bg-sky-500"
                    />
                  </label>
                  <label className="label cursor-pointer">
                    <span className="label-text">Sweater</span>
                    <input
                      type="radio"
                      name="itemType"
                      value="Sweater"
                      checked={formData.itemType === "Sweater"}
                      onChange={handleRadioChange}
                      className="radio checked:bg-sky-500"
                    />
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">PickUp Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="PickUp Location"
                    name="pickLocation"
                    value={formData.pickLocation}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Message</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message Here"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submission</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;

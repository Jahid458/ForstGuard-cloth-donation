import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCard = ({ donation }) => {
  
    console.log(donation)
  const {image,title,description,division} = donation;
  //  console.log(image,title,description,division)
  return (
    <div className="card card-compact bg-base-100 lg:w-96 mx-auto w-[380px] md:w-[355px] shadow-xl">
    
      <figure>
        <img
          src={image}
          className="w-full h-[250px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{donation.title}</h2>
        <p className="text-gray-400">{description}</p>
        <h1 className="text-xl">Division:{division}</h1>
        <div className="card-actions justify-center">
          <NavLink to={`/donationdetails/${donation.id}`}>
          <button className="btn btn-primary mt-2">Donate Now</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;

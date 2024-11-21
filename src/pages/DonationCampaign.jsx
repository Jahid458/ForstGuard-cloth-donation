import { useLoaderData } from "react-router-dom";
import DonationCard from "../components/DonationCard";

const DonationCampaign = () => {
  const donation = useLoaderData();
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1  md:grid-cols-2 mt-5 gap-1 md:gap-3 mb-5">
      {
        donation.map(donate => <DonationCard key={donate.id} donation={donate}></DonationCard>)
      }
    </div>
  );
};

export default DonationCampaign;
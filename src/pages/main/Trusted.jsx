import React from "react";

const Trusted = () => {
  return (
    <div className="trusted mb-24">
      <div className="flex justify-center items-center">
        <span className="block pr-5 text-[#b5b6ba] font-[600]">
          Trusted by:
        </span>
        <ul className="flex h-[95px] px-6 justify-center items-center">
          <li className="pr-[60px]">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
              alt="facebook"
            />
          </li>
          <li className="pr-[60px]">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
              alt="Google"
            />
          </li>
          <li className="pr-[60px]">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
              alt="NETFLIX"
            />
          </li>
          <li className="pr-[60px]">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
              alt="P&G"
            />
          </li>
          <li className="pr-[60px]">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
              alt="PayPal"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Trusted;

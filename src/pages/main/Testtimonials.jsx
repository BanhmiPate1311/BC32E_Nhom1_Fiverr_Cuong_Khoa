import React from "react";

const Testtimonials = () => {
  return (
    <div className="sell-proposition">
      <section className="text-gray-600 body-font bg-white">
        <div className="container py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-2/5 md:w-2/5 bg-gray-100 rounded-lg  flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <iframe
              width={"100%"}
              height={280}
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw"
            ></iframe>
          </div>
          <div className="text-content lg:w-3/5 md:w-3/5 md:pr-16 pr-12 pl-16">
            <h5 className="title-font font-[400px] text-xl text-[#74767e] mb-4">
              Kay Kim, Co-Founder
            </h5>
            <blockquote className="text-[30px] leading-[44px] text-[#003912]">
              <i>
                "It's extremely exciting that Fiverr has freelancers from all
                over the world — it broadens the talent pool. One of the best
                things about Fiverr is that while we're sleeping, someone's
                working."
              </i>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testtimonials;

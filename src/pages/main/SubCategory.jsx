import React from "react";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute top-[50%] right-5 cursor-pointer translate-y-[-50%] h-[45px] w-[45px] rounded-full text-center z-[1] before:content-['→'] before:left-2 before:text-[50px] before:text-white before:font-[slick]  before:leading-[1]"
      }
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute top-[50%] left-5 cursor-pointer translate-y-[-50%] h-[45px] w-[45px] rounded-full text-center z-[1] before:content-['←'] before:left-2 before:text-[50px] before:text-white before:font-[slick]  before:leading-[1]"
      }
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const SubCategory = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // initialSlide: 2
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <h2 className="pb-6 text-[32px] leading-[120%] font-bold">
        Popular professional services
      </h2>
      <div className="text-white">
        <Slider {...settings}>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: 'url("./images/logo-design-2x.png")' }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Build your brand
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  Logo Design
                </span>
              </div>
            </div>
          </div>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: 'url("./images/wordpress-2x.png")' }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Customize your site
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  WordPress
                </span>
              </div>
            </div>
          </div>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: 'url("./images/voiceover-2x.png")' }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Share your message
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  Voice Over
                </span>
              </div>
            </div>
          </div>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{
                backgroundImage: 'url("./images/animated-explainer-2x.png")',
              }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Engage your audience
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  Video Explainer
                </span>
              </div>
            </div>
          </div>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: 'url("./images/logo-design-2x.png")' }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Reach more customers
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  Social Media
                </span>
              </div>
            </div>
          </div>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: 'url("./images/seo-2x.png")' }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Unlock growth online
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  SEO
                </span>
              </div>
            </div>
          </div>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: 'url("./images/illustration-2x.png")' }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Color your dreams
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  Illustration
                </span>
              </div>
            </div>
          </div>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: 'url("./images/translation-2x.png")' }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Go global
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  Translation
                </span>
              </div>
            </div>
          </div>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: 'url("./images/data-entry-2x.png")' }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Learn your bussiness
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  Data Entry
                </span>
              </div>
            </div>
          </div>
          <div className="px-[18px]">
            <div
              className="h-[345px] bg-center bg-no-repeat bg-cover rounded-md"
              style={{ backgroundImage: 'url("./images/book-covers-2x.png")' }}
            >
              <div className="p-4">
                <span className="block text-[14px] leading-[20px] font-normal">
                  Showcase your story
                </span>
                <span className="text-[24px] leading-[130%] font-bold">
                  Book Covers
                </span>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SubCategory;

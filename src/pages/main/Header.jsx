import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

const Header = (props) => {
  return (
    <div className="main_header relative ">
      <nav className="py-2 md:py-4 overflow-hidden fixed top-0 w-full z-[1] text-white">
        <div className="container mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center ">
            <NavLink href="#" className="font-bold text-4xl">
              fiverr<span className="text-green-400">.</span>
            </NavLink>
            <button
              className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars" />
            </button>
          </div>
          <div
            className=" font-bold hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <NavLink href="#" className="lg:px-4 md:mx-2">
              Become a Seller
            </NavLink>

            <NavLink
              href="#"
              className="lg:px-4 md:mx-2 text-center border border-transparent"
            >
              Sign In
            </NavLink>
            <NavLink
              href="#"
              className="lg:px-4 md:mx-2 text-center border border-solid border-white rounded hover:bg-green-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Join
            </NavLink>
          </div>
        </div>
      </nav>
      {/* <div className="carousel relative">
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          transitionTime={2}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          swipeable={false}
          // animationHandler={fadeAnimationHandler}
          effect="fade"
        >
          <div
            className="w-full h-[680px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url("./images/andrea.png")' }}
          >
            <div className="container mx-auto flex justify-end items-end h-full text-right text-white">
              <p style={{ paddingBottom: 32 }}>
                Andrea, <b>Fashion Designer</b>
              </p>
            </div>
          </div>
          <div
            className="w-full h-[680px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url("./images/gabriell.png")' }}
          >
            <div className="container mx-auto flex justify-end items-end h-full text-right text-white">
              <p style={{ paddingBottom: 32 }}>
                Gabrielle, <b>Video Editor</b>
              </p>
            </div>
          </div>
          <div
            className="w-full h-[680px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url("./images/moon.png")' }}
          >
            <div className="container mx-auto flex justify-end items-end h-full text-right text-white">
              <p style={{ paddingBottom: 32 }}>
                Moon, <b>Marketing Expert</b>
              </p>
            </div>
          </div>
          <div
            className="w-full h-[680px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url("./images/ritika.png")' }}
          >
            <div className="container mx-auto flex justify-end items-end h-full text-right text-white">
              <p style={{ paddingBottom: 32 }}>
                Ritika, <b>ShoeMaker and Designer</b>
              </p>
            </div>
          </div>
          <div
            className="w-full h-[680px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url("./images/zach.png")' }}
          >
            <div className="container mx-auto flex justify-end items-end h-full text-right text-white">
              <p style={{ paddingBottom: 32 }}>
                Zach, <b>Bar Owner</b>
              </p>
            </div>
          </div>
        </Carousel>

        <div className="container mx-auto absolute top-0 left-0 bottom-0 right-0 flex items-center">
          <div className="max-w-[650px]">
            <h1 className="text-white pb-[24px] text-[48px] leading-[56px] font-bold">
              Find the perfect <i>freelance</i> services for your business
            </h1>
            <div>
              <form className="search-form relative flex">
                <span
                  className="absolute top-[16px] left-[16px]"
                  aria-hidden="true"
                  style={{ width: 16, height: 16 }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.8906 14.6531L12.0969 10.8594C12.025 10.7875 11.9313 10.75 11.8313 10.75H11.4187C12.4031 9.60938 13 8.125 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.125 13 9.60938 12.4031 10.75 11.4187V11.8313C10.75 11.9313 10.7906 12.025 10.8594 12.0969L14.6531 15.8906C14.8 16.0375 15.0375 16.0375 15.1844 15.8906L15.8906 15.1844C16.0375 15.0375 16.0375 14.8 15.8906 14.6531ZM6.5 11.5C3.7375 11.5 1.5 9.2625 1.5 6.5C1.5 3.7375 3.7375 1.5 6.5 1.5C9.2625 1.5 11.5 3.7375 11.5 6.5C11.5 9.2625 9.2625 11.5 6.5 11.5Z" />
                  </svg>
                </span>

                <input
                  className="rounded-l  pl-[44px] mb-0 border-[#dadbdd] flex flex-auto"
                  type="text"
                  autoComplete="off"
                  placeholder='Try "building mobile app"'
                />

                <button className="m-0 rounded-r block text-[16px] h-[48px] font-bold px-6 py-3 submit-button text-white bg-green-400">
                  Search
                </button>
              </form>
            </div>

            <div className="flex text-[14px] leading-[27px] font-[600] text-white pt-6">
              Popular:
              <ul className="flex w-full ml-3">
                <li className="mr-3">
                  <a
                    href="/categories/graphics-design/website-design?source=hplo_search_tag&pos=1&name=website-design"
                    className="leading-6 font-[600] text-white py-[1px] px-3
                    rounded-[40px] border border-solid border-white transition-all duration-200 hover:text-black hover:bg-white"
                  >
                    Website Design
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    href="/categories/programming-tech/wordpress-services?source=hplo_search_tag&pos=2&name=wordpress-services"
                    className="leading-6 font-[600] text-white py-[1px] px-3
                    rounded-[40px] border border-solid border-white transition-all duration-200 hover:text-black hover:bg-white"
                  >
                    WordPress
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    href="/categories/graphics-design/creative-logo-design?source=hplo_search_tag&pos=3&name=creative-logo-design"
                    className="leading-6 font-[600] text-white py-[1px] px-3
                    rounded-[40px] border border-solid border-white transition-all duration-200 hover:text-black hover:bg-white"
                  >
                    Logo Design
                  </a>
                </li>
                <li className="mr-3">
                  <a
                    href="/categories/video-animation/video-editing?source=hplo_search_tag&pos=4&name=video-editing"
                    className="leading-6 font-[600] text-white py-[1px] px-3
                    rounded-[40px] border border-solid border-white transition-all duration-200 hover:text-black hover:bg-white"
                  >
                    Video Editing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="trusted mb-24">
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
      </div> */}
    </div>
  );
};

export default Header;

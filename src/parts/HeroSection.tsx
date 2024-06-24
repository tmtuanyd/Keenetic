import DeviceSearch from "../components/DeviceSearch";

function HeroSection() {
  return (
    <section className="relative z-10 pt-40 pb-16 -mt-24 overflow-hidden bg-gray-lighter dark:bg-bg-color-dark md:pb-16 md:pt-44 xl:pb-28 xl:pt-56 2xl:pb-36 2xl:pt-64">
      <div className="container px-4">
        <h1 className="mb-8 text-3xl font-bold leading-tight text-center text-black lg:mb-12 dark:text-white sm:text-4xl sm:leading-tight md:text-4xl lg:text-5xl xl:text-6xl md:leading-tight">
          Welcome to Keenetic Support
        </h1>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="mb-6 lg:py-4 md:px-8 md:mb-0">
            <h3 className="text-center mb-6 text-md sm:text-lg md:text-lg !leading-relaxed text-black/80 dark:text-white/80">
              To access the online manual, release notes and downloads for your
              Keenetic device, please enter the product name or model number
              below.
            </h3>
            <div className="md:px-4">
              <DeviceSearch />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-white rounded-md dark:bg-dark">
              <div className="flex flex-col justify-center order-2 col-span-12 text-center sm:text-left sm:col-span-7 sm:order-1">
                <h3 className="mb-3 text-xl font-medium text-black/80 dark:text-white/80">
                  How to find your model name and number?
                </h3>
                <p className="text-lg text-body-color dark:text-body-color-dark">
                  Check the bottom of the unit to find the model name and
                  number.
                </p>
              </div>
              <div className="flex justify-center order-1 col-span-12 sm:col-span-5 sm:order-2">
                <img
                  className="w-40 -mt-10"
                  src="/images/bottom-label.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="277"
            cy="63"
            r="225"
            fill="url(#paint0_linear_25:217)"
          ></circle>
          <circle
            cx="17.9997"
            cy="182"
            r="18"
            fill="url(#paint1_radial_25:217)"
          ></circle>
          <circle
            cx="76.9997"
            cy="288"
            r="34"
            fill="url(#paint2_radial_25:217)"
          ></circle>
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          ></circle>
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25:217)"
          ></circle>
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          ></circle>
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop
                offset="0.145833"
                stopColor="#4A6CF7"
                stopOpacity="0"
              ></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop
                offset="0.145833"
                stopColor="#4A6CF7"
                stopOpacity="0"
              ></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08"></stop>
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          ></path>
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          ></path>
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          ></path>
          <path
            d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="url(#paint3_linear_25:218)"
          ></path>
          <circle
            opacity="0.8"
            cx="214.505"
            cy="60.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="url(#paint4_linear_25:218)"
          ></circle>
          <circle
            cx="220"
            cy="63"
            r="43"
            fill="url(#paint5_radial_25:218)"
          ></circle>
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_25:218"
              x1="93.8507"
              y1="67.2674"
              x2="89.9278"
              y2="210.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:218"
              x1="214.505"
              y1="10.2849"
              x2="212.684"
              y2="99.5816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <radialGradient
              id="paint5_radial_25:218"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)"
            >
              <stop offset="0.145833" stopColor="white" stopOpacity="0"></stop>
              <stop offset="1" stopColor="white" stopOpacity="0.08"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;

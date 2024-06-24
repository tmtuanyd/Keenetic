import { Link } from "react-router-dom";

const siteLinks = [
  [
    {
      label: "Products",
      to: "/",
    },
    {
      label: "How It Works",
      to: "/",
    },
  ],
  [
    {
      label: "Where to buy",
      to: "/",
    },
    {
      label: "Support",
      to: "/",
    },
  ],
  [
    {
      label: "Company",
      to: "/",
    },
    {
      label: "Legal Information",
      to: "/",
    },
    {
      label: "Keenetic Account",
      to: "/",
    },
  ],
];

function Footer() {
  return (
    <footer className="relative z-10 pt-16 bg-white dark:bg-gray-dark md:pt-16 lg:pt-20">
      <div className="container px-4">
        <div className="grid grid-cols-12 -mx-4">
          <div className="col-span-12 px-4 mb-12 lg:mb-16 md:col-span-6 lg:col-span-4 xl:col-span-5">
            <Link to="/">
              <img
                className="h-5 dark:hidden"
                src="/images/keenetic-logo.svg"
                alt="Keenetic"
              />
              <img
                className="hidden h-5 dark:block"
                src="/images/keenetic-logo-white.svg"
                alt="Keenetic"
              />
            </Link>
          </div>

          {siteLinks.map((links, index) => (
            <div
              className="flex flex-col col-span-12 px-4 mb-12 md:col-span-6 lg:col-span-2 gap-y-5 lg:mb-16"
              key={`links-${index}`}
            >
              {links.map((link, i) => (
                <Link
                  to={link.to}
                  key={`link-${i}`}
                  className="inline-block text-base duration-300 text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-base text-center text-body-color dark:text-white">
            © Keenetic Limited 2010—2024
          </p>
        </div>
      </div>

      <div className="absolute right-0 top-14 z-[-1]">
        <svg
          width="55"
          height="99"
          viewBox="0 0 55 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.8"
            cx="49.5"
            cy="49.5"
            r="49.5"
            fill="#959CB1"
          ></circle>
          <mask
            id="mask0_94:899"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="99"
            height="99"
          >
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="#4A6CF7"
            ></circle>
          </mask>
          <g mask="url(#mask0_94:899)">
            <circle
              opacity="0.8"
              cx="49.5"
              cy="49.5"
              r="49.5"
              fill="url(#paint0_radial_94:899)"
            ></circle>
            <g opacity="0.8" filter="url(#filter0_f_94:899)">
              <circle
                cx="53.8676"
                cy="26.2061"
                r="20.3824"
                fill="white"
              ></circle>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_94:899"
              x="12.4852"
              y="-15.1763"
              width="82.7646"
              height="82.7646"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="10.5"
                result="effect1_foregroundBlur_94:899"
              ></feGaussianBlur>
            </filter>
            <radialGradient
              id="paint0_radial_94:899"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
            >
              <stop stopOpacity="0.47"></stop>
              <stop offset="1" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-24 left-0 z-[-1]">
        <svg
          width="79"
          height="94"
          viewBox="0 0 79 94"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            fill="url(#paint0_linear_94:889)"
          ></rect>
          <rect
            x="-41"
            y="26.9426"
            width="66.6675"
            height="66.6675"
            transform="rotate(-22.9007 -41 26.9426)"
            stroke="url(#paint1_linear_94:889)"
            strokeWidth="0.7"
          ></rect>
          <path
            opacity="0.3"
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
            fill="url(#paint2_linear_94:889)"
          ></path>
          <path
            d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
            stroke="url(#paint3_linear_94:889)"
            strokeWidth="0.7"
          ></path>
          <path
            opacity="0.3"
            d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
            fill="url(#paint4_linear_94:889)"
          ></path>
          <path
            d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
            stroke="url(#paint5_linear_94:889)"
            strokeWidth="0.7"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_94:889"
              x1="-41"
              y1="21.8445"
              x2="36.9671"
              y2="59.8878"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_94:889"
              x1="25.6675"
              y1="95.9631"
              x2="-42.9608"
              y2="20.668"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_94:889"
              x1="20.325"
              y1="-3.98039"
              x2="90.6248"
              y2="25.1062"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_94:889"
              x1="18.3642"
              y1="-1.59742"
              x2="113.9"
              y2="80.6826"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_94:889"
              x1="61.1098"
              y1="62.3249"
              x2="-8.82468"
              y2="58.2156"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0.62"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop>
            </linearGradient>
            <linearGradient
              id="paint5_linear_94:889"
              x1="65.4236"
              y1="65.0701"
              x2="24.0178"
              y2="41.6598"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0"></stop>
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
}

export default Footer;

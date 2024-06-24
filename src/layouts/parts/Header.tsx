import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ThemeToggler from "../../components/ThemeToggler";

function Header() {
  const menuItems = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Models",
      to: "/models",
    },
    {
      label: "Why kinetic",
      to: "/why",
    },
    {
      label: "Support",
      to: "/support",
    },
  ];

  const [isTop, setIsTop] = useState(true);
  const [isOpenNavDropdown, setIsOpenNavDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsOpenNavDropdown(!isOpenNavDropdown);
  };

  const handleScroll = useCallback(() => {
    setIsTop(window.scrollY < 10);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const location = useLocation();

  return (
    <>
      <header
        id="header"
        className={`sticky top-0 duration-300 transition-all z-50 ${
          isTop
            ? "bg-transparent h-24"
            : "bg-white backdrop-blur-sm dark:bg-gray-dark !bg-opacity-80 h-20 shadow"
        }`}
      >
        <div className="container relative h-full mx-auto">
          <div className="flex items-center h-full px-4">
            <Link to="/">
              <img
                className="h-6 dark:hidden"
                src="/images/keenetic-logo.svg"
                alt="Keenetic"
              />
              <img
                className="hidden h-6 dark:block"
                src="/images/keenetic-logo-white.svg"
                alt="Keenetic"
              />
            </Link>

            <div className="items-center flex-1 hidden px-12 lg:flex gap-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={`menu-item-${index}`}
                  to={item.to}
                  className={`flex py-2 text-md xl:text-lg lg:mr-0 lg:inline-flex whitespace-nowrap lg:px-0 lg:py-6 ${
                    location.pathname === item.to
                      ? "text-primary dark:text-white"
                      : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-end flex-1 gap-2">
              <div className="flex items-center lg:pr-0">
                <Link
                  className="hidden py-3 text-base font-medium xl:text-lg px-7 text-dark hover:opacity-70 dark:text-white md:block"
                  to="/signin"
                >
                  Sign In
                </Link>
                <Link
                  className="hidden px-8 py-3 text-base font-medium text-white transition duration-300 rounded-sm xl:text-lg ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </div>
              <ThemeToggler />

              <button
                onClick={toggleDropdown}
                className="block rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    isOpenNavDropdown && "top-[7px] rotate-45"
                  }`}
                ></span>
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    isOpenNavDropdown && "opacity-0"
                  }`}
                ></span>
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    isOpenNavDropdown && "top-[-8px] -rotate-45"
                  }`}
                ></span>
              </button>

              <nav
                className={`lg:hidden navbar absolute right-0 z-30 w-64 rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  isOpenNavDropdown
                    ? "visibility top-full opacity-100"
                    : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuItems.map((item, index) => (
                    <li className="relative group" key={`menu-item-${index}`}>
                      <Link
                        to={item.to}
                        className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                          location.pathname === item.to
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}

                  <li className="flex flex-col items-start gap-3 mt-2 md:hidden lg:pr-0">
                    <Link
                      className="py-2 text-base font-medium bg-black rounded-sm px-7 text-dark hover:opacity-70 dark:text-white ease-in-up"
                      to="/signin"
                    >
                      Sign In
                    </Link>
                    <Link
                      className="px-8 py-2 text-base font-medium text-white transition duration-300 rounded-sm ease-in-up bg-primary hover:bg-opacity-90"
                      to="/signup"
                    >
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed bottom-8 right-8 z-[99] ${isTop && "hidden"}`}>
        <div
          onClick={scrollTop}
          aria-label="scroll to top"
          className="flex items-center justify-center w-10 h-10 text-white transition duration-300 ease-in-out rounded-md shadow-md cursor-pointer bg-primary hover:bg-opacity-80 hover:shadow-signUp"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
        </div>
      </div>
    </>
  );
}

export default Header;

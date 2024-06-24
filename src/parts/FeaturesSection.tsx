function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="flex items-center justify-center w-16 h-16 mb-10 rounded-md bg-primary bg-opacity-10 text-primary">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="fill-current"
              >
                <path
                  opacity="0.5"
                  d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
                ></path>
                <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z"></path>
              </svg>
            </div>
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Product advice and support
            </h3>
            <div>
              <p className="pr-2.5 text-base font-medium leading-relaxed text-body-color">
                We are here to help! Contact us for a product recommendation or
                technical support by{" "}
                <a
                  className="text-primary hover:underline"
                  href="mailto:support@keenetic.de"
                >
                  e-mail
                </a>
                .
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="flex items-center justify-center w-16 h-16 mb-10 rounded-md bg-primary bg-opacity-10 text-primary">
              <svg
                width="40"
                height="41"
                viewBox="0 0 40 41"
                className="fill-current"
              >
                <path
                  opacity="0.5"
                  d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
                ></path>
                <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z"></path>
              </svg>
            </div>
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Web UI demo
            </h3>
            <div>
              <p className="pr-2.5 text-base font-medium leading-relaxed text-body-color mb-2">
                Experience the Web User Interface of our products. Use demo/demo
                to log in.
              </p>

              <a
                className="block mb-1 text-primary hover:underline"
                href="https://hero-dsl.demo.keenetic.pro"
              >
                Hero DSL
              </a>
              <a
                className="block text-primary hover:underline"
                href="https://titan.demo.keenetic.pro"
              >
                Titan
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="flex items-center justify-center w-16 h-16 mb-10 rounded-md bg-primary bg-opacity-10 text-primary">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                className="fill-current"
              >
                <path
                  opacity="0.5"
                  d="M39 12C39.5523 12 40 12.4477 40 13V39C40 39.5523 39.5523 40 39 40H13C12.4477 40 12 39.5523 12 39V33C12 32.4477 12.4477 32 13 32H31C31.5523 32 32 31.5523 32 31V13C32 12.4477 32.4477 12 33 12H39Z"
                ></path>
                <rect width="28" height="28" rx="1"></rect>
              </svg>
            </div>
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Community{" "}
            </h3>
            <div>
              <p className="pr-2.5 text-base font-medium leading-relaxed text-body-color">
                Want to share your experiences or get advice from other Keenetic
                users —{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://forum.keenetic.com/"
                >
                  join the forum
                </a>
                .
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="flex items-center justify-center w-16 h-16 mb-10 rounded-md bg-primary bg-opacity-10 text-primary">
              <svg
                width="40"
                height="45"
                viewBox="0 0 40 45"
                className="fill-current"
              >
                <path
                  opacity="0.5"
                  d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
                ></path>
                <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z"></path>
              </svg>
            </div>
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              Warranty
            </h3>
            <div>
              <p className="pr-2.5 text-base font-medium leading-relaxed text-body-color">
                Learn more about{" "}
                <a
                  className="text-primary hover:underline"
                  href="https://keenetic.com/en/legal#service"
                >
                  warranty
                </a>{" "}
                and replacement procedures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;

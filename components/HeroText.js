const HeroText = () => {
  return (
    <main className="w-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center flex-col sm:mt-44 mt-10">
        <div className=" bg-primarytext flex items-center pt-1 justify-center">
          <h1 className="text-primarytext text-5xl sm:text-8xl font-medium ">
            WE
          </h1>
          <div className="felx ml-2">
            <div className="border border-accento px-3 pt-0.5 rounded-full">
              <h1 className="text-accento text-5xl font-medium sm:text-8xl">
                CREATE
              </h1>
            </div>
          </div>
          <img
            src="nlogo.svg"
            alt="hero"
            className="rounded-full w-15 sm:w-28 ml-3 hidden sm:inline-block"
          />
        </div>
        <div className="p-2 flex items-center justify-center gap-2">
          <img
            src="nlogo.svg"
            alt="hero"
            className="rounded-full w-15 sm:hidden"
          />
          <h1 className="text-5xl sm:text-8xl">
            <span className="text-accentb">D</span>IGITAL
          </h1>
          <p className="text-lg sm:text-xl pt-2 hidden sm:inline-block w-96">
            Nexteons designs and develops mobile and web apps keeping in mind
            both user convenience and business growth.{" "}
          </p>
        </div>
        <h1 className="text-5xl sm:text-8xl">
          SOLUTION<span className="text-accentb">S</span>
        </h1>
        <div className="text-5xl flex p-2">
          <p className="text-lg sm:text-xl text-center pt-2 sm:hidden">
            Nexteons designs and develops mobile and web apps keeping in mind
            both user convenience and business growth.{" "}
          </p>
        </div>
        <div className="mt-4 sm:mt-2 flex flex-col justify-center items-center">
          <img
            src="heroimg.jpg"
            alt="hero"
            className="rounded-full p-4 sm:p-10 sm:h-80"
          />
          <p className="text-center font-medium sm:text-x w-5/6 text-lg p-5 sm:text-4xl">
            As a tight - knit team of experts, we create memorable and emotional
            websites, digitalexperiences, and native apps.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroText;

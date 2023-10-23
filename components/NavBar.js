"use client";
const NavBar = () => {
  return (
    <div className="w-screen">
      <main className="pt-2 m-auto max-w-13xl pb-1 px-2">
        <nav className=" flex justify-between items-center">
          <div className="">
            <div className="border flex items-center gap-2 rounded-full pr-3 py-1 sm:py-2">
              <div className="rounded-3xl bg-primarytext"></div>
              <a
                href="https://www.nexteons.com/"
              >
               <img src="Nexteonslogo.svg" alt="hero" className="rounded-full h-6 w-24" />
              </a>
            </div>
          </div>
          
          <div className=" flex">
            <div className="flex items-center inline-flex rounded-3xl pl-3 px-1 py-2 sm:py-4 sm:px-4">
              <div className="flex items-center border py-1  p-0.5 rounded-full px-2 gap-2 justify-center">
                <div className="w-2 h-2 bg-green rounded-full"></div>
                <h1 className="sm:text-lg">Contact Us</h1>
              </div>
            </div>
            <div className=" flex gap-2">
            <div className="flex items-center gap-2 inline-flex rounded-3xl pl-3 px-3 py-3 sm:py-4 sm:px-4">
              <div className="flex items-center  flex-col gap-2">
                <div className="w-5 h-0.5 bg-black sm:w-4"></div>
                <div className="w-5 h-0.5 bg-black sm:w-4"></div>
              </div>
            </div>
          </div>
          </div>
        </nav>
      </main>
      <div className="h-1 border-b border-bline "></div>
    </div>
  );
};
export default NavBar;

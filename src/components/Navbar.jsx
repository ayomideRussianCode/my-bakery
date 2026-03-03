
const Navbar = () => {
  return (
    <>
      <header className="flex w-auto bg-[#ffffff] items-center justify-between mx-8 my-2 sm:px-6 ">
        <div className="sm:space-x-8 sm:px-6 lg:px-8 flex ">
          <img className="h-8" src="../../public/Logo.svg" alt="Logo" />
        </div>
        <div className="text-black ">
          <nav className=" hidden md:flex items-center px-5 py-2 space-x-8">
            <a
              className="no-underline font-productSans text-[#404c60] text-xs"
              href="#"
            >
              FAQs
            </a>
            <a
              className="no-underline font-productSans text-xs text-[#404c60]"
              href="#"
            >
              Log in
            </a>
            <a
              className="no-underline font-productSans text-xs text-[#fff] rounded-lg shadow-md px-4 py-2 bg-[#ce0639]"
              href="#"
            >
              Create Account
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export const Hero = () => {
    return (
      <>
        <div>
          <img
            className="h-50 object-cover sm:h-60 md:h-70 lg:h-full w-full"
            src="../../public/Bakery image 1 .png"
            alt=""
          />
          <div className="">
           
          </div>
        </div>
      </>
    );
}
export default Navbar;

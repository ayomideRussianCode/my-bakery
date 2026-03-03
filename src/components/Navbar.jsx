
const Navbar = () => {
  return (
    <>
      <header className="flex w-full items-center justify-between bg-white px-4 py-4 sm:px-6 lg:px-8 shadow-sm ">
        <div className="mx-[24] sm:space-x-8 sm:px-6 lg:px-8 flex ">
          <img className="h-10 w-auto" src="../../public/Logo.svg" alt="Logo" />
        </div>
        <div className="text-black ">
          <nav className="flex items-center space-x-8">
            <a className="no-underline" href="">
              FAQs
            </a>
            <a className="no-underline" href="">
              Log in
            </a>
            <a
              className="no-underline rounded-xl shadow-md px-4 py-2 bg-[#ce0639]"
              href=""
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
            className="h-50 w-full object-cover sm:h-60 md:h-70 lg:h-80 linear-gradient-to-l from-[#5f5656] to-[#7e7777]"
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

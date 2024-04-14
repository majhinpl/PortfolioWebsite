import { useState } from "react";
import "../app.css";
import "../index.css";
import Logo from "./Logo.jsx";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import clsx from "clsx";

const navlinks = [
  {
    labe: "Home",
    link: "/home",
  },
  {
    labe: "Project",
    link: "/project",
  },
  {
    labe: "About",
    link: "/about",
  },
  {
    labe: "Article",
    link: "https://majhitrading.blogspot.com/",
  },
  {
    labe: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <dev className="container mx-auto">
        <div className="navbar flex px-8 items-center justify-between py-6 z-99 border-b">
          {/* logo */}
          <section className="flex justify-center gap-4 cursor-pointer hover:opacity-[0.6] text-2xl">
            <Logo />
          </section>
          {/* Nav links for LG screen */}
          <section className="hidden md:block">
            {navlinks.map((d, i) => (
              <Link
                key={i}
                className=" font-bold uppercase cursor-pointer mr-6"
                to={d.link}
              >
                {d.labe}
              </Link>
            ))}
          </section>
          {/* mobile-menu */}
          <section className="flex justify-center gap-4 md:hidden">
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* sidebar mobile menu */}
            <div
              className={clsx(
                "fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-y-full  transition-all ",
                menu && "translate-y-0"
              )}
            >
              <section className="flex flex-col w-46 h-screen fixed right-0 bg-[#38A649] text-[#001601] w-56 gap-4 py-6 px-8 ">
                <IoMdClose
                  className="mt-0 mb-8 right-0 top-0 text-3xl cursor-pointer abso hover:opacity-60 self-end"
                  onClick={() => setMenu(false)}
                />
                {navlinks.map((d, i) => (
                  <Link
                    key={i}
                    className="font-bold uppercase cursor-pointer hover:opacity-60 self-center border-b-2 py-2"
                    to={d.link}
                  >
                    {d.labe}
                  </Link>
                ))}
              </section>
            </div>
          </section>
        </div>
      </dev>
    </>
  );
};

export default Navbar;

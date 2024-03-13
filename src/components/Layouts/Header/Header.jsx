import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import Container from "../Container/Container";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../../../../data";
import Logo from "../../UI/Logo/Logo";

const Header = () => {
  const [isNavClose, setIsNavClose] = useState(true);

  return (
    <div className="h-16 w-full absolute top-0 left-0">
      <motion.div
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          type: "ease",
        }}
        className="w-full h-full border-b border-primary-4"
      >
        <Container>
          <nav className="h-full w-full flex justify-between items-center">
            <Logo />
            <div className="hidden md:flex">
              {NAV_LINKS.map((link, i) => (
                <a
                  href={link.link}
                  key={i}
                  className="ml-6 hover:text-accent-1 transition para"
                >
                  {link.text}
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                setIsNavClose(!isNavClose);
              }}
              className="flex md:hidden z-50 "
            >
              {isNavClose ? (
                <RxHamburgerMenu className="text-background-3 text-2xl" />
              ) : (
                <GrClose className="text-primary-3 text-2xl" />
              )}
            </button>
          </nav>
        </Container>
        <div
          style={{
            transform: isNavClose ? "translateX(100%)" : "translateX(0)",
          }}
          className="flex md:hidden absolute top-0 right-0 h-[100svh] w-72 bg-background-3 flex-col pt-16 transition"
        >
          {NAV_LINKS.map((link, i) => (
            <a
              href={link.link}
              key={i}
              className="ml-10 mt-10 text-primary-3 h3"
            >
              {link.text}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

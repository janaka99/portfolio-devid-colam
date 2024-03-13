import { SOCIALS } from "../../../../data";
import { slideInFromBottom } from "../../../animations/animation";
import Button from "../../UI/Button/Button";
import Container from "../Container/Container";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-background-3 pt-20 md:pt-40">
      <Container>
        <motion.div
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          variants={slideInFromBottom}
          className="flex gap-20 flex-col md:flex-row justify-between"
        >
          <div className="text-4xl text-primary-3">
            <span>Let&apos;s do something</span> <br />
            <span className="text-accent-1">Together</span>
            <Button classes="w-fit mt-10">Contact</Button>
          </div>
          <div className="">
            <div className="text-4xl text-primary-3">
              You can find me on <br /> social media
            </div>
            <div className="flex flex-col gap-2 mt-10">
              {SOCIALS.map((so, i) => (
                <a
                  key={i}
                  href={so.link}
                  className="text-primary-3 font-semibold transition hover:text-accent-1"
                >
                  {so.text}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        <div className="text-sm text-primary-3 py-20  text-center">
          Built Using Next JS <br />
          Copyright &copy; Devid Colam. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

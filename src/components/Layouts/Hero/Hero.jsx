import { motion } from "framer-motion";
import Button from "../../UI/Button/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-[100svh] w-full flex justify-center items-center px-10"
    >
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex flex-col justify-center items-center text-center"
      >
        <div className="flex items-center gap-2">
          <img
            src="/man.png"
            alt=""
            className="w-16 h-16 object-cover rounded-tl-[20px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[35px] bg-accent-1 "
          />
          <p className="text-xl uppercase font-semibold tracking-widest text-primary-1">
            devid colam
          </p>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-primary-1">
          Web Developer
        </h1>
        <p className="text-xl tracking-widest  max-w-3xl mt-3  text-primary-1">
          I develop clean modern websites that embody the essence of your brand.
        </p>
        <Button classes="mt-3">contact me</Button>
      </motion.div>
    </section>
  );
};

export default Hero;

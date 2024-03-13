import { slideInFromBottom } from "../../../animations/animation";
import Title from "../../UI/Title/Title";
import Container from "../Container/Container";
import { motion } from "framer-motion";

const Clients = () => {
  const CLIENTS = [
    {
      link: "/ebay.png",
    },
    {
      link: "/amazon.png",
    },
    {
      link: "/fiverr.png",
    },
    {
      link: "/upwork.png",
    },
    {
      link: "/instagram.png",
    },
    {
      link: "/facebook.png",
    },
  ];

  return (
    <div className=" px-10 py-20 md:py-40">
      <Container>
        <Title color="text-primary-1">
          Friends I&apos;ve made <br /> along the way{" "}
        </Title>

        <motion.div
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          variants={slideInFromBottom}
          className="w-full flex mx-auto flex-wrap gap-3 justify-between mt-20"
        >
          {CLIENTS.map((cl, i) => (
            <img
              src={cl.link}
              alt=""
              key={i}
              className="h-10 object-contain w-fit"
            />
          ))}
        </motion.div>
      </Container>
    </div>
  );
};

export default Clients;

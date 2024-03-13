import { SERVICES } from "../../../../data";
import { slideInFromBottom } from "../../../animations/animation";
import Title from "../../UI/Title/Title";
import Container from "../Container/Container";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="py-20 md:py-40  bg-background-3">
      <Container>
        <div className="flex-1 max-w-3xl flex flex-col justify-center">
          <Title>
            Full-stack dev, <br />
            based in US
          </Title>
          <motion.p
            initial="initial"
            whileInView="visible"
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            variants={slideInFromBottom}
            className="text-primary-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis
            quaerat porro quia quis ut? Enim veritatis blanditiis, vitae,
            repellat atque cupiditate rem debitis quam error molestias aut.
            Placeat corporis eaque illo natus voluptatem! Voluptatum odio ex
            dolore est itaque?
          </motion.p>
          <motion.p
            initial="initial"
            whileInView="visible"
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            variants={slideInFromBottom}
            className="text-primary-4"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis
            quaerat porro quia quis ut? Enim veritatis blanditiis.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-20">
          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2 * i,
              }}
              variants={slideInFromBottom}
              className=" px-10 py-16 rounded-3xl flex flex-col items-center text-center text-accent-1 bg-primary-1"
            >
              <service.icon size={55} />
              <p className="text-2xl mt-10 text-primary-3">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;

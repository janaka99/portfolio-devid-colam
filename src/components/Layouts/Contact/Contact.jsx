import { slideInFromBottom } from "../../../animations/animation";
import Button from "../../UI/Button/Button";
import Title from "../../UI/Title/Title";
import Container from "../Container/Container";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className=" bg-background-3 py-20 md:py-40">
      <Container>
        <Title>Contact Me</Title>
        <motion.div
          initial="initial"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
          variants={slideInFromBottom}
          className="max-w-3xl mx-auto mt-10 p-6 bg-primary-1 rounded-md shadow-md"
        >
          <form>
            <div className="mb-4">
              <Label text="Name" />
              <Input placeholder="Your name" type="text" />
            </div>
            <div className="mb-4">
              <Label text="Email" />
              <Input placeholder="Your email" type="email" />
            </div>
            <div className="mb-4">
              <Label text="Message" />
              <textarea
                rows="4"
                className="w-full p-2 border text-sm border-background-3 rounded-md bg-background-3 focus:outline-none focus:border-accent-1 text-primary-3"
                placeholder="Your Message"
              ></textarea>
            </div>
            <Button classes="w-fit">Contact</Button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;

const Input = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      className="w-full px-2 p-3 border rounded-md text-sm border-background-3 bg-background-3 focus:outline-none focus:border-accent-1 text-primary-3"
      placeholder={placeholder}
    />
  );
};

const Label = ({ text }) => {
  return (
    <label
      htmlFor="message"
      className="block text-primary-2 text-sm font-medium mb-2"
    >
      {text}
    </label>
  );
};

import { RiArrowRightUpLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { slideInFromBottom } from "../../../../animations/animation";
const Project = ({ project, i }) => {
  return (
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
      className="w-full  p-4 rounded-3xl "
    >
      <img
        src={project.icon}
        alt=""
        className="aspect-[7/4] rounded-3xl object-cover"
      />
      <div className="w-full flex flex-col gap-2 p-4">
        <p className="text-lg text-primary-1 font-semibold">{project.text}</p>
        <p className="text-primary-1">{project.description}</p>
        <button className="flex gap-2 items-end self-end text-sm text-accent-1 font-semibold">
          View Project
          <RiArrowRightUpLine size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default Project;

const Button = ({ children, classes = "" }) => {
  return (
    <div
      className={`bg-accent-1 hover:bg-accent-2 transition px-10 py-4 para uppercase text-white rounded-full cursor-pointer ${classes}`}
    >
      {children}
    </div>
  );
};

export default Button;

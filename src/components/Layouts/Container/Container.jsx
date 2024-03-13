const Container = ({ children }) => {
  return (
    <div className="max-w-screen-xl px-10 md:px-20 mx-auto h-full w-full">
      {children}
    </div>
  );
};

export default Container;

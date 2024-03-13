const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/man.png"
        alt=""
        className="w-10 h-10 object-cover rounded-tl-[20px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[35px] bg-accent-1 "
      />
      <div className="text-3xl uppercase font-bold ">DC</div>
    </div>
  );
};

export default Logo;

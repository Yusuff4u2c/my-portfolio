const Button = ({ children, className, type = "button", ...others }) => {
  return (
    <button
      className={`text-lg px-[42px] py-1 rounded-3xl ${className}`}
      type={type}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;

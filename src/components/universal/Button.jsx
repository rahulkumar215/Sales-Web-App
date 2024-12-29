// eslint-disable-next-line react/prop-types
function Button({
  type = "primary",
  onClick,
  className = "",
  children,
  disabled = false,
  behaviour = "button",
}) {
  const buttonType = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-red-600 text-white",
    gray: "bg-gray-400 text-black",
    lightgray: "bg-gray-200 text-black",
  };

  const nonDiableStyles = `${type && buttonType[type]} hover:brightness-110`;

  return (
    <button
      type={behaviour}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-xl ${className} w-fit cursor-pointer px-4 py-2 text-[1.4rem] transition-all duration-200 ease-in ${disabled ? "cursor-not-allowed bg-gray-500 text-black" : nonDiableStyles}`}
    >
      {children}
    </button>
  );
}

export default Button;

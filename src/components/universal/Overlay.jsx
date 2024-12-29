// eslint-disable-next-line react/prop-types
function Overlay({ onClick }) {
  return (
    <div
      className="absolute left-0 top-0 z-10 grid h-screen w-screen items-center justify-center bg-black bg-opacity-25"
      onClick={onClick}
    ></div>
  );
}

export default Overlay;

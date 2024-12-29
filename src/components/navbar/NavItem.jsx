// eslint-disable-next-line react/prop-types
function NavItem({ icon, type, children }) {
  return (
    <div
      className={`grid cursor-pointer grid-cols-[max-content_1fr] items-center p-4 ${type === "auth" ? "bg-red-600" : ""} rounded-md transition-all duration-200 ease-in hover:-translate-y-1`}
    >
      <>{icon}</>
      <h3 className="text-[1.6rem]">{children}</h3>
    </div>
  );
}

export default NavItem;

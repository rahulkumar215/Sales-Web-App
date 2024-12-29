import Legal from "../legal/Legal";
import Navbar from "../navbar/Navbar";
import User from "./User";

function Sidebar() {
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3 grid h-full grid-rows-[max-content_max-content_1fr] bg-blue-700 p-8 text-white">
      <User />
      <Navbar />
      <Legal />
    </div>
  );
}

export default Sidebar;

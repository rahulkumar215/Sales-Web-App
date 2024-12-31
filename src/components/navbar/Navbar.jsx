import NavItem from "./NavItem";
// import EditIcon from "../../assets/edit.svg?react";
import LoutIcon from "../../assets/logout.svg?react";
import ContactIcon from "../../assets/contacts.svg?react";

function Navbar() {
  return (
    <nav>
      {/* <NavItem icon={<EditIcon className="mr-4 size-[2rem] fill-white" />}>Companies</NavItem> */}
      <NavItem icon={<ContactIcon className="mr-4 size-[2rem] stroke-white" />}>
        Contact Points
      </NavItem>
      <NavItem
        icon={<LoutIcon className="mr-4 size-[2rem] fill-white" />}
        type="auth"
      >
        Log Out
      </NavItem>
    </nav>
  );
}

export default Navbar;

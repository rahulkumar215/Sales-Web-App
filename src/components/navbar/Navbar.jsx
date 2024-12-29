import NavItem from "./NavItem";
import EditIcon from "../../assets/edit.svg?react";
import LoutIcon from "../../assets/logout.svg?react";

function Navbar() {
  const iconClasses = "mr-4 size-[2rem] fill-white";

  return (
    <nav>
      <NavItem icon={<EditIcon className={iconClasses} />}>Companies</NavItem>
      <NavItem icon={<LoutIcon className={iconClasses} />} type="auth">
        Log Out
      </NavItem>
    </nav>
  );
}

export default Navbar;

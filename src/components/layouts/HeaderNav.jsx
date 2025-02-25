import { Link } from "react-router-dom";

const HeaderNav = ({ path, label, onClick }) => {
  return (
    <Link
      to={path}
      className="hover:cursor-pointer hover:text-white"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default HeaderNav;

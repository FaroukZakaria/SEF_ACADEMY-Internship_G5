import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, onClick }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all text-white
    ${
      isActive
        ? "bg-amazon-lightNavy "
        : "hover:bg-amazon-lightNavy"
    }`
      }
    >
      <Icon size={18} className="text-lg" />

      <span className="font-medium">{item.title}</span>
    </NavLink>
  );
};

export default SidebarItem;

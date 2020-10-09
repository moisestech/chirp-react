import PropTypes from "prop-types";

export default function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebar-option ${active && "sidebar-option--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

SidebarOption.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

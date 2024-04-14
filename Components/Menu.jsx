import PropTypes from "prop-types";
import Hamburger from "hamburger-react";

function Menu({ isOpen, setOpen }) {

  return (
    <div id="menu">
      <Hamburger
        toggled={isOpen}
        toggle={setOpen}
      />
    </div>
  );
}

export default Menu;

// Props validation
Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
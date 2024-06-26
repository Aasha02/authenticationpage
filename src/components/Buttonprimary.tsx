import PropTypes from "prop-types";
import "./buttonprimary.css";

const Buttonprimary = ({ className = "" }) => {
  return (
    <button className="buttonprimary">
      <div className="label4">Sign up</div>
    </button>
  );
};

Buttonprimary.propTypes = {
  className: PropTypes.string,
};

export default Buttonprimary;

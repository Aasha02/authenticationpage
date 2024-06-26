import { useMemo } from "react";
import PropTypes from "prop-types";
import "./input.css";

const Input = ({ className = "", inputPlaceholder, propBorder, propColor }) => {
  const inputStyle = useMemo(() => {
    return {
      border: propBorder,
      color: propColor,
    };
  }, [propBorder, propColor]);

  return (
    <input
      className="input1"
      placeholder={inputPlaceholder}
      type="text"
      style={inputStyle}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
  inputPlaceholder: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propColor: PropTypes.any,
};

export default Input;

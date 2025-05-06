import PropTypes from "prop-types";

import { StyledButton } from "./styles";

export default function Button({ children, onClick, type, disabled }) {
  return (
    <StyledButton
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
};

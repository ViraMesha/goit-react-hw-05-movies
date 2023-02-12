import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { StyledLink } from './BackLink.style';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

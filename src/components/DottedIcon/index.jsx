import React from 'react';
import PropTypes from 'prop-types';
import { Container, Dot } from './styles';

const DottedIcon = ({ icon, count, ...props }) => (
  <Container {...props}>
    <i className={icon}>
      {
        count > 0 ?
          <Dot>{count > 9 ? '9+' : count}</Dot>
        : null
      }
    </i>
  </Container>
);

DottedIcon.propTypes = {
  icon: PropTypes.string,
  count: PropTypes.number,
};

DottedIcon.defaultProps = {
  icon: 'fas fa-paw',
  count: 0,
};

export default DottedIcon;

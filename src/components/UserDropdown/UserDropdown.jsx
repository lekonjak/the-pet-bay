import React from 'react';
import PropTypes from 'prop-types';

import User from 'assets/imgs/user.png';

import { Container, Menu, NavLink, ButtonItem } from './styles';
import { NavbarImg as Img } from '../styles';

import ClickOutside from '../ClickOutside';
import Dropdown from '../Dropdown';

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOnClick = () => {
    this.setState({ open: !this.state.open });
  }

  handleOnClickOutside = () => {
    this.setState({ open: false });
  }

  handleSignOut = () => {
    this.props.signOut();
    this.handleOnClickOutside();
  }

  render = () => (
    <ClickOutside onClickOutside={this.handleOnClickOutside}>
      <Container>
        <Img src={this.props.image || User} onClick={this.handleOnClick} />
        <Dropdown open={this.state.open} shrinked={this.props.shrinked}>
          {
            this.props.signed ?
              <Menu>
                <NavLink to="/my-pets">
                  <i className="fas fa-paw" />
                  Meus Pets
                </NavLink>
                <NavLink to="/my-agenda">
                  <i className="far fa-calendar" />
                  Minha Agenda
                </NavLink>
                <NavLink to="/my-account">
                  <i className="fas fa-user" />
                  Minha Conta
                </NavLink>
                <ButtonItem onClick={this.handleSignOut}>
                  <i className="fas fa-sign-out-alt" />
                  Sair
                </ButtonItem>
              </Menu>
            :
              <Menu>
                <NavLink to="/sign-in">
                  <i className="fas fa-sign-in-alt" />
                  Entrar
                </NavLink>
                <NavLink to="/sign-up">
                  <i className="fas fas fa-user-plus" />
                  Criar conta
                </NavLink>
              </Menu>
          }
        </Dropdown>
      </Container>
    </ClickOutside>
  );
}

UserDropdown.propTypes = {
  shrinked: PropTypes.bool,
  signed: PropTypes.bool,
  image: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
};

UserDropdown.defaultProps = {
  shrinked: false,
  signed: false,
};

export default UserDropdown;

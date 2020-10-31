import React from 'react';

import { FaBars, FaSearch, FaClock } from 'react-icons/fa';

import { 
    Container,
    NavBarLeft,
    NavBarRight 
} from './styles';

import avatar from '../../assets/avatar.svg';

const Navbar: React.FC = () => {
  return (
      <Container>
          <div className="nav_icon">
            <FaBars size={26} color="#a5aaad" />
          </div>

          <NavBarLeft>
            <a href="#" className="action_link ">Subscribers</a>
            <a href="#">Video Management</a>
            <a href="#">Admin</a>
          </NavBarLeft>

          <NavBarRight>
            <a href="#">
                <FaSearch size={16} color="#a5aaad" />
            </a>

            <a href="#">
                <FaClock size={16}  color="#a5aaad" />
            </a>

            <a href="#">
                <img width="30px" src={avatar} />
            </a>
          </NavBarRight>

      </Container>
  );
}

export default Navbar;
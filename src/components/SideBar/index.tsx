import React from 'react';

import { Container } from './styles';
import { 
    FaTimes, 
    FaHome, 
    FaUserMd, 
    FaBuilding,
    FaWrench,
    FaArchive,
    FaQuestion,
    FaHandshake,
    FaSignInAlt,
    FaBriefcase,
    FaMoneyBill,
    FaPowerOff
} from 'react-icons/fa';

import logo from '../../assets/logo.png';

const SideBar: React.FC = () => {
  return (
      <Container>
          <div className="sidebar_title">
            <div className="sidebar_img">
                <img src={logo}/>
                <h1>Leandro Moraes</h1>
            </div>
            
            <FaTimes size={20} />
          </div>

          <div className="sidebar_menu">
            <div className="sideBar_link active_menu_link">
                <FaHome size={20} />
                <a>Dashboard</a>
            </div>
            <h2>MNG</h2>
            <div className="sidebarLink">
                <FaUserMd size={20} />
                <a>Admin Managment</a>
            </div>

            <div className="sidebarLink">
                <FaBuilding size={20} />
                <a>Company Managment</a>
            </div>

            <div className="sidebarLink">
                <FaWrench size={20} />
                <a>employer Managment</a>
            </div>

            <div className="sidebarLink">
                <FaArchive size={20} />
                <a>Warehouse</a>
            </div>

            <div className="sidebarLink">
                <FaHandshake size={20} />
                <a>Contracts</a>
            </div>
            <div className="sidebarLink">
                <FaQuestion size={20} />
                <a>Request</a>
            </div>
            <div className="sidebarLink">
                <FaSignInAlt size={20} />
                <a>Leave Policy</a>
            </div>

            <div className="sidebarLink">
                <FaSignInAlt size={20} />
                <a>Especyal Days</a>
            </div>

            <div className="sidebarLink">
                <FaSignInAlt size={20} />
                <a>Aplly for leave</a>
            </div>
            <h2>PAYTROLL</h2>

            <div className="sidebarLink">
                <FaMoneyBill size={20} />
                <a>Payroll</a>
            </div>

            <div className="sidebarLink">
                <FaBriefcase size={20} />
                <a>PayGrade</a>
            </div>

            <div className="sidebar_logout">
                <FaPowerOff size={20} />
                <a>LogOut</a>
            </div>
          </div>
      </Container>
  );
}

export default SideBar;
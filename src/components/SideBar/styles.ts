import styled from 'styled-components';

export const Container = styled.div`
  background: #020509;
  grid-area: sidebar;
  overflow-y: auto;
  padding: 20px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;

  .sidebar_img {
    display: flex;
    align-items: center;
  }

  .sidebar_title {
    div {
      img {
        width: 75px;
        object-fit: contain;
      }
      h1 {
        font-size: 18px;
        display: inline;
      }
    }

    svg {
      font-size: 18px;
      display: none;
    }
  }

  .sidebar_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f3f4f6;
    margin-bottom: 30px;
  }

  .sidebar_menu {
    h2 {
      color: #3ea175;
      font-size: 16px;
      margin-top: 15px;
      margin-bottom: 5px;
      padding: 0 10px;
      font-weight: 700;
    }
  }

  .sidebarLink {
    color: #f3f4f6;
    padding: 10px;
    border-radius: 3px;
    margin-bottom: 5px;

    a {
      text-decoration: none;
      color: #a5aaad;
    }

    svg {
      margin-right: 10px;
      font-size: 18px;
    }
  }

  .active_menu_link {
    background: rgba(62, 161, 117, 0.3);
    color: #3ea175;
    display: flex;
    padding: 10px;

    a {
      color: #3ea175 !important;
      margin-left: 5px;
    }
  }

  .sidebar_logout {
    margin-top: 20px;
    padding: 10px;
    color: #e65061;
    a {
      text-decoration: none;
      color: #e65061;
      font-weight: 700;
      text-transform: uppercase;
    }

    svg {
      margin-right: 10px;
      font-size: 18px;
    }
  }

  .sidebar_logout_responsive {
    display: inline !important;
    z-index: 99999 !important;
    left: 0 !important;
    position: absolute;
  }

  @media only screen and (max-width: 978px) {
    & {
      display: none;
    }

    .sidebar_title {
      svg {
        display: inline;
      }
    }
  }
`;

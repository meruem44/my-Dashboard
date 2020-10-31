import styled from 'styled-components';

export const Container = styled.nav`
  background: #fff;
  grid-area: nav;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  border-bottom: 1px solid lightblue;
  
  .nav_icon {
      display: none;
  }
`;

export const NavBarLeft = styled.div`
  a {
    margin-right: 30px;
    text-decoration: none;
    color: #a5aaad;
    font-weight: 700;
    transition: all 0.3s;

    &:hover {
        color: #265acc;
        border-bottom: 3px solid #265acc;
    }
  }

  @media only screen and (max-width: 480px) {
        & {
         display: none;
        }
    }

`;

export const NavBarRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
      margin-left: 20px;
      text-decoration: none;
  }

  svg {
      border-radius: 50px;
      box-shadow: 2px 2px 5px #d9d9d9, -2px -2px 5px #ffffff
  }
`;


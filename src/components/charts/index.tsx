import React from 'react';

import { 
    Container, 
    ChartsLeft, 
    ChartsRight,
    ChartsRightCards 
} from './styles';

import { FaUserMd } from 'react-icons/fa';

const charts: React.FC = () => {
  return (
      <Container>

          <ChartsLeft>
              <div className="left_title">
                <div>
                    <h1> Daily reports</h1>
                    <p>Cupertino, California, USA</p>
                </div>
                <FaUserMd size={20} color="#fff"/>
              </div>
              <ChartsRightCards>

                <div className="card1">
                    <h1>Income</h1>
                    <p>R$75,300</p>
                </div>

                <div className="card2">
                    <h1>Sales</h1>
                    <p>R$75,300</p>
                </div>

                <div className="card3">
                    <h1>Users</h1>
                    <p>R$75,300</p>
                </div>

                <div className="card4">
                    <h1>Ordes</h1>
                    <p>R$75,300</p>
                </div>

                </ChartsRightCards>
          </ChartsLeft>

          <ChartsRight>
          <div className="rigth_title">
              <div>
                  <h1>Starts Reports</h1>
                  <p>Cupertino, California, USA</p>
              </div>
              <FaUserMd size={20} />
          </div>

          <ChartsRightCards>

            <div className="card1">
                <h1>Income</h1>
                <p>R$75,300</p>
            </div>

            <div className="card2">
                <h1>Sales</h1>
                <p>R$75,300</p>
            </div>

            <div className="card3">
                <h1>Users</h1>
                <p>R$75,300</p>
            </div>

            <div className="card4">
                <h1>Ordes</h1>
                <p>R$75,300</p>
            </div>

          </ChartsRightCards>

          </ChartsRight>
      </Container>
  );
}

export default charts;
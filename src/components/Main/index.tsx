import React from 'react';

import { Container, MainGroup } from './styles';
import { FaUser, FaCalendar, FaVideo, FaThumbsUp } from 'react-icons/fa';

import hello from '../../assets/hello.svg';
import Charts from '../charts';

const Main: React.FC = () => {
  return (
     <MainGroup>
          <Container>
          <div className="main_title">
              <img src={hello} />
              <div className="main_greeting">
                    <h1>Olá Galera do Linkedin</h1>
                    <p>Bem vindo ao meu dashborad</p>
              </div>
        </div>

              <div className="main_card">
                <div className="card">
                    <FaUser size={40} color="#add8e6" />
                    <div className="card_inner">
                        <p>Number de incritos</p>
                        <span>560</span>
                    </div>
                </div>

                <div className="card">
                    <FaCalendar size={40} color="#ff4040" />
                    <div className="card_inner">
                        <p>Time of wathing</p>
                        <span>560</span>
                    </div>
                </div>

                <div className="card">
                    <FaVideo size={40} color="#ffe140" />
                    <div className="card_inner">
                        <p>Number os videos</p>
                        <span>560</span>
                    </div>
                </div>

                <div className="card">
                    <FaThumbsUp size={40} color="#228b22" />
                    <div className="card_inner">
                        <p>Number of likes</p>
                        <span>560</span>
                    </div>
                </div>
              </div>

              <Charts />
      </Container>
     </MainGroup>
  )
}

export default Main;
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 50px;


    @media only screen and (max-width: 855px) {
        & {
            grid-template-columns: 1fr;
            margin-top: 30px;
        }
    }
`;

export const ChartsLeft = styled.div`
  padding: 25px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 5px 5px 5px 13px #ededed, -5px -5px 13px #ffffff;

  .left_title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        h1 {
            font-size: 24px;
            color: #2e4a66;
            margin-bottom: 5px;
        }

        p {
            font-size: 14px;
            font-weight: 700;
            color: #a5aaad;
        }
    }

    svg {
        color: #ffffff;
        font-size: 20px;
        background: #ffc100;
        border-radius: 200px 0 200px 200px;
        -moz-border-radius: 200px 0px 200px 200px;
        -webkit-border-radius: 200px 0px 200px 200px;
        border: 0px solid #000000;
        padding: 15px;
    }
  };
`;

export const ChartsRight = styled.div`
  
  padding: 25px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 5px 5px 5px 13px #ededed, -5px -5px 13px #ffffff;

  .rigth_title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
          h1 {
            font-size: 24px;
            color: #2e4a66;
            margin-bottom: 5px;
          }

          p {
            font-size: 14px;
            font-weight: 700;
            color: #a5aaad;
        }
    }

    svg {
        color: #ffffff;
        font-size: 20px;
        background: #39447a;
        border-radius: 200px 0 200px 200px;
        -moz-border-radius: 200px 0px 200px 200px;
        -webkit-border-radius: 200px 0px 200px 200px;
        border: 0px solid #000000;
        padding: 15px;
    }
      
  }

`;

export const ChartsRightCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;

    .card1 {
        background: #d1ecf1;
        color: #35a4ba;
        text-align: center;
        padding: 25px;
        border-radius: 5px;
        font-size: 15px;

        p {
            color: #35a4ba;
        }
    }

    .card2 {
        background: #d2f9ee;
        color: #38e1b0;
        text-align: center;
        padding: 25px;
        border-radius: 5px;
        font-size: 15px;

        p {
            color: #38e1b0;
        }
    }

    .card3 {
        background: #d6d8d9;
        color: #3a3e41;
        text-align: center;
        padding: 25px;
        border-radius: 5px;
        font-size: 15px;

        p {
            color: #3a3e41;
        }
    }

    .card4 {
        background: #fddcdf;
        color: #f65a6f;
        text-align: center;
        padding: 25px;
        border-radius: 5px;
        font-size: 15px;
        p {
            color: #f65a6f;
        }
    }
`;



import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px 50px;

    p {
        font-size: 20px;
        font-weight: 700;
        color: #a5aaad;
    }

    .main_title {
        display: flex;
        align-items: center;

        img {
            max-height: 100px;
            object-fit: contain;
            margin-right: 20px;
        }

        .main_greeting {
            h1 {
                font-size: 24px;
                color: #234a66;
                margin-bottom: 5px;
            }
        }
    }

    .main_card {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 30px;
        margin: 20px 0;

        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            height: 180px;
            padding: 25px;
            border-radius: 10px;
            background: #ffffff;
            box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;


            .card_inner {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                span {
                    font-size: 25px;
                }
            }
        }
    }

    @media only screen and (max-width: 855px) {
        .main_card {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-bottom: 0;
        }
    }
        
`;

export const MainGroup = styled.main`
    background: #f3f4f6;
    grid-area: main;
    overflow-y: auto;
`;  

import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 1rem;
margin: 2rem 0;
`;

export const CardContent = styled.div`
    height: 280px;
    border-radius: .4rem;
    background: #fff;
    box-shadow: 0 0 10px #0000001a;
    width: calc(210px - 16px);

    @media (max-width: 450px) {
        width: calc(50% - 8px);
    }


    > img{
        width: 200px;
        height: 200px;
    }

    > div{
        padding: 0 .5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3{
            font-size: 1.6rem;
            text-align: center;
        }

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            span:first-child{
                font-size: 1.5rem;
                font-weight: bold;
                color: ${({ theme }) => theme.COLORS.RED};
            }

            span:last-child{
                font-size: 1.5rem;
                text-decoration: line-through;
                color: ${({ theme }) => theme.COLORS.COLOR_PREVIOUS_VALUE_PRIMARY};
            }
        }
    }
`;
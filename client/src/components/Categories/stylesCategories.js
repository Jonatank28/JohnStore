import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    padding: 2rem 0;
    overflow-x: auto;
`;

export const CategoriesContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    
        span{
            font-size: 1.6rem;
        }
`;  
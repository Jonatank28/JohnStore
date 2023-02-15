import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;

    > span{
        font-size: 1.4rem;
    }
`;
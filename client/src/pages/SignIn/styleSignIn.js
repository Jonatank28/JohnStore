import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    > div:first-child {
        display: flex;
        min-width: 560px;
        justify-content: center;
        align-items: center;

        a{
            font-size: 1.5rem;
            text-align: center;
            display: block;
            margin-top: 2rem;
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.BLUE};
        }
        

        div{
            padding: 1rem;
            border-radius: .3rem;
            background-color: #222222;

            h1{
                font-size: 3rem;
                text-align: center;
                margin-bottom: 1.5rem;
            }

            .form{
                display: flex;
                flex-direction: column;
                gap: .6rem;
                width: 30rem;

                label{
                    font-size: 1.4rem;
                }
    
                input{
                    height: 3rem;
                    font-size: 1.4rem;
                    width: 100%;
                    padding: .8rem 1rem;
                    border: none;
                    outline: none;
                    border-radius: .3rem;
                }

                span{
                    color: red;
                    font-size: 1.2rem;
                }
    
                button{
                    height: 2.8rem;
                    font-size: 2rem;
                    border-radius: .3rem;
                    border: none;
                    margin-top: 1rem;
                    background-color: #32E0C4;
                }
            }

        }
    }

    > div:last-child{
        width: 100%;
        height: 100%;


        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            background-size: cover;
        }
    }

    > form{
        background-color: blue;
    }
`;
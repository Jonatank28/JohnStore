import { Container } from './stylesButton';

export const Button = ({ onclick, title, ...props }) => {
    return (
        <Container onClick={onclick} { ...props }>
            {title}
        </Container>
    )
}

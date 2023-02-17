import { Container } from './stylesButton';
import './stylesButton.css'

export const Button = ({ onclick, type, ...props }) => {
    const buttonClass = `button ${type === 'save' || type === 'submit' ? 'save' : 'cancel'}`;
    return (
        <Container  
            onClick={onclick} 
            className={buttonClass}
            { ...props }
        >
            {type === 'save' || type === 'submit' ? 'Salvar' : 'Cancelar'}
        </Container>
    )
}

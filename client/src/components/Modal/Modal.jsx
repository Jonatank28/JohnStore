import Modal from 'react-modal';
import { customStyles }  from './stylesModal'

export const Modall = ({ openModal, closeModal, children }) => {

    return (
        <Modal 
            isOpen={openModal} 
            onRequestClose={ closeModal } 
            style={customStyles} 
        >
            { children }
        </Modal>
    )
}

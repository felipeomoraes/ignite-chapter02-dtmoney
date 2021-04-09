import Modal from 'react-modal';
import { Container } from './styles';
import fecharImg from '../../assets/fechar.svg';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={fecharImg} alt="Fechar"/>
            </button>

            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título"/>
                <input type="number" placeholder="Preço"/>
                <input type="text" placeholder="Categria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
};
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import fecharImg from '../../assets/fechar.svg';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import { useState } from 'react';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');

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

                <TransactionTypeContainer>
                    <RadioBox 
                        type="button" 
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={entradasImg} alt=""/>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button" 
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={saidasImg} alt=""/>
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input type="text" placeholder="Categria"/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
};
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import fecharImg from '../../assets/fechar.svg';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        
        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transactions', data);
        onRequestClose();
    }

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

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input 
                    type="text" 
                    placeholder="Título"
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                <input 
                    type="number" 
                    placeholder="Valor"
                    onChange={event => setValue(Number(event.target.value))}
                    value={value}
                />

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

                <input 
                    type="text" 
                    placeholder="Categoria"
                    onChange={event => setCategory(event.target.value)}
                    value={category}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
};
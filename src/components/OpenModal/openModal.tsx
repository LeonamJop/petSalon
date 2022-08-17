import styles from './styles.module.css';
import { Plus } from "phosphor-react";
import ReactModal from 'react-modal';
import { useState } from 'react';

ReactModal.setAppElement('#root');

export function OpenModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleOpenModel() {
        setModalIsOpen(true);
    }

    function handleCloseModel() {
        setModalIsOpen(false)
    }
    return (
        <div className={styles.modalRegister}>
            <div className={styles.buttonRegister}>
                <button
                    title='Cadastrar Cliente'
                    onClick={handleOpenModel}
                >
                    <Plus size={20} />
                </button>
            </div>
            <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModel}
            >
                <div>
                    <h1>Modal</h1>
                </div>
            </ReactModal>
        </div>
    )
}
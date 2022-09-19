import styles from './styles.module.css';
import { Plus } from "phosphor-react";
import ReactModal from 'react-modal';
import * as Dialog from '@radix-ui/react-dialog';

ReactModal.setAppElement('#root');

export function OpenModal() {

    return (
        <div className={styles.modalRegister}>
            <div className={styles.buttonRegister}>
                <Dialog.Trigger
                    title='Cadastrar Cliente'
                >
                    <Plus size={20} />
                </Dialog.Trigger>
            </div>
        </div>
    )
}
import styles from './styles.module.css';
import { Plus } from "phosphor-react";
import ReactModal from 'react-modal';
import * as Dialog from '@radix-ui/react-dialog';
import { OpenModalContainer } from './styles';

ReactModal.setAppElement('#root');

export function OpenModal() {

    return (
        <OpenModalContainer>
            <div>
                <Dialog.Trigger
                    title='Cadastrar Cliente'
                >
                    <Plus size={20} />
                </Dialog.Trigger>
            </div>
        </OpenModalContainer>
    )
}
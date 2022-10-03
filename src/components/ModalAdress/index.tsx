import styles from './styles.module.css';
import { X } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

interface RecordsClientsProps {

}

export function ModalAdress() {
    return (
        <Dialog.Portal>
            <Dialog.Overlay className={styles.overlay}>
                <Dialog.Content className={styles.modal}>
                    <form>
                        <div className={styles.header}>
                            <Dialog.Close
                                type='button'
                                title='Fechar tela'
                                className={styles.closeButton}
                            >
                                <X
                                    size={25}
                                />
                            </Dialog.Close>
                        </div>
                        <h1>Endereço</h1>
                        <div className={styles.personalData}>
                            <div>
                                <div className={styles.clientInfo}>
                                    <label htmlFor="street">Rua:</label>
                                    <input
                                        name='street'
                                        id='street'
                                        type='text'
                                        placeholder='Digite o nome da rua'
                                    />
                                </div>
                                <div className={styles.personalDocument}>
                                    <div >
                                        <label htmlFor="district">Bairro:</label>
                                        <input
                                            name='district'
                                            id='district'
                                            type='text'
                                            placeholder='Digite o Barrio'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="city">Cidade:</label>
                                        <input
                                            name='city'
                                            id='city'
                                            type='text'
                                            placeholder='Digite a Cidade'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.clientInfo}>
                                    <label htmlFor="cep">CEP:</label>
                                    <input
                                        name='cep'
                                        id='cep'
                                        type="text"
                                        maxLength={9}
                                        placeholder='Ex: 00000-00'
                                    />
                                </div>
                                <div className={styles.personalDocument}>
                                    <div>
                                        <label htmlFor="houseNumber">Número da residencia:</label>
                                        <input
                                            name='houseNumber'
                                            id='houseNumber'
                                            type="text"
                                            placeholder='Digite o número da residêcia'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="States">Estado:</label>
                                        <select id="States">
                                            <option value="">Estados</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.complementArea}>
                            <label htmlFor="complementArea">Complemento:</label>
                            <textarea name='complement' id="complementArea"></textarea>
                        </div>
                    </form>
                    <footer className={styles.footer}>
                        <Dialog.Close
                            type='button'
                            className={styles.buttonCancel}
                        >
                            Cancelar
                        </Dialog.Close>
                        <button
                            type='submit'
                            className={styles.submit}
                        >
                            Cadastrar
                        </button>
                    </footer>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>

    )
}
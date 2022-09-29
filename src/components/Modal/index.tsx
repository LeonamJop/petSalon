import styles from './styles.module.css';
import { X } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

interface RecordsClientsProps {

}

export function Modal() {
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
                        <h1>Dados do Cliente</h1>
                        <div className={styles.personalData}>
                            <div>
                                <div className={styles.clientInfo}>
                                    <label htmlFor='name'>
                                        Nome:
                                    </label>
                                    <input
                                        name='name'
                                        id='name'
                                        type="text"
                                        placeholder='Digite o nome do cliente'
                                    />
                                </div>
                                <div className={styles.personalDocument}>
                                    <div>
                                        <label htmlFor="cpf">
                                            CPF:
                                        </label>
                                        <input
                                            name='cpf'
                                            id='cpf'
                                            type="text"
                                            placeholder='Ex: 123.123.123-00'
                                            maxLength={14}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="birthDate">
                                            Data de nascimento:
                                        </label>
                                        <input
                                            name='birthDate'
                                            id="birthDate"
                                            type='date'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className={styles.clientInfo}>
                                    <label htmlFor="clientEmail">Email:</label>
                                    <input
                                        name='email'
                                        id='clientEmail'
                                        type='email'
                                        placeholder='Ex: exemplo@email.com'
                                    />
                                </div>
                                <div className={styles.personalDocument}>
                                    <div>
                                        <label htmlFor="phoneNumber">
                                            Telefone:
                                        </label>
                                        <input
                                            name='phoneNumber'
                                            id='phoneNumber'
                                            type='tel'
                                            maxLength={14}
                                            placeholder="Ex: (00) 0 0000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phoneNumber2">
                                            Telefone:
                                        </label>
                                        <input
                                            name='phoneNumber2'
                                            id='phoneNumber2'
                                            type='tel'
                                            maxLength={15}
                                            placeholder="Ex: (00) 0000-0000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div >
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
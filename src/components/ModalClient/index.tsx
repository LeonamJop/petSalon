import styles from './styles.module.css';
import { X } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';
import { FormEvent, useState } from 'react';
import axios from 'axios';

export function ModalClient() {
    const [cpf, setCPF] = useState("");
    const [phone, setPhone] = useState("");
    const [telephone, setTelephone] = useState("");

    const cpfMask = (cpf: string) => {
        return cpf
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1')

    }

    const phoneNumberMask = (phoneNumber: string) => {
        return phoneNumber
            .replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            .replace(/(\d)(\d{4})$/, "$1-$2");
    }

    async function handleCreatClient(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);

        const data = Object.fromEntries(formData);

        if (!data.name) {
            return
        }

        if (!data.cpf) {
            return
        }

        if (!data.phone_number) {
            return
        }

        try {
            await axios.post('https://petsalon-api.herokuapp.com/customer/', {
                name: data.name,
                cpf: data.cpf,
                birth_date: data.birth_date,
                email: data.email,
                phone_number: data.phone_number,
                telephone: data.telephone
            })

            alert("Cliente cadastrado com sucesso")

        } catch (err) {
            console.log(err);
            alert("Erro ao cadastrar o cliente")
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className={styles.overlay}>
                <Dialog.Content className={styles.modal}>
                    <form onSubmit={handleCreatClient}>
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
                                        Nome: *
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
                                            CPF: *
                                        </label>
                                        <input
                                            name='cpf'
                                            id='cpf'
                                            type="text"
                                            value={cpf}
                                            onChange={(e) => setCPF(cpfMask(e.target.value))}
                                            placeholder='Ex: 123.123.123-00'
                                            maxLength={14}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="birthDate">
                                            Data de nascimento:
                                        </label>
                                        <input
                                            name='birth_date'
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
                                            Celular: *
                                        </label>
                                        <input
                                            name='phone_number'
                                            id='phoneNumber'
                                            type='tel'
                                            value={phone}
                                            onChange={(e) => setPhone(phoneNumberMask(e.target.value))}
                                            maxLength={15}
                                            placeholder="Ex: (00) 00000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="telephone">
                                            Telefone:
                                        </label>
                                        <input
                                            name='telephone'
                                            id='telephone'
                                            type='tel'
                                            value={telephone}
                                            onChange={(e) => setTelephone(phoneNumberMask(e.target.value))}
                                            maxLength={14}
                                            placeholder="Ex: (00) 0000-0000"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div >
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
                    </form>
                </Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Portal>

    )
}
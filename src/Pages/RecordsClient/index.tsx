import styles from './styles.module.css';
import { Header } from "../../components/Header";
import { MagnifyingGlass } from "phosphor-react";
import { TitlePage } from '../../components/TitlePage';
import { Table } from '../../components/Table';
import { useEffect, useState } from 'react';
import { OpenModal } from '../../components/OpenModal/openModal';
import * as Dialog from '@radix-ui/react-dialog';
import { Modal } from '../../components/Modal';
import axios from 'axios';

interface Client {
    id: number;
    external_id: string;
    name: string,
    cpf: string,
    birth_date: string,
    email: string,
    telephone: string;
    phone_number: string;
    pet: []
}

export function RecordsClient() {
    const [searchClients, setSearchClients] = useState('');
    const [clients, setClients] = useState<Client[]>([]);

    const lowerSearchClients = searchClients.toLowerCase();

    // const filteredClientsNames = useMemo(() => {
    //     return (clients.filter(
    //         (client) => client.name.toLowerCase().startsWith(lowerSearchClients)
    //     ))
    // }, []);

    useEffect(() => {
        axios('https://petsalon-api.herokuapp.com/customer/')
            .then(response => {
                setClients(response.data);
            })
    }, [])

    return (
        <>
            <Header />
            <TitlePage
                titlePage='Cadastro de Cliente'
            />
            <div className={styles.registersClients}>
                <div className={styles.filter}>
                    <input
                        type="search"
                        title='Digite o nome do cliente'
                        placeholder='Digite o nome do cliente'
                        value={searchClients}
                        onChange={(event) => setSearchClients(event.target.value)}
                    />
                    <button
                        title='Pesquisar'
                    >
                        <MagnifyingGlass size={20} />
                    </button>
                </div>
                <Dialog.Root>
                    <OpenModal />
                    <Modal />
                </Dialog.Root>
                <table className={styles.registersTable}>
                    <tbody>
                        <tr className={styles.tableHeader}>
                            <td>Nome</td>
                            <td>Email</td>
                            <td>Número</td>
                        </tr>
                        {clients.map(client => {
                            return (
                                <Table
                                    key={client.id}
                                    name={client.name}
                                    email={client.email}
                                    phoneNumber={client.phone_number}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
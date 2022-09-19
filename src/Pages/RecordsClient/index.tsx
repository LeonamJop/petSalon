import styles from './styles.module.css';
import { Header } from "../../components/Header";
import { MagnifyingGlass } from "phosphor-react";
import { TitlePage } from '../../components/TitlePage';
import { Table } from '../../components/Table';
import { v4 as uuid } from 'uuid';
import { useMemo, useState } from 'react';
import { OpenModal } from '../../components/OpenModal/openModal';
import * as Dialog from '@radix-ui/react-dialog';
import { Modal } from '../../components/Modal';

const clients = [
    {
        id: uuid(),
        name: 'Leonam Silva',
        email: 'leonam@email.com',
        phoneNumber: '(99)9999-9999',
        typeService: 'Mensal'
    }, {
        id: uuid(),
        name: 'Maria Pereira',
        email: 'maria@email.com',
        phoneNumber: '(99)9999-9999',
        typeService: 'Único'
    }, {
        id: uuid(),
        name: 'João Carlos',
        email: 'joao_carlos@email.com',
        phoneNumber: '(99)9999-9999',
        typeService: 'Mensal'
    }, {
        id: uuid(),
        name: 'João da Silva',
        email: 'joaoSilva@email.com',
        phoneNumber: '(99)9999-9999',
        typeService: 'Único'
    }, {
        id: uuid(),
        name: 'Julia Macedo',
        email: 'juliaMaistarde@email.com',
        phoneNumber: '(99)9999-9999',
        typeService: 'Mensal'
    }
]

export function RecordsClient() {
    const [searchClients, setSearchClients] = useState('');
    const [clientList, setClientList] = useState(clients)

    const lowerSearchClients = searchClients.toLowerCase();

    const filteredClientsNames = useMemo(() => {
        return (clients.filter(
            (client) => client.name.toLowerCase().startsWith(lowerSearchClients)
        ))
    }, [searchClients]);

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
                    <Modal/>
                </Dialog.Root>
                <table className={styles.registersTable}>
                    <tbody>
                        <tr className={styles.tableHeader}>
                            <td>Nome</td>
                            <td>Email</td>
                            <td>Número</td>
                            <td>Tipo de serviço</td>
                        </tr>
                        {filteredClientsNames.map(client => {
                            return (
                                <Table
                                    key={client.id}
                                    name={client.name}
                                    email={client.email}
                                    phoneNumber={client.phoneNumber}
                                    typeService={client.typeService}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
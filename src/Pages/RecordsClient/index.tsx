import styles from './styles.module.css';
import { MagnifyingGlass } from "phosphor-react";
import { TableClient } from '../../components/TableClient';
import { useEffect, useState } from 'react';
import { OpenModal } from '../../components/OpenModal/openModal';
import * as Dialog from '@radix-ui/react-dialog';
import { ModalClient } from '../../components/ModalClient';
import axios from 'axios';
import { Client } from '../../@types/clients';
import { RegistersClientsContainer, RegistersTableContainer } from './styles';

export function RecordsClient() {
    const [searchClients, setSearchClients] = useState('');
    const [clients, setClients] = useState<Client[]>([]);

    // const lowerSearchClients = searchClients.toLowerCase();

    // const filteredClientsNames = useMemo(() => {
    //     return (clients.filter(
    //         (client) => client.name.toLowerCase().startsWith(lowerSearchClients)
    //     ))
    // }, []);

    useEffect(() => {
        axios('http://localhost:8080/customer/all')
            .then(response => {
                setClients(response.data);
            })
    }, [])

    return (
        <>
            <RegistersClientsContainer>
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
            </RegistersClientsContainer>

            <Dialog.Root>
                <OpenModal />
                <ModalClient />
            </Dialog.Root>

            <RegistersTableContainer>
                <tbody>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Número</td>
                    </tr>
                    {clients.map(client => {
                        return (
                            <TableClient
                                key={client.id}
                                name={client.name}
                                email={client.email}
                                phoneNumber={client.phone_number}
                            />
                        )
                    })}
                </tbody>
            </RegistersTableContainer>
        </>
    )
}
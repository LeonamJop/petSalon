import styles from './styles.module.css';
import { Header } from "../../components/Header";
import { MagnifyingGlass } from "phosphor-react";
import { TitlePage } from '../../components/TitlePage';
import { Table } from '../../components/Table';

const clients = [
    {
        name: 'Leonam',
        email: 'leonam@email.com',
        phoneNumber: '(99)9999-9999',
        typeService: 'Mensal'
    }, {
        name: 'Maria',
        email: 'maria@email.com',
        phoneNumber: '(99)9999-9999',
        typeService: 'Único'
    }, {
        name: 'Maria',
        email: 'maria@email.com',
        phoneNumber: '(99)9999-9999',
        typeService: 'Único'
    }, {
        name: 'Maria',
        email: 'maria@email.com',
        phoneNumber: '(99)9999-9999',
        typeService: 'Único'
    }
]

export function RecordsClient() {

    function handleClientSurvey() {

    }

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
                        placeholder='Digite o nome do cliente'
                    />
                    <button
                        title='Pesquisar'
                        onClick={handleClientSurvey}
                    >
                        <MagnifyingGlass size={20} />
                    </button>
                </div>
                <table className={styles.registersTable}>
                    <tr className={styles.tableHeader}>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>Número</td>
                        <td>Tipo de serviço</td>
                    </tr>
                    {clients.map(client => {
                        return (
                            <Table
                                name={client.name}
                                email={client.email}
                                phoneNumber={client.phoneNumber}
                                typeService={client.typeService}
                            />
                        )
                    })}
                </table>
            </div>
        </>
    )
}
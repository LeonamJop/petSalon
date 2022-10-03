import styles from './styles.module.css';

interface TableClientProps {
    name: string;
    email: string;
    phoneNumber: string;
}

export function TableClient({ name, email, phoneNumber }: TableClientProps) {
    
    return (
            <tr
                className={styles.tableClient}
            >
                <td>{name}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
            </tr>
    )
}
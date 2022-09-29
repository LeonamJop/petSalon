import styles from './styles.module.css';

interface TableProps {
    name: string;
    email: string;
    phoneNumber: string;
}

export function Table({ name, email, phoneNumber }: TableProps) {
    
    
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
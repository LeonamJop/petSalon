import styles from './styles.module.css';

interface tableProps {
    name: string;
    email: string;
    phoneNumber: string;
    typeService: string;
}

export function Table({ name, email, phoneNumber, typeService }: tableProps) {
    
    function handleOpenModal() {
        
    }
    
    return (
            <tr
                className={styles.tableClient}
                onClick={handleOpenModal}    
            >
                <td>{name}</td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>{typeService}</td>
            </tr>
    )
}
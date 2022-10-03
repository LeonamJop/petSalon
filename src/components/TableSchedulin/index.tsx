import styles from './styles.module.css';

interface TableProps {
    pet: string;
    clipping: string;
    date_appointment: string;
    hour_appointment: string;
}

export function TableScheduling({ pet, clipping, date_appointment, hour_appointment }: TableProps) {
    
    return (
            <tr
                className={styles.tableScheduling}
            >
                <td>{pet}</td>
                <td>{clipping}</td>
                <td>{date_appointment}</td>
                <td>{hour_appointment}</td>
            </tr>
    )
}
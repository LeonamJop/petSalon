import axios from 'axios';
import { useEffect, useState } from 'react';
import { TableScheduling } from '../TableSchedulin';
import styles from './styles.module.css';

interface ShedulingProps {
    id: number;
    external_id: string;
    bath: boolean;
    clipping: string;
    hydration: boolean;
    clearance: boolean;
    brush_teeth: boolean;
    cut_nails: boolean;
    transport: boolean;
    date_appointment: string;
    hour_appointment: string;
    payment: number;
    pet: {
        name: string;
    };
}

export function Calendar() {
    const [schedulings, setSchedulings] = useState<ShedulingProps[]>([])

    useEffect(() => {
        axios('https://petsalon-api.herokuapp.com/scheduling/')
            .then(response => {
                setSchedulings(response.data);
            })
    }, [])

    return (
        <div className={styles.agend}>
            <div className={styles.calendarHeader}>
                <strong>Agenda</strong>
            </div>
            <div className={styles.calendar}>
            <table className={styles.registersTable}>
                    <tbody>
                        <tr className={styles.tableHeader}>
                            <td>Pet</td>
                            <td>Serviço</td>
                            <td>Data</td>
                            <td>Horário</td>
                        </tr>
                        {schedulings.map(scheduling => {
                            return (
                                <TableScheduling
                                    key={scheduling.id}
                                    pet={scheduling.pet.name}
                                    clipping={scheduling.clipping}
                                    date_appointment={scheduling.date_appointment}
                                    hour_appointment={scheduling.hour_appointment}
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
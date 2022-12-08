import axios from 'axios';
import { useEffect, useState } from 'react';
import { Sheduling } from '../../@types/sheduling';
import { TableScheduling } from '../TableSchedulin';
import { AgendContainer, CalendarContainer, CalendarHeader, TableContainer } from './styles';
import styles from './styles.module.css';

export function Calendar() {
    const [schedulings, setSchedulings] = useState<Sheduling[]>([])

    useEffect(() => {
        axios('http://localhost:8080/order/all')
            .then(response => {
                setSchedulings(response.data);
            })
    }, [])

    return (
        <AgendContainer>
            <CalendarHeader>
                <strong>Agenda</strong>
            </CalendarHeader>
            <CalendarContainer>
                <TableContainer>
                    <tbody>
                        <tr>
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
                </TableContainer>
            </CalendarContainer>
        </AgendContainer>
    )
}
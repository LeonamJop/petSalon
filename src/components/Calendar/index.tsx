import { useState } from 'react';
import styles from './styles.module.css';

export function Calendar() {
    const [currentYear, setCurrentYear] = useState(2021);

    // const month = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    // ];

    // moment.updateLocale("pt", {
    //     months: [
    //         "Janeiro",
    //         "Fevereiro",
    //         "Março",
    //         "Abril",
    //         "Maio",
    //         "Junho",
    //         "Julho",
    //         "Agosto",
    //         "Setembro",
    //         "Outubro",
    //         "Novembro",
    //         "Dezembro",
    //     ],
    // });

    return (
        <div className={styles.agend}>
            <div className={styles.calendarHeader}>
                <strong>Agenda</strong>
            </div>
            <div className={styles.calendar}>
                <h1>Calendario</h1>
            </div>
        </div>
    )
}
import styles from './styles.module.css';

export function Calendar() {
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
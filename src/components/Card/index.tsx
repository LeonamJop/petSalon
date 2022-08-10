import styles from './styles.module.css';
import { Trash } from "phosphor-react";
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

export type CardProps = {
    id: string;
    name: string;
    petName: string;
    date: Date;
    paymentStatus: "Pago" | "Pendente";
}

export function Card({name,date,paymentStatus, petName}: CardProps) {

    const dateFormatted = format(date, "dd'/'MM'/'yyyy HH:mm", {
        locale: ptBR
    })

    return (
        <div className={styles.cards}>
            <div className={styles.content}>
                <p>Cliente: {name}</p>
                <p>Data e hora: {dateFormatted}</p>
                <p>Nome do Pet: {petName}</p>
                <p>Status de pagamento: {paymentStatus}</p>
            </div>
            <button
                className={styles.deleteCard}
                title="Deletar cadastro"
            >
                <Trash size={20} />
            </button>
        </div>
    )
}
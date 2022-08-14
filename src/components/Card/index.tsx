import styles from './styles.module.css';
import { Trash } from "phosphor-react";
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';

interface CardProps {
    id: string;
    name: string;
    petName: string;
    date: Date;
    paymentStatus: string;
    onDeleteCard: (card: string) => void;
}

export function Card({id, name,date,paymentStatus, petName, onDeleteCard}: CardProps) {

    const dateFormatted = format(date, "dd'/'MM'/'yyyy HH:mm", {
        locale: ptBR
    })

    function handleDeleteCard() {
        onDeleteCard(id);
    }

    return (
        <div className={styles.cards}>
            <div id={id} className={styles.content}>
                <p>Cliente: {name}</p>
                <p>Data e hora: {dateFormatted}</p>
                <p>Nome do Pet: {petName}</p>
                <p>Status de pagamento: {paymentStatus}</p>
            </div>
            <button
                className={styles.deleteCard}
                title="Deletar cadastro"
                onClick={handleDeleteCard}
            >
                <Trash size={20} />
            </button>
        </div>
    )
}
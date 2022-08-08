import styles from './styles.module.css';
import { Trash } from "phosphor-react";

export function Card() {
    return (
        <div className={styles.cards}>
            <div className={styles.content}>
                <p>Cliente: Leonam</p>
                <p>Data e hora: 12/08/22 - 10:45</p>
                <p>Nome do Pet: Furacão</p>
                <p>Status de pagamento: Pago</p>
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
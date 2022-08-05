import styles from './styles.module.css';
import { ArrowRight } from "phosphor-react";

export function Cadastres() {
    return (
        <div className={styles.informationCadastres}>
            <div className={styles.cadastres}>
                <div>
                    <h2>Cadastros recentes</h2>
                </div>
                <button title='Tela de cadastro'>
                    <ArrowRight size={20} />
                </button>
            </div>
            <div className={styles.cardsCadastres}>
                Cards
            </div>
        </div>
    )
}
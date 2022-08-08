import styles from './styles.module.css';
import { ArrowRight } from "phosphor-react";
import { Card } from '../Card';

export function Cadastres() {
    return (
        <div className={styles.informationCadastres}>
            <div className={styles.cadastres}>
                <div>
                    <h2>Cadastros recentes</h2>
                </div>
                <button title='Ir para os cadastros'>
                    <ArrowRight size={20} />
                </button>
            </div>
            <div className={styles.cardsCadastres}>
                <Card/>
            </div>
        </div>
    )
}
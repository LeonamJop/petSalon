import styles from './styles.module.css';
import { ArrowRight } from "phosphor-react";
import { Card, CardProps } from '../Card';
import { useNavigate } from 'react-router-dom';


type CadastrosProps = {
    itens: CardProps[]
}

export function Cadastres({itens}: CadastrosProps) {
    const navigate = useNavigate();

    function handleScreenSwitching() {
        navigate('/records')
    }

    return (
        <div className={styles.informationCadastres}>
            <div className={styles.cadastres}>
                <div>
                    <h2>Cadastros recentes</h2>
                </div>
                <button
                    title='Ir para os cadastros'
                    onClick={handleScreenSwitching}
                >
                    <ArrowRight size={20} />
                </button>
            </div>
            <div className={styles.cardsCadastres}>
                {itens.map(card => {
                    return (
                        <Card
                            key={card.id}
                            {...card}
                        />
                    )
                })}
            </div>
        </div>
    )
}
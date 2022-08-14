import styles from './styles.module.css';
import { ArrowRight } from "phosphor-react";
import { Card } from '../Card';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const cards = [{
    id: uuid(),
    name: "Leonam",
    petName: "Furacão",
    date: new Date('2022-05-10 14:30:00'),
    paymentStatus: "Pago"
}, {
    id: uuid(),
    name: "João",
    petName: "Magrela",
    date: new Date('2022-05-10 14:30:00'),
    paymentStatus: "Pendente"
}, {
    id: uuid(),
    name: "José",
    petName: "Possante",
    date: new Date('2022-05-10 14:30:00'),
    paymentStatus: "Pago"
}, {
    id: uuid(),
    name: "Maria",
    petName: "Biscoito",
    date: new Date('2022-05-10 14:30:00'),
    paymentStatus: "Pendente"
}, {
    id: uuid(),
    name: "Maria",
    petName: "Biscoito",
    date: new Date('2022-05-10 14:30:00'),
    paymentStatus: "Pendente"
}]

export function Cadastres() {
    const [recentsCadastres, setRecentsCadastres] = useState(cards);

    const navigate = useNavigate();

    function handleScreenSwitching() {
        navigate('/records')
    }

    function deleteCard(cardIdToDelete: string) {
        const cardsWithoutDeletedOne = recentsCadastres.filter(recentCadastre => {
            return recentCadastre.id !== cardIdToDelete;
        })
        setRecentsCadastres(cardsWithoutDeletedOne);
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
                {recentsCadastres.map(recentCadastre =>{
                    return(
                        <Card
                            key={recentCadastre.id}
                            id={recentCadastre.id}
                            name={recentCadastre.name}
                            petName={recentCadastre.petName}
                            date={recentCadastre.date}
                            paymentStatus={recentCadastre.paymentStatus}
                            onDeleteCard={deleteCard}
                        />
                    )
                })
                }
            </div>
        </div>
    )
}
import styles from './styles.module.css';
import { Header } from "../../components/Header";
import { Cadastres } from '../../components/Cadastre';
import { Calendar } from '../../components/Calendar';
import { v4 as uuid } from 'uuid';
import { CardProps } from '../../components/Card';


const cards: CardProps[] = [{
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
    paymentStatus: "Pago"
}, {
    id: uuid(),
    name: "Maria",
    petName: "Biscoito",
    date: new Date('2022-05-10 14:30:00'),
    paymentStatus: "Pago"
}, {
    id: uuid(),
    name: "Maria",
    petName: "Biscoito",
    date: new Date('2022-05-10 14:30:00'),
    paymentStatus: "Pago"
}]

export function Home() {
    return (
        <>
            <Header />
            <div className={styles.home}>
                <Cadastres itens={cards}/>
                <Calendar/>
            </div>
        </>
    )
}
import styles from './styles.module.css';
import { Header } from "../../components/Header";
import { Cadastres } from '../../components/Cadastre';

export function Home() {
    return (
        <>
            <Header />
            <div className={styles.home}>
                <Cadastres />
            </div>
        </>
    )
}
import styles from './styles.module.css';
import { SignOut } from 'phosphor-react';

export function Home() {
    return (
        <header className={styles.header}>
            <div>
                <h1>Roana Pet Salon</h1>
            </div>
            <button title='Sair'>
                <SignOut size={30} />
            </button>
        </header>
    )
}
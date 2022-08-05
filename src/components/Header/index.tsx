import styles from './styles.module.css';
import { SignOut } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        navigate("/Login")
    }

    return (
        <header className={styles.header}>
            <div>
                <h1>Roana Pet Salon</h1>
            </div>
            <button
                title='Sair'
                onClick={handleLogout}
            >
                <SignOut size={30} />
            </button>
        </header>
    )
}
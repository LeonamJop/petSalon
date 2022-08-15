import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from "phosphor-react";

interface titlePageProps {
    titlePage: string
}

export function TitlePage({ titlePage }: titlePageProps) {

    const navigate = useNavigate();

    function handleScreenSwitching() {
        navigate('/home')
    }

    return (
        <div
            className={styles.titlePage}
        >
            <button title='Voltar'>
                <ArrowLeft
                    size={25}
                    onClick={handleScreenSwitching}
                />
            </button>
            <h2>
                {titlePage}
            </h2>
        </div>
    )
}
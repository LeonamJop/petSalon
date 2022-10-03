import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

interface OptionsCadastresProps {
    title: string;
    content: string;
    switchToScreen: string;
}

export function OptionsCadastres({ title, content, switchToScreen }: OptionsCadastresProps) {
    const navigate = useNavigate();

    function handleScreenSwitching() {
        navigate(switchToScreen);
    }

    return (
        <div
            className={styles.optionsCadastres}
            onClick={handleScreenSwitching}
        >
            <header>
                <h2>
                    {title}
                </h2>
            </header>
            <div>
                {content}
            </div>
        </div>

    );
}